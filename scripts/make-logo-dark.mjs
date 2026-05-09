import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const here = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(here, "..", "public", "showup2move-logo.png");
const outLight = path.join(here, "..", "public", "showup2move-logo.png");
const outDark = path.join(here, "..", "public", "showup2move-logo-dark.png");

function isOrange(r, g, b, a) {
  return a > 50 && r > 200 && g > 60 && g < 200 && b < 120;
}

function isOpaque(a) {
  return a > 30;
}

async function loadRaw(input) {
  return sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
}

async function dropTagline(buf) {
  // 1) Trim transparent border first so density math is meaningful.
  const pre = await sharp(buf).trim({ threshold: 5 }).png().toBuffer();
  const { data, info } = await loadRaw(pre);
  const W = info.width;
  const H = info.height;

  // 2) Locate the rightmost orange-pin column. Tagline lives to the right of it.
  let pinRight = 0;
  let pinBottom = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4;
      if (isOrange(data[i], data[i + 1], data[i + 2], data[i + 3])) {
        if (x > pinRight) pinRight = x;
        if (y > pinBottom) pinBottom = y;
      }
    }
  }

  const textStartX = pinRight + 4;

  // 3) For each row, count opaque pixels in the text region.
  const rowDensity = new Array(H).fill(0);
  for (let y = 0; y < H; y++) {
    for (let x = textStartX; x < W; x++) {
      const a = data[(y * W + x) * 4 + 3];
      if (isOpaque(a)) rowDensity[y]++;
    }
  }

  // 4) The wordmark is one *thick* contiguous dense band. The tagline is a
  //    much thinner band below it. We lock onto the first dense band and
  //    STOP as soon as we hit a non-dense row.
  const denseThreshold = Math.max(40, (W - textStartX) * 0.06);
  const dense = rowDensity.map((c) => c > denseThreshold);

  let wordmarkTop = -1;
  let wordmarkBottom = -1;
  let started = false;
  for (let y = 0; y < H; y++) {
    if (dense[y]) {
      if (!started) {
        started = true;
        wordmarkTop = y;
      }
      wordmarkBottom = y;
    } else if (started) {
      break;
    }
  }

  if (wordmarkBottom === -1) {
    return pre;
  }

  // 5) Crop the entire canvas below `wordmarkBottom + padding`. This drops
  //    the tagline AND the pin's lower tip, which makes the wordmark fill
  //    a larger share of the rendered height.
  const padding = 6;
  const cropHeight = Math.min(H, wordmarkBottom + padding);

  return sharp(pre)
    .extract({ left: 0, top: 0, width: W, height: cropHeight })
    .trim({ threshold: 5 })
    .png()
    .toBuffer();
}

async function makeDarkVariant(buf) {
  const { data, info } = await loadRaw(buf);
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
    if (chroma < 25 && lightness < 200) {
      const darkness = 200 - lightness;
      const newAlpha = Math.round((darkness / 200) * 255);
      out[i] = 255;
      out[i + 1] = 255;
      out[i + 2] = 255;
      out[i + 3] = Math.round((newAlpha * a) / 255);
    }
  }
  return sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

async function main() {
  const cleaned = await dropTagline(sourcePath);

  await sharp(cleaned).png().toFile(outLight);

  const darkBuf = await makeDarkVariant(cleaned);
  await sharp(darkBuf).png().toFile(outDark);

  const meta = await sharp(outLight).metadata();
  console.log("OK light+dark logos generated.");
  console.log("  size:", meta.width, "x", meta.height);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
