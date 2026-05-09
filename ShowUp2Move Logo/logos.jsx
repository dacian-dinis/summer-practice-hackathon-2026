/* global React */
const { useState } = React;

// ============================================================
// SHARED PRIMITIVES
// ============================================================

const Frame = ({ bg, fg, children, padding = 56, style = {} }) => (
  <div style={{
    width: "100%", height: "100%",
    background: bg, color: fg,
    display: "flex", flexDirection: "column",
    padding, boxSizing: "border-box",
    fontFamily: "'Archivo', 'Helvetica Neue', sans-serif",
    position: "relative", overflow: "hidden",
    ...style,
  }}>
    {children}
  </div>
);

const Caption = ({ children, fg = "#000", opacity = 0.45 }) => (
  <div style={{
    position: "absolute", left: 24, bottom: 20,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, letterSpacing: 0.5, textTransform: "uppercase",
    color: fg, opacity, pointerEvents: "none",
  }}>{children}</div>
);

const Hex = ({ children, fg }) => (
  <div style={{
    position: "absolute", right: 24, bottom: 20,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, letterSpacing: 0.5,
    color: fg, opacity: 0.45,
  }}>{children}</div>
);

const Center = ({ children, style = {} }) => (
  <div style={{
    flex: 1, display: "flex",
    alignItems: "center", justifyContent: "center",
    ...style,
  }}>{children}</div>
);

// ============================================================
// 01 — BOLT WORDMARK
// The "2" becomes a lightning bolt: spontaneity + energy.
// Italic heavy sans, Strava-orange on ink.
// ============================================================

const BoltMark = ({ size = 1, color = "#FC5200", ink = "#0E0E10" }) => (
  <svg viewBox="0 0 60 80" width={60 * size} height={80 * size}
       style={{ display: "block" }}>
    <path
      d="M38 0 L8 44 L26 44 L18 80 L52 32 L34 32 L42 0 Z"
      fill={color}
    />
  </svg>
);

const Logo01 = () => (
  <Frame bg="#0E0E10" fg="#fff">
    <Center>
      <div style={{
        display: "flex", alignItems: "center", gap: 4,
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 900, fontStyle: "italic",
        fontSize: 92, letterSpacing: -3,
        lineHeight: 0.9,
      }}>
        <span>SHOWUP</span>
        <span style={{ display: "inline-flex", margin: "0 -2px", transform: "translateY(2px)" }}>
          <BoltMark size={1.05} />
        </span>
        <span>MOVE</span>
      </div>
    </Center>
    <Caption fg="#fff" opacity={0.4}>01 · bolt wordmark</Caption>
    <Hex fg="#fff">#FC5200 / #0E0E10</Hex>
  </Frame>
);

// ============================================================
// 02 — KINETIC STRIPES
// Wordmark sliced with diagonal speed stripes; the "2" is highlighted.
// ============================================================

const Logo02 = () => (
  <Frame bg="#F4F1EA" fg="#111">
    <Center>
      <div style={{ position: "relative" }}>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900, fontStyle: "italic",
          fontSize: 110, letterSpacing: -4,
          color: "#111",
          display: "flex", alignItems: "baseline", gap: 0,
        }}>
          <span>SHOWUP</span>
          <span style={{
            color: "#E8341A",
            fontSize: 130,
            margin: "0 4px",
            transform: "translateY(8px)",
            display: "inline-block",
          }}>2</span>
          <span>MOVE</span>
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: "repeating-linear-gradient(110deg, transparent 0 30px, rgba(232,52,26,0.0) 30px 32px)",
          mixBlendMode: "multiply", pointerEvents: "none",
        }} />
        <div style={{
          display: "flex", gap: 8, marginTop: 14, marginLeft: 2,
        }}>
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{
              height: 6, width: 38 + i*6,
              background: "#E8341A",
              transform: "skewX(-22deg)",
              opacity: 1 - i*0.15,
            }} />
          ))}
        </div>
      </div>
    </Center>
    <Caption>02 · kinetic stripes</Caption>
    <Hex fg="#111">#E8341A / #F4F1EA</Hex>
  </Frame>
);

