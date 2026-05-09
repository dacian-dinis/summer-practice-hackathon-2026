/* global React */

// ============================================================
// SHARED PRIMITIVES
// ============================================================

const FFrame = ({ bg, fg, children, padding = 56, style = {} }) => (
  <div style={{
    width: "100%", height: "100%",
    background: bg, color: fg,
    display: "flex", flexDirection: "column",
    padding, boxSizing: "border-box",
    fontFamily: "'Archivo', 'Helvetica Neue', sans-serif",
    position: "relative", overflow: "hidden",
    ...style,
  }}>{children}</div>
);

const FCaption = ({ children, fg = "#000", opacity = 0.45 }) => (
  <div style={{
    position: "absolute", left: 24, bottom: 20,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, letterSpacing: 0.5, textTransform: "uppercase",
    color: fg, opacity, pointerEvents: "none",
  }}>{children}</div>
);

const FHex = ({ children, fg }) => (
  <div style={{
    position: "absolute", right: 24, bottom: 20,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, letterSpacing: 0.5,
    color: fg, opacity: 0.45,
  }}>{children}</div>
);

const FCenter = ({ children, style = {} }) => (
  <div style={{
    flex: 1, display: "flex",
    alignItems: "center", justifyContent: "center",
    ...style,
  }}>{children}</div>
);

// ============================================================
// MARK A — PIN MONOGRAM
// 06 (pin) × 03 (SU2M monogram). The pin is the container;
// the monogram fills it as a 2×2 grid. "Place + identity" in one mark.
// ============================================================

const PinMonogramMark = ({ size = 200, accent = "#C5F03B", ink = "#0A1F2A" }) => {
  const W = 100, H = 130;
  const scale = size / W;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={size} height={H * scale}
         style={{ display: "block" }}>
      <path
        d="M50 4 C25 4 8 22 8 48 C8 78 50 126 50 126 C50 126 92 78 92 48 C92 22 75 4 50 4 Z"
        fill={accent}
      />
      {/* SU2M 2x2 grid centered in the round bulb */}
      <g fontFamily="'Archivo Black', sans-serif" fontWeight="900"
         fontSize="22" fill={ink} textAnchor="middle"
         style={{ letterSpacing: "-1px" }}>
        <text x="36" y="38">S</text>
        <text x="64" y="38">U</text>
        <text x="36" y="62">2</text>
        <text x="64" y="62">M</text>
      </g>
      {/* tiny center dot to imply pin axis */}
      <circle cx="50" cy="50" r="0.5" fill="none" />
    </svg>
  );
};

const FinalA = () => (
  <FFrame bg="#0A1F2A" fg="#fff">
    <FCenter style={{ flexDirection: "row", gap: 32 }}>
      <PinMonogramMark size={210} accent="#C5F03B" ink="#0A1F2A" />
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 800,
          fontSize: 64, letterSpacing: -3,
          lineHeight: 1,
          display: "flex", alignItems: "center", flexWrap: "wrap",
        }}>
          <span>showup</span>
          <span style={{
            display: "inline-block",
            background: "#C5F03B",
            color: "#0A1F2A",
            padding: "0 14px",
            margin: "0 6px",
            borderRadius: 6,
            transform: "translateY(2px)",
          }}>2</span>
          <span>move</span>
        </div>
        <div style={{
          height: 2, background: "rgba(255,255,255,0.35)",
          marginTop: 14,
        }} />
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          display: "flex", justifyContent: "space-between",
          marginTop: 8,
          fontSize: 11, letterSpacing: 2, opacity: 0.6,
        }}>
          <span>SOCIAL</span><span>SPORT</span><span>SPONTANEOUS</span>
        </div>
      </div>
    </FCenter>
    <FCaption fg="#fff" opacity={0.5}>A · pin monogram</FCaption>
    <FHex fg="#fff">#C5F03B / #0A1F2A</FHex>
  </FFrame>
);

// ============================================================
// MARK B — CHEVRON PIN
// 06 (pin shape) × 07 (chevron motion). Pin holds three forward
// chevrons climbing through it. "Move toward this place."
// ============================================================

