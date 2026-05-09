/* global React */

// ============================================================
// SHARED PRIMITIVES
// ============================================================

const BFrame = ({ bg, fg, children, padding = 56, style = {} }) => (
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

const BCaption = ({ children, fg = "#000", opacity = 0.45 }) => (
  <div style={{
    position: "absolute", left: 24, bottom: 20,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, letterSpacing: 0.5, textTransform: "uppercase",
    color: fg, opacity, pointerEvents: "none",
  }}>{children}</div>
);

const BHex = ({ children, fg }) => (
  <div style={{
    position: "absolute", right: 24, bottom: 20,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, letterSpacing: 0.5,
    color: fg, opacity: 0.45,
  }}>{children}</div>
);

const BCenter = ({ children, style = {} }) => (
  <div style={{
    flex: 1, display: "flex",
    alignItems: "center", justifyContent: "center",
    ...style,
  }}>{children}</div>
);

// pin path used as base — 100x130 viewBox
const PIN_D = "M50 4 C25 4 8 22 8 48 C8 78 50 126 50 126 C50 126 92 78 92 48 C92 22 75 4 50 4 Z";

// Chevron path util — single chevron pointing right, in viewBox
// Returns d for a chevron at (x,y) with width w and height h
const chevronD = (x, y, w, h) => {
  const half = h / 2;
  const tail = w * 0.45;
  return `M${x} ${y} L${x + w - tail} ${y} L${x + w} ${y + half} L${x + w - tail} ${y + h} L${x} ${y + h} L${x + tail} ${y + half} Z`;
};

// Wordmark — the consistent right side of the lockup
const Wordmark = ({ size = 56, ink = "#0E0E10", chipBg = "#FC5200", chipFg = "#fff", ruleColor, metaColor, showRule = true }) => {
  const rule = ruleColor || ink;
  const meta = metaColor || ink;
  return (
    <div>
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 800,
        fontSize: size, letterSpacing: -3,
        lineHeight: 1, color: ink,
        display: "flex", alignItems: "center", flexWrap: "wrap",
      }}>
        <span>showup</span>
        <span style={{
          display: "inline-block",
          background: chipBg, color: chipFg,
          padding: "0 14px", margin: "0 6px",
          borderRadius: 6,
          transform: "translateY(2px)",
        }}>2</span>
        <span>move</span>
      </div>
      {showRule && (
        <>
          <div style={{ height: 2, background: rule, marginTop: 14, opacity: 0.85 }} />
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            display: "flex", justifyContent: "space-between",
            marginTop: 8,
            fontSize: 11, letterSpacing: 2,
            opacity: 0.6, color: meta,
          }}>
            <span>SOCIAL</span><span>SPORT</span><span>SPONTANEOUS</span>
          </div>
        </>
      )}
    </div>
  );
};

// ============================================================
// B1 — ORIGINAL: 3 chevrons climbing up the pin (orange / cream)
// ============================================================

const ChevronPinV1 = ({ size = 200, accent = "#FC5200", on = "#fff" }) => (
  <svg viewBox="0 0 100 130" width={size} height={(size * 130) / 100}>
    <path d={PIN_D} fill={accent} />
    <g transform="translate(50 50) rotate(-90)">
      <path d={chevronD(-22, -16, 20, 32)} fill={on} opacity="0.4" />
      <path d={chevronD(-8, -16, 20, 32)} fill={on} opacity="0.7" />
      <path d={chevronD(6, -16, 20, 32)} fill={on} />
    </g>
  </svg>
);

const B1 = () => (
  <BFrame bg="#F4F1EA" fg="#0E0E10">
    <BCenter style={{ gap: 28 }}>
      <ChevronPinV1 size={210} accent="#FC5200" on="#fff" />
      <Wordmark ink="#0E0E10" chipBg="#FC5200" chipFg="#F4F1EA" />
    </BCenter>
    <BCaption>B1 · original — 3 chevrons up</BCaption>
    <BHex fg="#0E0E10">#FC5200 / #F4F1EA</BHex>
  </BFrame>
);

