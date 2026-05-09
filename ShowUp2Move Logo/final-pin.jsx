/* global React */

// ============================================================
// FINAL — Pin with vertical chevrons (per reference)
// ============================================================

const ORANGE = "#F26B1F";
const ORANGE_DEEP = "#E85A0C";
const INK = "#0F1726";
const META = "#7A8190";
const CREAM = "#F5F2EC";

// The pin — soft teardrop, slightly elongated
const PIN_PATH = "M50 4 C24 4 6 23 6 49 C6 70 22 92 38 109 C44 115 49 122 50 126 C51 122 56 115 62 109 C78 92 94 70 94 49 C94 23 76 4 50 4 Z";

// Single chevron centered at (cx, y), with width w, height h, thickness t
const chevronPath = (cx, y, w, h, t) => {
  const half = w / 2;
  // outer outline of a chevron pointing up:
  // bottom-left → up to top-mid → bottom-right → inner-bottom-right → inner-mid → inner-bottom-left
  const innerY = y + t * 1.4;
  return `M${cx - half} ${y + h} L${cx} ${y} L${cx + half} ${y + h} L${cx + half - t} ${y + h} L${cx} ${innerY} L${cx - half + t} ${y + h} Z`;
};

// The mark
const Mark = ({
  size = 200,
  pin = ORANGE,
  chev = "#FFFFFF",
  shadow = true,
  // chevron stack tuning
  count = 3,
  topY = 22,
  gap = 10,
  chevW = 36,
  chevH = 14,
  chevT = 5,
  // opacity ramp: lightest at top, brightest at bottom
  opacities = [0.55, 0.75, 1.0],
}) => {
  const pinH = (size * 130) / 100;
  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <svg viewBox="0 0 100 138" width={size} height={(size * 138) / 100}
           style={{ display: "block", overflow: "visible" }}>
        {shadow && (
          <ellipse cx="50" cy="133" rx="22" ry="3.2" fill="#000" opacity="0.12" />
        )}
        <path d={PIN_PATH} fill={pin} />
        {Array.from({ length: count }).map((_, i) => {
          const y = topY + i * (chevH + gap);
          return (
            <path key={i}
              d={chevronPath(50, y, chevW, chevH, chevT)}
              fill={chev}
              opacity={opacities[i] ?? 1}
            />
          );
        })}
      </svg>
    </div>
  );
};

// The wordmark — no chip, "2" colored, dot-separator metadata
const Wordmark = ({
  size = 86,
  ink = INK,
  accent = ORANGE,
  meta = META,
  metaText = ["SOCIAL", "SPORT", "SPONTANEOUS"],
  showMeta = true,
  metaSize = 14,
}) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 }}>
    <div style={{
      fontFamily: "'Archivo', 'Helvetica Neue', sans-serif",
      fontWeight: 800,
      fontSize: size,
      letterSpacing: -size * 0.05,
      lineHeight: 0.95,
      color: ink,
      whiteSpace: "nowrap",
    }}>
      showup<span style={{ color: accent }}>2</span>move
    </div>
    {showMeta && (
      <div style={{
        display: "flex", alignItems: "center", gap: metaSize * 0.7,
        fontFamily: "'Archivo', 'Helvetica Neue', sans-serif",
        fontWeight: 600,
        fontSize: metaSize,
        letterSpacing: metaSize * 0.18,
        color: meta,
      }}>
        {metaText.map((t, i) => (
          <React.Fragment key={t}>
            <span>{t}</span>
            {i < metaText.length - 1 && (
              <span style={{
                width: 4, height: 4, borderRadius: "50%",
                background: accent, display: "inline-block",
              }} />
            )}
          </React.Fragment>
        ))}
      </div>
    )}
  </div>
);

// ============================================================
// FRAMES
// ============================================================

const Frame = ({ bg, fg, children, padding = 56 }) => (
  <div style={{
    width: "100%", height: "100%",
    background: bg, color: fg,
    display: "flex", flexDirection: "column",
    padding, boxSizing: "border-box",
    fontFamily: "'Archivo', 'Helvetica Neue', sans-serif",
    position: "relative", overflow: "hidden",
  }}>{children}</div>
);

const Caption = ({ children, fg = "#000", op = 0.45 }) => (
  <div style={{
    position: "absolute", left: 24, bottom: 18,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, letterSpacing: 0.5, textTransform: "uppercase",
    color: fg, opacity: op, pointerEvents: "none",
  }}>{children}</div>
);

const Hex = ({ children, fg, op = 0.45 }) => (
  <div style={{
    position: "absolute", right: 24, bottom: 18,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, letterSpacing: 0.5,
    color: fg, opacity: op,
  }}>{children}</div>
);

