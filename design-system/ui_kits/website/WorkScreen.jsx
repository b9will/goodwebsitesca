/* Work — filterable portfolio of colour-block project cards + featured case. */
function WorkScreen({ onNavigate }) {
  const { Button, Tag, Badge } = window.GoodWebsitesDesignSystem_790400;
  const Icon = window.Icon;
  const wrap = { maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" };

  const filters = ["All", "Web design", "Branding", "Development", "SEO"];
  const [active, setActive] = React.useState("All");

  const projects = [
    { name: "Bright Bakery", cat: "Branding", year: "2026", bg: "var(--coral-500)", fg: "var(--paper-50)" },
    { name: "Fern & Field", cat: "Web design", year: "2025", bg: "var(--grass-500)", fg: "var(--paper-50)" },
    { name: "Tidepool Swim", cat: "SEO", year: "2025", bg: "var(--sky-500)", fg: "var(--paper-50)" },
    { name: "Hatch Coffee", cat: "Branding", year: "2025", bg: "var(--sun-400)", fg: "var(--ink-900)" },
    { name: "Maple & Co", cat: "Web design", year: "2024", bg: "var(--grape-500)", fg: "var(--paper-50)" },
    { name: "Pebble Studio", cat: "Development", year: "2024", bg: "var(--ink-900)", fg: "var(--paper-50)" },
  ];
  const shown = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <div>
      <section style={{ ...wrap, paddingTop: "var(--space-9)", paddingBottom: "var(--space-6)" }}>
        <span className="gw-eyebrow" style={{ color: "var(--text-muted)" }}>Our work</span>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-hero-xl)", margin: "10px 0 0", letterSpacing: "var(--tracking-tighter)", lineHeight: 1.04 }}>
          Good company, good results.
        </h1>
        <div style={{ marginTop: 26, display: "flex", gap: 10, flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              style={{
                fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "var(--text-sm)",
                padding: "9px 16px", borderRadius: "var(--radius-pill)", cursor: "pointer",
                border: "2px solid var(--ink-900)",
                background: active === f ? "var(--ink-900)" : "transparent",
                color: active === f ? "var(--paper-50)" : "var(--ink-900)",
                transition: "background var(--dur-base) var(--ease-out)",
              }}>
              {f}
            </button>
          ))}
        </div>
      </section>

      <section style={{ ...wrap, paddingBottom: "var(--space-9)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {shown.map((p) => (
            <button key={p.name} onClick={() => onNavigate("contact")}
              style={{ border: "2px solid var(--ink-900)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--paper-0)", cursor: "pointer", padding: 0, boxShadow: "var(--shadow-hard)", textAlign: "left" }}>
              <div style={{ height: 170, background: p.bg, color: p.fg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 30, letterSpacing: "-.02em", textAlign: "center", padding: "0 16px" }}>{p.name}</span>
              </div>
              <div style={{ padding: "14px 18px", borderTop: "2px solid var(--ink-900)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 700, fontSize: "var(--text-md)" }}>{p.name}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>{p.year}</span>
                </div>
                <div style={{ marginTop: 8 }}><Tag color="neutral">{p.cat}</Tag></div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* featured case study */}
      <section style={{ ...wrap, paddingBottom: "var(--space-10)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", border: "2px solid var(--ink-900)", borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "var(--shadow-hard-lg)" }}>
          <div style={{ background: "var(--coral-500)", color: "var(--paper-50)", padding: "var(--space-9)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 320 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 64, letterSpacing: "-.03em" }}>Bright<br />Bakery</span>
          </div>
          <div style={{ padding: "var(--space-8)", display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--surface-card)" }}>
            <Badge variant="outline">Case study</Badge>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-hero-md)", margin: "14px 0 12px", letterSpacing: "var(--tracking-tight)" }}>+42% online orders</h2>
            <p style={{ margin: 0, color: "var(--text-body)", fontSize: "var(--text-md)", lineHeight: 1.55 }}>
              A cheerful rebrand and a speedy new site helped a neighbourhood bakery sell out
              its morning buns — online and at the door.
            </p>
            <div style={{ marginTop: 22 }}>
              <Button variant="dark" onClick={() => onNavigate("contact")} iconRight={<Icon name="arrow-right" size={18} />}>Read the story</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
window.WorkScreen = WorkScreen;