// ============================================================
// B2 — NEGATIVE SPACE: chevrons cut OUT of the pin
// Cleaner, more iconic. Reads as a single unified shape.
// ============================================================

const ChevronPinV2 = ({ size = 200, accent = "#FC5200", bg = "#F4F1EA" }) => (
  <svg viewBox="0 0 100 130" width={size} height={(size * 130) / 100}>
    <defs>
      <mask id="b2-mask">
        <rect width="100" height="130" fill="white" />
        <g transform="translate(50 50) rotate(-90)" fill="black">
          <path d={chevronD(-22, -14, 18, 28)} />
          <path d={chevronD(-2, -14, 18, 28)} />
          <path d={chevronD(18, -14, 18, 28)} />
        </g>
      </mask>
    </defs>
    <path d={PIN_D} fill={accent} mask="url(#b2-mask)" />
  </svg>
);

const B2 = () => (
  <BFrame bg="#F4F1EA" fg="#0E0E10">
    <BCenter style={{ gap: 28 }}>
      <ChevronPinV2 size={210} accent="#FC5200" bg="#F4F1EA" />
      <Wordmark ink="#0E0E10" chipBg="#FC5200" chipFg="#F4F1EA" />
    </BCenter>
    <BCaption>B2 · negative-space chevrons</BCaption>
    <BHex fg="#0E0E10">#FC5200 / #F4F1EA</BHex>
  </BFrame>
);

// ============================================================
// B3 — TILTED PIN — leaning forward like motion
// Pin rotated, single big chevron blasting through it
// ============================================================

const ChevronPinV3 = ({ size = 200, accent = "#FC5200", on = "#fff", ink = "#0E0E10" }) => (
  <svg viewBox="0 0 140 130" width={size} height={(size * 130) / 140}>
    <g transform="translate(20 0) rotate(15 50 65)">
      <path d={PIN_D} fill={accent} />
      {/* one big bold chevron pointing up through pin */}
      <g transform="translate(50 50) rotate(-90)">
        <path d={chevronD(-18, -22, 36, 44)} fill={on} />
      </g>
    </g>
    {/* speed lines behind */}
    <g stroke={accent} strokeWidth="3" strokeLinecap="round" opacity="0.55">
      <line x1="0" y1="40" x2="20" y2="40" />
      <line x1="0" y1="60" x2="14" y2="60" />
      <line x1="0" y1="80" x2="22" y2="80" />
    </g>
  </svg>
);

const B3 = () => (
  <BFrame bg="#F4F1EA" fg="#0E0E10">
    <BCenter style={{ gap: 28 }}>
      <ChevronPinV3 size={240} accent="#FC5200" on="#fff" />
      <Wordmark ink="#0E0E10" chipBg="#FC5200" chipFg="#F4F1EA" />
    </BCenter>
    <BCaption>B3 · tilted pin + speed lines</BCaption>
    <BHex fg="#0E0E10">#FC5200 / #F4F1EA</BHex>
  </BFrame>
);

// ============================================================
// B4 — CHEVRON-AS-PIN
// The whole pin shape IS a chevron — corner-shaved triangle pin.
// Most iconic and memorable.
// ============================================================

const ChevronPinV4 = ({ size = 200, accent = "#FC5200", on = "#fff" }) => (
  <svg viewBox="0 0 110 140" width={size} height={(size * 140) / 110}>
    {/* chevron-shaped pin: rounded top, pointed bottom, with chevron-notch on right */}
    <path
      d="M55 4 C30 4 12 22 12 46 C12 60 18 74 28 86 L55 132 L82 86 C92 74 98 60 98 46 C98 22 80 4 55 4 Z"
      fill={accent}
    />
    {/* arrow pointing up (forward motion) */}
    <path
      d="M55 22 L78 50 L65 50 L65 70 L45 70 L45 50 L32 50 Z"
      fill={on}
    />
  </svg>
);