const ChevronPinMark = ({ size = 200, accent = "#FC5200", ink = "#0E0E10", on = "#fff" }) => {
  const W = 100, H = 130;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={size} height={(size * H) / W}
         style={{ display: "block" }}>
      <path
        d="M50 4 C25 4 8 22 8 48 C8 78 50 126 50 126 C50 126 92 78 92 48 C92 22 75 4 50 4 Z"
        fill={accent}
      />
      {/* three vertical chevrons climbing */}
      <g transform="translate(50 50) rotate(-90)">
        <path d="M-22 -16 L-12 -16 L-2 0 L-12 16 L-22 16 L-12 0 Z" fill={on} opacity="0.4" />
        <path d="M-8 -16 L2 -16 L12 0 L2 16 L-8 16 L2 0 Z" fill={on} opacity="0.7" />
        <path d="M6 -16 L16 -16 L26 0 L16 16 L6 16 L16 0 Z" fill={on} />
      </g>
    </svg>
  );
};

const FinalB = () => (
  <FFrame bg="#F4F1EA" fg="#0E0E10">
    <FCenter style={{ flexDirection: "row", gap: 28 }}>
      <ChevronPinMark size={200} accent="#FC5200" on="#fff" />
      <div>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 800,
          fontSize: 64, letterSpacing: -3,
          lineHeight: 1,
          display: "flex", alignItems: "center", flexWrap: "wrap",
        }}>
          <span>showup</span>
          <span style={{
            display: "inline-block",
            background: "#FC5200",
            color: "#F4F1EA",
            padding: "0 14px",
            margin: "0 6px",
            borderRadius: 6,
            transform: "translateY(2px)",
          }}>2</span>
          <span>move</span>
        </div>
        <div style={{
          height: 2, background: "#0E0E10",
          marginTop: 14, opacity: 0.85,
        }} />
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          display: "flex", justifyContent: "space-between",
          marginTop: 8,
          fontSize: 11, letterSpacing: 2, opacity: 0.55,
        }}>
          <span>SOCIAL</span><span>SPORT</span><span>SPONTANEOUS</span>
        </div>
      </div>
    </FCenter>
    <FCaption>B · chevron pin</FCaption>
    <FHex fg="#0E0E10">#FC5200 / #F4F1EA</FHex>
  </FFrame>
);

// ============================================================
// MARK C — CHEVRON MONOGRAM BADGE
// 03 (SU2M badge) × 07 (chevrons). The monogram sits in a square
// badge with chevron motion lines slicing through one corner.
// ============================================================

const ChevronMonogramMark = ({ size = 200, accent = "#FC5200", ink = "#11141A", on = "#fff" }) => (
  <div style={{
    width: size, height: size,
    background: ink,
    borderRadius: 18,
    position: "relative",
    overflow: "hidden",
    color: on,
    fontFamily: "'Archivo Black', sans-serif",
    fontWeight: 900,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    placeItems: "center",
    fontSize: size * 0.42,
    letterSpacing: -2,
    lineHeight: 0.95,
  }}>
    {/* chevron motion in upper-right */}
    <svg viewBox="0 0 100 100" width={size * 0.7} height={size * 0.7}
         style={{ position: "absolute", top: -size * 0.06, right: -size * 0.06,
                  pointerEvents: "none" }}>
      <path d="M0 14 L26 14 L60 50 L26 86 L0 86 L34 50 Z" fill={accent} opacity="0.18" />
      <path d="M30 14 L56 14 L90 50 L56 86 L30 86 L64 50 Z" fill={accent} opacity="0.32" />
    </svg>
    <div style={{ position: "relative" }}>S</div>
    <div style={{ position: "relative" }}>U</div>
    <div style={{ position: "relative", color: accent }}>2</div>
    <div style={{ position: "relative" }}>M</div>
  </div>
);

const FinalC = () => (
  <FFrame bg="#EFE9DD" fg="#1A1A1A">
    <FCenter style={{ flexDirection: "row", gap: 28 }}>
      <ChevronMonogramMark size={200} accent="#FC5200" ink="#11141A" on="#fff" />
      <div>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 800,
          fontSize: 64, letterSpacing: -3,
          lineHeight: 1,
          display: "flex", alignItems: "center", flexWrap: "wrap",
        }}>
          <span>showup</span>
          <span style={{
            display: "inline-block",
            background: "#1A1A1A",
            color: "#EFE9DD",
            padding: "0 14px",
            margin: "0 6px",
            borderRadius: 6,
            transform: "translateY(2px)",
          }}>2</span>
          <span>move</span>
        </div>
        <div style={{
          height: 2, background: "#1A1A1A",
          marginTop: 14,
        }} />
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          display: "flex", justifyContent: "space-between",
          marginTop: 8,
          fontSize: 11, letterSpacing: 2, opacity: 0.55,
        }}>
          <span>SOCIAL</span><span>SPORT</span><span>SPONTANEOUS</span>
        </div>
      </div>
    </FCenter>
    <FCaption>C · chevron monogram</FCaption>
    <FHex fg="#1A1A1A">#FC5200 / #11141A</FHex>
  </FFrame>
);