// ============================================================
// 03 — MONOGRAM BADGE (SU2M)
// Stacked condensed monogram in a sport badge / patch style.
// ============================================================

const Logo03 = () => (
  <Frame bg="#0A1F2A" fg="#fff">
    <Center>
      <div style={{
        display: "flex", alignItems: "center", gap: 28,
      }}>
        <div style={{
          width: 200, height: 200,
          background: "#C5F03B",
          color: "#0A1F2A",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          fontFamily: "'Archivo Black', 'Archivo', sans-serif",
          fontSize: 88, fontWeight: 900,
          lineHeight: 0.95,
          textAlign: "center",
          placeItems: "center",
          borderRadius: 14,
          letterSpacing: -2,
        }}>
          <div>S</div><div>U</div>
          <div>2</div><div>M</div>
        </div>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900, fontStyle: "italic",
          fontSize: 56, letterSpacing: -2,
          lineHeight: 0.95,
        }}>
          SHOWUP<br/>
          <span style={{ color: "#C5F03B" }}>2</span>MOVE
        </div>
      </div>
    </Center>
    <Caption fg="#fff" opacity={0.5}>03 · monogram lockup</Caption>
    <Hex fg="#fff">#C5F03B / #0A1F2A</Hex>
  </Frame>
);

// ============================================================
// 04 — PLAY ARROW
// The "2" rendered as a play / forward-motion arrow, sliced.
// ============================================================

const Logo04 = () => (
  <Frame bg="#fff" fg="#111">
    <Center>
      <div style={{
        display: "flex", alignItems: "center", gap: 18,
      }}>
        <svg viewBox="0 0 120 120" width={130} height={130}>
          <circle cx="60" cy="60" r="58" fill="#FF3D14" />
          <path d="M44 32 L96 60 L44 88 Z" fill="#fff" />
          <rect x="36" y="32" width="6" height="56" fill="#fff" />
        </svg>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900,
          fontSize: 64, letterSpacing: -2.5,
          lineHeight: 0.92,
        }}>
          SHOWUP<span style={{ color: "#FF3D14" }}>2</span><br/>
          MOVE
        </div>
      </div>
    </Center>
    <Caption>04 · play forward</Caption>
    <Hex fg="#111">#FF3D14 / #FFFFFF</Hex>
  </Frame>
);

// ============================================================
// 05 — STACKED CONDENSED
// Three-line heavy condensed display, magazine-cover energy.
// ============================================================

const Logo05 = () => (
  <Frame bg="#FF6A00" fg="#0E0E10" padding={48}>
    <Center>
      <div style={{
        fontFamily: "'Anton', 'Archivo', sans-serif",
        fontWeight: 400,
        fontSize: 150, letterSpacing: -1,
        lineHeight: 0.85,
        textAlign: "left",
      }}>
        <div>SHOW</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span>UP</span>
          <span style={{
            fontSize: 180,
            color: "#0E0E10",
            WebkitTextStroke: "0",
            position: "relative",
            display: "inline-block",
            transform: "translateY(8px) skewX(-8deg)",
          }}>2</span>
        </div>
        <div>MOVE</div>
      </div>
    </Center>
    <Caption fg="#0E0E10" opacity={0.55}>05 · stacked editorial</Caption>
    <Hex fg="#0E0E10">#FF6A00 / #0E0E10</Hex>
  </Frame>
);

// ============================================================
// 06 — PIN + FIGURE
// Map pin with a running figure abstracted inside.
// ============================================================

const PinFigure = ({ size = 1, accent = "#16C172", ink = "#0B1A14" }) => (
  <svg viewBox="0 0 100 130" width={100 * size} height={130 * size}>
    <path
      d="M50 4 C25 4 8 22 8 48 C8 78 50 126 50 126 C50 126 92 78 92 48 C92 22 75 4 50 4 Z"
      fill={accent}
    />
    {/* abstract running figure: triangle body + circle head + leg/arm strokes */}
    <circle cx="56" cy="28" r="7" fill={ink} />
    <path d="M30 64 L52 36 L66 50 L82 50 L74 60 L60 56 L48 70 L38 78 L28 76 Z" fill={ink} />
    <path d="M44 70 L34 92" stroke={ink} strokeWidth="6" strokeLinecap="round" />
    <path d="M58 60 L70 78" stroke={ink} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const Logo06 = () => (
  <Frame bg="#F2F5EE" fg="#0B1A14">
    <Center>
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <PinFigure size={1.1} />
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900,
          fontSize: 56, letterSpacing: -2,
          lineHeight: 0.92,
        }}>
          SHOWUP<span style={{ color: "#16C172" }}>2</span><br/>
          MOVE
        </div>
      </div>
    </Center>
    <Caption>06 · pin + figure</Caption>
    <Hex fg="#0B1A14">#16C172 / #F2F5EE</Hex>
  </Frame>
);