const B4 = () => (
  <BFrame bg="#0E0E10" fg="#fff">
    <BCenter style={{ gap: 28 }}>
      <ChevronPinV4 size={210} accent="#FC5200" on="#fff" />
      <Wordmark ink="#fff" chipBg="#FC5200" chipFg="#fff"
                ruleColor="#fff" metaColor="#fff" />
    </BCenter>
    <BCaption fg="#fff" opacity={0.55}>B4 · arrow-pin</BCaption>
    <BHex fg="#fff">#FC5200 / #0E0E10</BHex>
  </BFrame>
);

// ============================================================
// B5 — GEOMETRIC / STADIUM
// Pin as a hard-edged geometric shape (rounded rect + triangle tail)
// — feels more like a tech logo, less cute.
// ============================================================

const ChevronPinV5 = ({ size = 200, accent = "#FC5200", on = "#fff" }) => (
  <svg viewBox="0 0 100 130" width={size} height={(size * 130) / 100}>
    {/* head: rounded square */}
    <rect x="10" y="6" width="80" height="80" rx="22" fill={accent} />
    {/* tail: triangle */}
    <path d="M30 80 L70 80 L50 124 Z" fill={accent} />
    {/* chevron */}
    <g transform="translate(50 46) rotate(-90)">
      <path d={chevronD(-18, -14, 16, 28)} fill={on} opacity="0.45" />
      <path d={chevronD(-2, -14, 16, 28)} fill={on} opacity="0.75" />
      <path d={chevronD(14, -14, 16, 28)} fill={on} />
    </g>
  </svg>
);

const B5 = () => (
  <BFrame bg="#F4F1EA" fg="#0E0E10">
    <BCenter style={{ gap: 28 }}>
      <ChevronPinV5 size={210} accent="#FC5200" on="#fff" />
      <Wordmark ink="#0E0E10" chipBg="#FC5200" chipFg="#F4F1EA" />
    </BCenter>
    <BCaption>B5 · geometric pin</BCaption>
    <BHex fg="#0E0E10">#FC5200 / #F4F1EA</BHex>
  </BFrame>
);

// ============================================================
// B6 — DUAL PIN (collision / meeting)
// Two pins facing each other with a chevron between them —
// "two players showing up to the same place"
// ============================================================

const ChevronPinV6 = ({ size = 240, accent1 = "#FC5200", accent2 = "#0E0E10", on = "#fff" }) => (
  <svg viewBox="0 0 220 130" width={size} height={(size * 130) / 220}>
    {/* left pin facing right */}
    <g transform="translate(0 0)">
      <path d={PIN_D} fill={accent1} />
    </g>
    {/* right pin (mirrored) */}
    <g transform="translate(220 0) scale(-1 1)">
      <path d={PIN_D} fill={accent2} />
    </g>
    {/* meeting chevron in the middle */}
    <g transform="translate(110 50)">
      <path d={chevronD(-12, -16, 24, 32)} fill={on} opacity="0.85" />
    </g>
  </svg>
);

const B6 = () => (
  <BFrame bg="#F4F1EA" fg="#0E0E10">
    <BCenter style={{ gap: 28 }}>
      <ChevronPinV6 size={260} accent1="#FC5200" accent2="#0E0E10" on="#fff" />
      <Wordmark size={48} ink="#0E0E10" chipBg="#FC5200" chipFg="#F4F1EA" />
    </BCenter>
    <BCaption>B6 · two pins meeting</BCaption>
    <BHex fg="#0E0E10">#FC5200 + #0E0E10</BHex>
  </BFrame>
);

// ============================================================
// B7 — LAYERED MOTION (multiple pins as motion blur)
// Three pins offset behind the main one — strong motion
// ============================================================