// ============================================================
// MARK D — RUNNING PIN with CHEVRON TRAIL
// 06 (pin + figure) × 07 (chevron motion trail behind it).
// A dynamic, illustrative version — "person showing up to a place,
// with motion".
// ============================================================

const RunningPinMark = ({ size = 200, accent = "#16C172", ink = "#0B1A14", trail = "#FC5200" }) => {
  const W = 160, H = 140;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={size} height={(size * H) / W}
         style={{ display: "block" }}>
      {/* chevron speed trail to the left */}
      <g transform="translate(0 30)">
        <path d="M0 16 L18 16 L36 40 L18 64 L0 64 L18 40 Z" fill={trail} opacity="0.25" />
        <path d="M22 16 L40 16 L58 40 L40 64 L22 64 L40 40 Z" fill={trail} opacity="0.5" />
      </g>
      {/* pin */}
      <g transform="translate(60 0)">
        <path
          d="M50 4 C25 4 8 22 8 48 C8 78 50 126 50 126 C50 126 92 78 92 48 C92 22 75 4 50 4 Z"
          fill={accent}
        />
        {/* abstract running figure */}
        <circle cx="56" cy="28" r="7" fill={ink} />
        <path d="M30 64 L52 36 L66 50 L82 50 L74 60 L60 56 L48 70 L38 78 L28 76 Z" fill={ink} />
        <path d="M44 70 L34 92" stroke={ink} strokeWidth="6" strokeLinecap="round" />
        <path d="M58 60 L70 78" stroke={ink} strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  );
};

const FinalD = () => (
  <FFrame bg="#F2F5EE" fg="#0B1A14">
    <FCenter style={{ flexDirection: "row", gap: 24 }}>
      <RunningPinMark size={250} accent="#16C172" trail="#FC5200" />
      <div>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 800,
          fontSize: 60, letterSpacing: -3,
          lineHeight: 1,
          display: "flex", alignItems: "center", flexWrap: "wrap",
        }}>
          <span>showup</span>
          <span style={{
            display: "inline-block",
            background: "#16C172",
            color: "#0B1A14",
            padding: "0 14px",
            margin: "0 6px",
            borderRadius: 6,
            transform: "translateY(2px)",
          }}>2</span>
          <span>move</span>
        </div>
        <div style={{
          height: 2, background: "#0B1A14",
          marginTop: 14, opacity: 0.85,
        }} />
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          display: "flex", justifyContent: "space-between",
          marginTop: 8,
          fontSize: 11, letterSpacing: 2, opacity: 0.55,
        }}>
          <span>SOCIAL</span><span>SPORT</span><span>SPONTANEOUS</span>
        </div>
      </div>
    </FCenter>
    <FCaption>D · running pin + trail</FCaption>
    <FHex fg="#0B1A14">#16C172 + #FC5200 / #F2F5EE</FHex>
  </FFrame>
);

// ============================================================
// CONTEXT — APP ICONS for all 4 finals
// ============================================================

const FAppIcon = ({ children, bg, size = 200 }) => (
  <div style={{
    width: size, height: size,
    background: bg,
    borderRadius: size * 0.23,
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35), 0 8px 20px -8px rgba(0,0,0,0.2)",
    overflow: "hidden",
    position: "relative",
  }}>{children}</div>
);