// ============================================================
// 07 — CHEVRON MARK
// Forward chevrons stack into an athletic mark.
// ============================================================

const ChevronMark = ({ color = "#FC5200" }) => (
  <svg viewBox="0 0 120 100" width={140} height={116}>
    <path d="M0 14 L26 14 L60 50 L26 86 L0 86 L34 50 Z" fill={color} opacity="0.35" />
    <path d="M30 14 L56 14 L90 50 L56 86 L30 86 L64 50 Z" fill={color} opacity="0.7" />
    <path d="M60 14 L86 14 L120 50 L86 86 L60 86 L94 50 Z" fill={color} />
  </svg>
);

const Logo07 = () => (
  <Frame bg="#11141A" fg="#fff">
    <Center style={{ flexDirection: "column", gap: 18 }}>
      <ChevronMark color="#FC5200" />
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 900,
        fontSize: 48, letterSpacing: 6,
        textTransform: "uppercase",
      }}>
        ShowUp<span style={{ color: "#FC5200" }}>2</span>Move
      </div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11, letterSpacing: 4, opacity: 0.5,
      }}>
        SHOW · UP · MOVE
      </div>
    </Center>
    <Caption fg="#fff" opacity={0.5}>07 · chevron stack</Caption>
    <Hex fg="#fff">#FC5200 / #11141A</Hex>
  </Frame>
);

// ============================================================
// 08 — UNDERSCORE 2
// Wordmark sitting on a heavy "2" baseline that doubles as a bench.
// Minimal, refined, premium athletic.
// ============================================================

const Logo08 = () => (
  <Frame bg="#EFE9DD" fg="#1A1A1A">
    <Center>
      <div style={{ position: "relative", paddingBottom: 28 }}>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 800,
          fontSize: 84, letterSpacing: -3,
          lineHeight: 1,
        }}>
          showup<span style={{
            display: "inline-block",
            background: "#1A1A1A",
            color: "#EFE9DD",
            padding: "0 14px",
            margin: "0 6px",
            borderRadius: 6,
            transform: "translateY(2px)",
          }}>2</span>move
        </div>
        <div style={{
          height: 3, background: "#1A1A1A",
          marginTop: 14,
          width: "100%",
        }} />
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          display: "flex", justifyContent: "space-between",
          marginTop: 8,
          fontSize: 11, letterSpacing: 2, opacity: 0.5,
        }}>
          <span>SOCIAL</span><span>SPORT</span><span>SPONTANEOUS</span>
        </div>
      </div>
    </Center>
    <Caption>08 · refined athletic</Caption>
    <Hex fg="#1A1A1A">#1A1A1A / #EFE9DD</Hex>
  </Frame>
);

// ============================================================
// CONTEXT: APP ICONS
// ============================================================

const AppIcon = ({ children, size = 220, radius = 50, bg }) => (
  <div style={{
    width: size, height: size,
    background: bg,
    borderRadius: radius,
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35), 0 8px 20px -8px rgba(0,0,0,0.2)",
    overflow: "hidden",
    position: "relative",
  }}>{children}</div>
);