const ChevronPinV7 = ({ size = 200, accent = "#FC5200", on = "#fff" }) => (
  <svg viewBox="0 0 160 130" width={size} height={(size * 130) / 160}>
    <g opacity="0.18"><g transform="translate(0 0)"><path d={PIN_D} fill={accent} /></g></g>
    <g opacity="0.4"><g transform="translate(20 0)"><path d={PIN_D} fill={accent} /></g></g>
    <g opacity="0.7"><g transform="translate(40 0)"><path d={PIN_D} fill={accent} /></g></g>
    <g transform="translate(60 0)">
      <path d={PIN_D} fill={accent} />
      <g transform="translate(50 50) rotate(-90)">
        <path d={chevronD(-18, -14, 16, 28)} fill={on} opacity="0.5" />
        <path d={chevronD(-2, -14, 16, 28)} fill={on} opacity="0.8" />
        <path d={chevronD(14, -14, 16, 28)} fill={on} />
      </g>
    </g>
  </svg>
);

const B7 = () => (
  <BFrame bg="#0E0E10" fg="#fff">
    <BCenter style={{ gap: 28 }}>
      <ChevronPinV7 size={300} accent="#FC5200" on="#fff" />
      <Wordmark ink="#fff" chipBg="#FC5200" chipFg="#fff"
                ruleColor="#fff" metaColor="#fff" />
    </BCenter>
    <BCaption fg="#fff" opacity={0.55}>B7 · layered motion</BCaption>
    <BHex fg="#fff">#FC5200 / #0E0E10</BHex>
  </BFrame>
);

// ============================================================
// B8 — OUTLINE / DUOTONE — pin outlined, chevrons solid
// Quieter, more sophisticated. Premium athletic.
// ============================================================

const ChevronPinV8 = ({ size = 200, ink = "#0E0E10", accent = "#FC5200", strokeW = 5 }) => (
  <svg viewBox="0 0 100 130" width={size} height={(size * 130) / 100}>
    <path d={PIN_D} fill="none" stroke={ink} strokeWidth={strokeW} />
    <g transform="translate(50 50) rotate(-90)">
      <path d={chevronD(-18, -14, 16, 28)} fill={accent} opacity="0.4" />
      <path d={chevronD(-2, -14, 16, 28)} fill={accent} opacity="0.7" />
      <path d={chevronD(14, -14, 16, 28)} fill={accent} />
    </g>
  </svg>
);

const B8 = () => (
  <BFrame bg="#F4F1EA" fg="#0E0E10">
    <BCenter style={{ gap: 28 }}>
      <ChevronPinV8 size={210} ink="#0E0E10" accent="#FC5200" />
      <Wordmark ink="#0E0E10" chipBg="#FC5200" chipFg="#F4F1EA" />
    </BCenter>
    <BCaption>B8 · outline duotone</BCaption>
    <BHex fg="#0E0E10">outline · #0E0E10 + #FC5200</BHex>
  </BFrame>
);

// ============================================================
// B9 — CHEVRONS PIERCING through pin (horizontal motion)
// Three chevrons go LEFT to RIGHT through the pin — implies
// arriving from elsewhere
// ============================================================

const ChevronPinV9 = ({ size = 200, accent = "#FC5200", on = "#fff" }) => (
  <svg viewBox="0 0 160 130" width={size} height={(size * 130) / 160}>
    <g transform="translate(30 0)">
      <path d={PIN_D} fill={accent} />
    </g>
    {/* horizontal chevrons piercing */}
    <g transform="translate(80 50)">
      <path d={chevronD(-65, -10, 20, 22)} fill={accent} opacity="0.35" />
      <path d={chevronD(-42, -10, 20, 22)} fill={accent} opacity="0.65" />
      <path d={chevronD(-18, -10, 22, 22)} fill={on} />
    </g>
  </svg>
);

const B9 = () => (
  <BFrame bg="#F4F1EA" fg="#0E0E10">
    <BCenter style={{ gap: 28 }}>
      <ChevronPinV9 size={280} accent="#FC5200" on="#fff" />
      <Wordmark ink="#0E0E10" chipBg="#FC5200" chipFg="#F4F1EA" />
    </BCenter>
    <BCaption>B9 · chevrons piercing</BCaption>
    <BHex fg="#0E0E10">#FC5200 / #F4F1EA</BHex>
  </BFrame>
);