const FinalIconsRow = () => (
  <FFrame bg="#1A1A1A" fg="#fff" padding={36}>
    <div style={{
      flex: 1,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      alignItems: "center", justifyItems: "center",
    }}>
      {/* A: Pin Monogram */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <FAppIcon bg="#0A1F2A">
          <PinMonogramMark size={150} accent="#C5F03B" ink="#0A1F2A" />
        </FAppIcon>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                      letterSpacing: 2, opacity: 0.6 }}>A · PIN MONO</div>
      </div>
      {/* B: Chevron Pin */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <FAppIcon bg="#F4F1EA">
          <ChevronPinMark size={150} accent="#FC5200" on="#fff" />
        </FAppIcon>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                      letterSpacing: 2, opacity: 0.6 }}>B · CHEV PIN</div>
      </div>
      {/* C: Chevron Monogram */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <FAppIcon bg="#11141A">
          <ChevronMonogramMark size={150} accent="#FC5200" ink="#11141A" on="#fff" />
        </FAppIcon>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                      letterSpacing: 2, opacity: 0.6 }}>C · CHEV MONO</div>
      </div>
      {/* D: Running Pin */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <FAppIcon bg="#F2F5EE">
          <RunningPinMark size={170} accent="#16C172" trail="#FC5200" />
        </FAppIcon>
        <div style={{ fontFamily: "'JetBrainsEvent Mono', 'JetBrains Mono', monospace", fontSize: 10,
                      letterSpacing: 2, opacity: 0.6 }}>D · RUN PIN</div>
      </div>
    </div>
    <FCaption fg="#fff" opacity={0.45}>app icons · home-screen test</FCaption>
  </FFrame>
);

// ============================================================
// CONTEXT — DARK / LIGHT / ONE-COLOR for the leading pick (A)
// ============================================================

const VariantsA = () => (
  <FFrame bg="#fff" fg="#111" padding={40}>
    <div style={{
      flex: 1,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18,
      alignItems: "stretch",
    }}>
      {/* dark */}
      <div style={{ background: "#0A1F2A", borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
        <PinMonogramMark size={150} accent="#C5F03B" ink="#0A1F2A" />
      </div>
      {/* light */}
      <div style={{ background: "#F4F1EA", borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
        <PinMonogramMark size={150} accent="#0A1F2A" ink="#F4F1EA" />
      </div>
      {/* one-color */}
      <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center" }}>
        <PinMonogramMark size={150} accent="#000" ink="#fff" />
      </div>
    </div>
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18, marginTop: 12,
      fontSize: 10, letterSpacing: 2, opacity: 0.55, textAlign: "center",
    }}>
      <span>DARK · PRIMARY</span><span>LIGHT</span><span>ONE-COLOR</span>
    </div>
    <FCaption>A · variants</FCaption>
  </FFrame>
);

// ============================================================
// CONTEXT — SPLASH for the leading pick
// ============================================================

const FinalSplash = ({ bg = "#0A1F2A", accent = "#C5F03B", chip = "#C5F03B", chipFg = "#0A1F2A", title = "A · PIN MONOGRAM" }) => (
  <FFrame bg={bg} fg="#fff" padding={0}>
    <div style={{
      flex: 1,
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: 36,
    }}>
      {/* phone */}
      <div style={{
        width: 240, height: 480,
        background: "#0E0E10",
        borderRadius: 40, padding: 8,
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
      }}>
        <div style={{
          width: "100%", height: "100%",
          background: bg,
          borderRadius: 32,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 18, position: "relative",
        }}>
          <PinMonogramMark size={120} accent={accent} ink={bg === "#0A1F2A" ? "#0A1F2A" : "#fff"} />
          <div style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 800,
            fontSize: 22, letterSpacing: -0.8,
            color: "#fff",
            display: "flex", alignItems: "center",
          }}>
            showup
            <span style={{
              display: "inline-block",
              background: chip, color: chipFg,
              padding: "0 8px", margin: "0 4px",
              borderRadius: 4, transform: "translateY(1px)",
            }}>2</span>
            move
          </div>
          <div style={{
            position: "absolute", bottom: 22,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9, letterSpacing: 3, opacity: 0.6, color: "#fff",
          }}>SPORT · NEAR · NOW</div>
        </div>
      </div>
      {/* tag */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: "#fff", opacity: 0.6,
        fontSize: 11, letterSpacing: 3,
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
      }}>{title} — SPLASH</div>
    </div>
    <FCaption fg="#fff" opacity={0.55}>splash · launch</FCaption>
  </FFrame>
);

// ============================================================
// EXPORT
// ============================================================

Object.assign(window, {
  FinalA, FinalB, FinalC, FinalD,
  FinalIconsRow, VariantsA, FinalSplash,
});