const Center = ({ children, gap = 36, dir = "row" }) => (
  <div style={{
    flex: 1, display: "flex",
    flexDirection: dir,
    alignItems: "center", justifyContent: "center", gap,
  }}>{children}</div>
);

// ============================================================
// PRIMARY LOCKUP
// ============================================================

const Primary = () => (
  <Frame bg={CREAM}>
    <Center gap={40}>
      <Mark size={210} pin={ORANGE} chev="#FFFFFF" />
      <Wordmark size={92} />
    </Center>
    <Caption fg={INK}>primary lockup · light</Caption>
    <Hex fg={INK}>#F26B1F / #0F1726 / #F5F2EC</Hex>
  </Frame>
);

// ============================================================
// DARK
// ============================================================

const Dark = () => (
  <Frame bg={INK}>
    <Center gap={40}>
      <Mark size={210} pin={ORANGE} chev="#FFFFFF" shadow={false} />
      <Wordmark size={92} ink="#F5F2EC" accent={ORANGE} meta="#8E96A8" />
    </Center>
    <Caption fg="#fff" op={0.55}>primary lockup · dark</Caption>
    <Hex fg="#fff">#F26B1F / #0F1726</Hex>
  </Frame>
);

// ============================================================
// STACKED
// ============================================================

const Stacked = () => (
  <Frame bg={CREAM}>
    <Center dir="column" gap={22}>
      <Mark size={200} />
      <Wordmark size={72} />
    </Center>
    <Caption fg={INK}>stacked lockup</Caption>
    <Hex fg={INK}>#F26B1F</Hex>
  </Frame>
);

// ============================================================
// MARK ONLY (different sizes)
// ============================================================

const MarkSizes = () => (
  <Frame bg={CREAM}>
    <div style={{
      flex: 1, display: "flex", alignItems: "flex-end",
      justifyContent: "center", gap: 50,
    }}>
      <Mark size={260} />
      <Mark size={170} />
      <Mark size={110} />
      <Mark size={64} />
      <Mark size={36} />
    </div>
    <div style={{
      display: "flex", justifyContent: "center", gap: 50, marginTop: 14,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10, letterSpacing: 2, color: META, opacity: 0.7,
    }}>
      <span style={{ width: 260, textAlign: "center" }}>XL</span>
      <span style={{ width: 170, textAlign: "center" }}>L</span>
      <span style={{ width: 110, textAlign: "center" }}>M</span>
      <span style={{ width: 64, textAlign: "center" }}>S</span>
      <span style={{ width: 36, textAlign: "center" }}>XS</span>
    </div>
    <Caption fg={INK}>mark · scale test</Caption>
  </Frame>
);

// ============================================================
// ONE-COLOR + INVERSE TREATMENTS
// ============================================================

const Treatments = () => {
  const cell = (bg, pin, chev, label, fg = INK) => (
    <div style={{
      background: bg, borderRadius: 14,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: 18, position: "relative",
      border: bg === "#FFFFFF" ? "1px solid #E5E2DA" : "none",
    }}>
      <Mark size={120} pin={pin} chev={chev} shadow={false} />
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: 2, color: fg,
        opacity: 0.6, marginTop: 8,
      }}>{label}</div>
    </div>
  );
  return (
    <Frame bg={CREAM} padding={36}>
      <div style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
      }}>
        {cell(CREAM, ORANGE, "#FFFFFF", "PRIMARY")}
        {cell(INK, ORANGE, "#FFFFFF", "DARK", "#fff")}
        {cell(ORANGE, "#FFFFFF", ORANGE, "INVERSE", "#fff")}
        {cell("#FFFFFF", INK, "#FFFFFF", "MONO INK")}
      </div>
      <Caption fg={INK}>color treatments</Caption>
    </Frame>
  );
};

// ============================================================
// APP ICONS
// ============================================================

const AppIconBox = ({ children, bg, size = 180 }) => (
  <div style={{
    width: size, height: size,
    background: bg,
    borderRadius: size * 0.23,
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35), 0 8px 20px -8px rgba(0,0,0,0.18)",
    overflow: "hidden", position: "relative",
  }}>{children}</div>
);

const AppIcons = () => (
  <Frame bg="#1A1A1A" fg="#fff" padding={36}>
    <div style={{
      flex: 1,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 22, alignItems: "center", justifyItems: "center",
    }}>
      <AppIconBox bg={ORANGE}>
        <Mark size={140} pin={ORANGE} chev="#FFFFFF" shadow={false} />
      </AppIconBox>
      <AppIconBox bg={CREAM}>
        <Mark size={140} pin={ORANGE} chev="#FFFFFF" shadow={false} />
      </AppIconBox>
      <AppIconBox bg={INK}>
        <Mark size={140} pin={ORANGE} chev="#FFFFFF" shadow={false} />
      </AppIconBox>
      <AppIconBox bg="#FFFFFF">
        <Mark size={140} pin={ORANGE} chev="#FFFFFF" shadow={false} />
      </AppIconBox>
    </div>
    <Caption fg="#fff" op={0.45}>app icons · home-screen test</Caption>
  </Frame>
);