// ============================================================
// B10 — DOUBLE-COLOR (orange + electric)
// Pin in orange, chevrons in electric lime — two-tone, energetic
// ============================================================

const ChevronPinV10 = ({ size = 200, accent = "#FC5200", chev = "#C5F03B" }) => (
  <svg viewBox="0 0 100 130" width={size} height={(size * 130) / 100}>
    <path d={PIN_D} fill={accent} />
    <g transform="translate(50 50) rotate(-90)">
      <path d={chevronD(-22, -14, 16, 28)} fill={chev} opacity="0.45" />
      <path d={chevronD(-6, -14, 16, 28)} fill={chev} opacity="0.75" />
      <path d={chevronD(10, -14, 16, 28)} fill={chev} />
    </g>
  </svg>
);

const B10 = () => (
  <BFrame bg="#0E0E10" fg="#fff">
    <BCenter style={{ gap: 28 }}>
      <ChevronPinV10 size={210} accent="#FC5200" chev="#C5F03B" />
      <div>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 800,
          fontSize: 56, letterSpacing: -3,
          lineHeight: 1, color: "#fff",
          display: "flex", alignItems: "center", flexWrap: "wrap",
        }}>
          <span>showup</span>
          <span style={{
            display: "inline-block",
            background: "#C5F03B", color: "#0E0E10",
            padding: "0 14px", margin: "0 6px",
            borderRadius: 6, transform: "translateY(2px)",
          }}>2</span>
          <span>move</span>
        </div>
        <div style={{ height: 2, background: "#fff", marginTop: 14, opacity: 0.7 }} />
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          display: "flex", justifyContent: "space-between",
          marginTop: 8,
          fontSize: 11, letterSpacing: 2,
          opacity: 0.6, color: "#fff",
        }}>
          <span>SOCIAL</span><span>SPORT</span><span>SPONTANEOUS</span>
        </div>
      </div>
    </BCenter>
    <BCaption fg="#fff" opacity={0.55}>B10 · two-tone</BCaption>
    <BHex fg="#fff">#FC5200 + #C5F03B</BHex>
  </BFrame>
);

// ============================================================
// COLOR PALETTE STRIP for the favorites (presented as standalone marks)
// ============================================================

const PaletteStrip = () => {
  const cells = [
    { bg: "#FC5200", chev: "#fff", name: "STRAVA" },
    { bg: "#0E0E10", chev: "#FC5200", name: "INK" },
    { bg: "#FF3D14", chev: "#fff", name: "SIGNAL" },
    { bg: "#16C172", chev: "#0B1A14", name: "FIELD" },
    { bg: "#0A1F2A", chev: "#C5F03B", name: "NIGHT" },
    { bg: "#1F66F5", chev: "#fff", name: "COURT" },
    { bg: "#FF8A3D", chev: "#fff", name: "SUNSET" },
    { bg: "#7C5CFF", chev: "#fff", name: "DUSK" },
  ];
  return (
    <BFrame bg="#1A1A1A" fg="#fff" padding={36}>
      <div style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: 14,
      }}>
        {cells.map((c, i) => (
          <div key={i} style={{
            background: c.bg,
            borderRadius: 14,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            position: "relative",
            padding: 14,
          }}>
            <ChevronPinV2 size={84} accent={c.chev} bg={c.bg} />
            <div style={{
              position: "absolute", bottom: 8, left: 12,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9, letterSpacing: 2, color: c.chev, opacity: 0.7,
            }}>{c.name}</div>
          </div>
        ))}
      </div>
      <BCaption fg="#fff" opacity={0.45}>palette explorations · negative-space mark</BCaption>
    </BFrame>
  );
};

// ============================================================
// APP ICON COMPARE
// ============================================================

