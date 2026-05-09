import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const here = path.dirname(fileURLToPath(import.meta.url));
const inPath = path.join(here, "..", "public", "showup2move-logo.png");
const outDarkPath = path.join(here, "..", "public", "showup2move-logo-dark.png");
const outLightTrimmedPath = path.join(here, "..", "public", "showup2move-logo.png");

async function main() {
  // Step 1: Trim transparent border from the source so the visible mark
  // takes up more of the rendered box and looks bigger at the same height.
  const trimmed = await sharp(inPath)
    .trim({ threshold: 5 })
    .toBuffer({ resolveWithObject: true });

  // Save trimmed light version back to the same path so it's tighter.
  await sharp(trimmed.data).png().toFile(outLightTrimmedPath);

  // Step 2: Build the dark-mode variant.
  // For each pixel: if it's a grayscale (R≈G≈B) "dark" pixel, recolor it white
  // (preserve original alpha). Colored pixels (the orange pin) untouched.
  const { data, info } = await sharp(trimmed.data)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const a = out[i + 3];
    if (a === 0) continue;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = max - min;
    const lightness = (r + g + b) / 3;

    // Grayscale-ish pixel that's dark → recolor toward white.
    // Encode darkness as alpha-of-white so anti-aliased text stays smooth.
    if (chroma < 25 && lightness < 200) {
      // Map lightness 0..200 -> alpha 255..0
      // (the darker the source pixel, the more opaque white we want)
      const darkness = 200 - lightness;
      const newAlpha = Math.round((darkness / 200) * 255);
      out[i] = 255;
      out[i + 1] = 255;
      out[i + 2] = 255;
      // Multiply by existing alpha so transparent regions stay transparent.
      out[i + 3] = Math.round((newAlpha * a) / 255);
    }
  }

  await sharp(out, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(outDarkPath);

  console.log("OK:");
  console.log("  light (trimmed):", outLightTrimmedPath);
  console.log("  dark            :", outDarkPath);
  console.log("  size            :", info.width, "x", info.height);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