const IconsRow = () => (
  <Frame bg="#1A1A1A" fg="#fff" padding={36}>
    <div style={{
      flex: 1,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 28,
      alignItems: "center", justifyItems: "center",
    }}>
      {/* bolt */}
      <AppIcon bg="#FC5200">
        <BoltMark size={1.6} color="#fff" />
      </AppIcon>
      {/* SU2M monogram */}
      <AppIcon bg="#0A1F2A">
        <div style={{
          color: "#C5F03B",
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: 80, lineHeight: 0.92,
          letterSpacing: -3,
          textAlign: "center",
        }}>
          SU<br/>2M
        </div>
      </AppIcon>
      {/* play */}
      <AppIcon bg="#fff">
        <svg viewBox="0 0 120 120" width={140} height={140}>
          <path d="M40 24 L100 60 L40 96 Z" fill="#FF3D14" />
          <rect x="28" y="24" width="8" height="72" fill="#FF3D14" />
        </svg>
      </AppIcon>
      {/* chevron */}
      <AppIcon bg="#11141A">
        <svg viewBox="0 0 120 100" width={150} height={130}>
          <path d="M10 16 L36 16 L70 50 L36 84 L10 84 L44 50 Z" fill="#FC5200" opacity="0.5" />
          <path d="M50 16 L76 16 L110 50 L76 84 L50 84 L84 50 Z" fill="#FC5200" />
        </svg>
      </AppIcon>
    </div>
    <Caption fg="#fff" opacity={0.45}>app icon · home screen test</Caption>
  </Frame>
);

// ============================================================
// CONTEXT: SOCIAL AVATAR + MERCH
// ============================================================

const SocialMerch = () => (
  <Frame bg="#F4F1EA" fg="#111" padding={44}>
    <div style={{
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 1.3fr",
      gap: 36, alignItems: "center",
    }}>
      {/* avatar tile */}
      <div style={{
        background: "#FC5200",
        aspectRatio: "1 / 1",
        borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 30px 60px -20px rgba(252,82,0,0.4)",
      }}>
        <BoltMark size={2.4} color="#fff" />
      </div>

      {/* T-shirt mock */}
      <div style={{
        position: "relative",
        height: "100%",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg viewBox="0 0 400 360" width="100%" height="100%" style={{ maxHeight: 380 }}>
          {/* shirt silhouette */}
          <path d="M80 60 L150 30 L160 60 Q200 80 240 60 L250 30 L320 60 L350 130 L295 145 L295 320 L105 320 L105 145 L50 130 Z"
                fill="#0E0E10" />
          {/* chest print */}
          <g transform="translate(200 200)">
            <text textAnchor="middle"
                  fontFamily="Archivo, sans-serif"
                  fontWeight="900"
                  fontStyle="italic"
                  fontSize="44"
                  letterSpacing="-1"
                  fill="#FC5200">
              SHOWUP
            </text>
            <text textAnchor="middle" y="44"
                  fontFamily="Archivo, sans-serif"
                  fontWeight="900"
                  fontStyle="italic"
                  fontSize="44"
                  letterSpacing="-1"
                  fill="#fff">
              ⚡ MOVE
            </text>
          </g>
        </svg>
      </div>
    </div>
    <Caption>social avatar · merch</Caption>
  </Frame>
);

// ============================================================
// CONTEXT: SPLASH
// ============================================================

const Splash = () => (
  <Frame bg="#FC5200" fg="#fff" padding={0}>
    <div style={{
      flex: 1,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: 26, position: "relative",
    }}>
      {/* phone bezel */}
      <div style={{
        width: 280, height: 540,
        background: "#0E0E10",
        borderRadius: 44,
        padding: 10,
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
      }}>
        <div style={{
          width: "100%", height: "100%",
          background: "#FC5200",
          borderRadius: 36,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 14,
          position: "relative",
        }}>
          <BoltMark size={1.6} color="#fff" />
          <div style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 900, fontStyle: "italic",
            fontSize: 28, letterSpacing: -1,
            color: "#fff",
          }}>SHOWUP2MOVE</div>
          <div style={{
            position: "absolute", bottom: 28,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, letterSpacing: 3, opacity: 0.7,
          }}>SPORT · NEAR · NOW</div>
        </div>
      </div>
    </div>
    <Caption fg="#fff" opacity={0.6}>splash · launch screen</Caption>
  </Frame>
);

// ============================================================
// EXPORT TO WINDOW
// ============================================================

Object.assign(window, {
  Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08,
  IconsRow, SocialMerch, Splash,
});