const BAppIcon = ({ children, bg, size = 200 }) => (
  <div style={{
    width: size, height: size,
    background: bg,
    borderRadius: size * 0.23,
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35), 0 8px 20px -8px rgba(0,0,0,0.2)",
    overflow: "hidden", position: "relative",
  }}>{children}</div>
);

const IconsCompare = () => {
  const items = [
    { label: "B1 ORIGINAL", bg: "#F4F1EA", node: <ChevronPinV1 size={140} /> },
    { label: "B2 NEGATIVE", bg: "#0E0E10", node: <ChevronPinV2 size={140} accent="#FC5200" bg="#0E0E10" /> },
    { label: "B4 ARROW-PIN", bg: "#0E0E10", node: <ChevronPinV4 size={140} /> },
    { label: "B5 GEOMETRIC", bg: "#F4F1EA", node: <ChevronPinV5 size={140} /> },
    { label: "B7 MOTION", bg: "#0E0E10", node: <ChevronPinV7 size={170} /> },
    { label: "B8 OUTLINE", bg: "#F4F1EA", node: <ChevronPinV8 size={140} /> },
    { label: "B9 PIERCE", bg: "#F4F1EA", node: <ChevronPinV9 size={170} /> },
    { label: "B10 TWO-TONE", bg: "#0E0E10", node: <ChevronPinV10 size={140} /> },
  ];
  return (
    <BFrame bg="#1A1A1A" fg="#fff" padding={36}>
      <div style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: 18,
        placeItems: "center",
      }}>
        {items.map(it => (
          <div key={it.label} style={{ display: "flex", flexDirection: "column",
                                       alignItems: "center", gap: 10 }}>
            <BAppIcon bg={it.bg} size={150}>{it.node}</BAppIcon>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9, letterSpacing: 2, opacity: 0.6,
            }}>{it.label}</div>
          </div>
        ))}
      </div>
      <BCaption fg="#fff" opacity={0.45}>app icons · all chevron-pin variants</BCaption>
    </BFrame>
  );
};

// ============================================================
// HERO MOMENT — phone splash + sticker sheet for the leading variant
// ============================================================

const Hero = () => (
  <BFrame bg="#FC5200" fg="#fff" padding={40}>
    <div style={{
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 30, alignItems: "center",
    }}>
      {/* Phone */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{
          width: 240, height: 480,
          background: "#0E0E10",
          borderRadius: 40, padding: 8,
          boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
        }}>
          <div style={{
            width: "100%", height: "100%",
            background: "#FC5200",
            borderRadius: 32,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 16, position: "relative",
          }}>
            <ChevronPinV2 size={130} accent="#fff" bg="#FC5200" />
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
                background: "#0E0E10", color: "#FC5200",
                padding: "0 8px", margin: "0 4px",
                borderRadius: 4, transform: "translateY(1px)",
              }}>2</span>
              move
            </div>
            <div style={{
              position: "absolute", bottom: 22,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9, letterSpacing: 3, opacity: 0.7, color: "#fff",
            }}>SPORT · NEAR · NOW</div>
          </div>
        </div>
      </div>

      {/* Sticker sheet */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14,
      }}>
        {[
          { bg: "#0E0E10", chev: "#FC5200" },
          { bg: "#fff", chev: "#FC5200" },
          { bg: "#C5F03B", chev: "#0E0E10" },
          { bg: "#FC5200", chev: "#fff" },
        ].map((s, i) => (
          <div key={i} style={{
            background: s.bg,
            aspectRatio: "1",
            borderRadius: 18,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <ChevronPinV2 size={92} accent={s.chev} bg={s.bg} />
          </div>
        ))}
      </div>
    </div>
    <BCaption fg="#fff" opacity={0.6}>hero · splash + sticker sheet</BCaption>
  </BFrame>
);

// ============================================================
// EXPORT
// ============================================================

Object.assign(window, {
  B1, B2, B3, B4, B5, B6, B7, B8, B9, B10,
  PaletteStrip, IconsCompare, Hero,
});