// ============================================================
// SPLASH
// ============================================================

const Splash = () => (
  <Frame bg={ORANGE} padding={40}>
    <Center dir="column" gap={26}>
      <div style={{
        width: 240, height: 480,
        background: INK,
        borderRadius: 40, padding: 8,
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
      }}>
        <div style={{
          width: "100%", height: "100%",
          background: ORANGE,
          borderRadius: 32,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 14, position: "relative",
        }}>
          <Mark size={130} pin="#FFFFFF" chev={ORANGE_DEEP} shadow={false}
                opacities={[0.45, 0.7, 1.0]} />
          <div style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 800, fontSize: 24, letterSpacing: -0.9,
            color: "#FFFFFF",
          }}>
            showup<span style={{ color: INK }}>2</span>move
          </div>
          <div style={{
            position: "absolute", bottom: 26,
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 600, fontSize: 9, letterSpacing: 2.5,
            color: "#FFFFFF", opacity: 0.85,
          }}>
            <span>SOCIAL</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: INK }} />
            <span>SPORT</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: INK }} />
            <span>SPONTANEOUS</span>
          </div>
        </div>
      </div>
    </Center>
    <Caption fg="#fff" op={0.6}>splash · launch screen</Caption>
  </Frame>
);

// ============================================================
// CHEVRON COUNT EXPLORATION
// ============================================================

const ChevronCounts = () => (
  <Frame bg={CREAM}>
    <div style={{
      flex: 1, display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24, alignItems: "center", justifyItems: "center",
    }}>
      <div style={{ textAlign: "center" }}>
        <Mark size={150} count={2} topY={32} gap={12} chevH={16}
              opacities={[0.7, 1.0]} />
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                      letterSpacing: 2, color: META, marginTop: 6 }}>2 CHEVRONS</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Mark size={150} count={3} />
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                      letterSpacing: 2, color: META, marginTop: 6 }}>3 · CURRENT</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Mark size={150} count={4} topY={18} gap={6} chevH={11} chevT={4}
              opacities={[0.4, 0.6, 0.8, 1.0]} />
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                      letterSpacing: 2, color: META, marginTop: 6 }}>4 CHEVRONS</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Mark size={150} count={1} topY={32} chevH={26} chevT={8}
              opacities={[1]} />
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                      letterSpacing: 2, color: META, marginTop: 6 }}>1 BOLD</div>
      </div>
    </div>
    <Caption fg={INK}>chevron count · tuning</Caption>
  </Frame>
);

// ============================================================
// BUSINESS-CARD MOMENT
// ============================================================

const Card = () => (
  <Frame bg="#E8E3D9" padding={48}>
    <div style={{
      flex: 1, display: "flex",
      alignItems: "center", justifyContent: "center", gap: 30,
    }}>
      {/* front */}
      <div style={{
        width: 360, height: 220,
        background: CREAM,
        borderRadius: 12,
        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.25)",
        padding: 26, boxSizing: "border-box",
        display: "flex", flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <Mark size={68} />
        <Wordmark size={28} metaSize={9} />
      </div>
      {/* back */}
      <div style={{
        width: 360, height: 220,
        background: ORANGE,
        borderRadius: 12,
        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.25)",
        padding: 26, boxSizing: "border-box",
        display: "flex", flexDirection: "column",
        justifyContent: "space-between",
        color: "#fff",
      }}>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 800, fontSize: 14,
        }}>
          Alex Rivera<br/>
          <span style={{ fontWeight: 500, opacity: 0.85 }}>Founder</span>
        </div>
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, letterSpacing: 1.5, opacity: 0.85,
            lineHeight: 1.5,
          }}>
            alex@showup2move.app<br/>
            showup2move.app
          </div>
          <Mark size={56} pin="#FFFFFF" chev={ORANGE_DEEP} shadow={false}
                opacities={[0.45, 0.7, 1.0]} />
        </div>
      </div>
    </div>
    <Caption fg={INK}>business card</Caption>
  </Frame>
);

// ============================================================
// EXPORT
// ============================================================

Object.assign(window, {
  Primary, Dark, Stacked, MarkSizes, Treatments,
  AppIcons, Splash, ChevronCounts, Card, Mark, Wordmark,
});
