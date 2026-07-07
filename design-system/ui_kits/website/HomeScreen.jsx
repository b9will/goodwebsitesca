/* Home — hero, services, featured work, stats, testimonial, CTA band. */
function HomeScreen({ onNavigate }) {
  const { Button, Badge, Tag, Card } = window.GoodWebsitesDesignSystem_790400;
  const Icon = window.Icon;

  const wrap = { maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" };

  const services = [
    { name: "Web Design", desc: "Bright, characterful sites that feel like you.", icon: "pen-tool", bg: "var(--sun-400)", fg: "var(--ink-900)" },
    { name: "Development", desc: "Fast, sturdy builds that just work.", icon: "code-2", bg: "var(--ink-900)", fg: "var(--paper-50)" },
    { name: "Branding", desc: "Logos, colour and voice with personality.", icon: "sparkles", bg: "var(--coral-500)", fg: "var(--paper-50)" },
    { name: "SEO & Care", desc: "We keep the good times rolling.", icon: "heart-handshake", bg: "var(--grass-500)", fg: "var(--paper-50)" },
  ];

  const projects = [
    { name: "Bright Bakery", tag: "Web + Brand", bg: "var(--coral-500)", fg: "var(--paper-50)" },
    { name: "Fern & Field", tag: "Website", bg: "var(--grass-500)", fg: "var(--paper-50)" },
    { name: "Tidepool Swim", tag: "Web + SEO", bg: "var(--sky-500)", fg: "var(--paper-50)" },
    { name: "Hatch Coffee", tag: "Branding", bg: "var(--sun-400)", fg: "var(--ink-900)" },
  ];

  return (
    <div>
      {/* ---- HERO ---- */}
      <section style={{ ...wrap, paddingTop: "var(--space-10)", paddingBottom: "var(--space-9)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 26 }}>
          <Badge variant="sun" dot>Booking projects for Spring</Badge>
        </div>
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 500,
          fontSize: "var(--text-hero-2xl)", lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tighter)", color: "var(--text-strong)", margin: 0, maxWidth: "16ch",
        }}>
          We make <span style={{ color: "var(--sun-600)" }}>good websites</span> for good businesses.
        </h1>
        <p style={{ marginTop: 26, fontSize: "var(--text-lg)", color: "var(--text-body)", maxWidth: "52ch", lineHeight: "var(--leading-normal)" }}>
          We&rsquo;re a small, friendly studio in Bristol. We build bright, fast, easy-going
          websites that help good people grow — no jargon, no drama.
        </p>
        <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate("contact")}
            iconRight={<Icon name="arrow-right" size={20} />}>Start a project</Button>
          <Button variant="secondary" size="lg" onClick={() => onNavigate("work")}>See our work</Button>
        </div>
        <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 12, color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>
          <span style={{ display: "inline-flex", color: "var(--sun-600)" }}>
            <Icon name="star" size={18} /><Icon name="star" size={18} /><Icon name="star" size={18} /><Icon name="star" size={18} /><Icon name="star" size={18} />
          </span>
          Loved by 120+ good businesses
        </div>
      </section>

      {/* ---- SERVICES ---- */}
      <section style={{ background: "var(--surface-page-alt)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)", padding: "var(--space-9) 0" }}>
        <div style={wrap}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 28 }}>
            <div>
              <span className="gw-eyebrow" style={{ color: "var(--text-muted)" }}>What we do</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-hero-md)", margin: "8px 0 0", letterSpacing: "var(--tracking-tight)" }}>Four good things</h2>
            </div>
            <Button variant="ghost" onClick={() => onNavigate("services")} iconRight={<Icon name="arrow-up-right" size={18} />}>All services</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {services.map((s) => (
              <Card key={s.name} variant="sticker" interactive onClick={() => onNavigate("services")}
                style={{ background: s.bg, color: s.fg, minHeight: 210, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <span style={{ display: "inline-flex", width: 46, height: 46, borderRadius: "50%", border: "2px solid currentColor", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={s.icon} size={22} />
                </span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-h3)", margin: "0 0 6px" }}>{s.name}</h3>
                  <p style={{ margin: 0, fontSize: "var(--text-sm)", opacity: 0.9, lineHeight: 1.45 }}>{s.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ---- FEATURED WORK ---- */}
      <section style={{ ...wrap, padding: "var(--space-9) var(--gutter)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 28 }}>
          <div>
            <span className="gw-eyebrow" style={{ color: "var(--text-muted)" }}>Selected work</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-hero-md)", margin: "8px 0 0", letterSpacing: "var(--tracking-tight)" }}>Good company</h2>
          </div>
          <Button variant="ghost" onClick={() => onNavigate("work")} iconRight={<Icon name="arrow-up-right" size={18} />}>See all work</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {projects.map((p, i) => (
            <button key={p.name} onClick={() => onNavigate("work")}
              style={{ border: "2px solid var(--ink-900)", borderRadius: "var(--radius-xl)", background: p.bg, color: p.fg, padding: 0, cursor: "pointer", overflow: "hidden", boxShadow: "var(--shadow-hard)", textAlign: "left" }}>
              <div style={{ height: 190, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 44, letterSpacing: "-.02em" }}>{p.name}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderTop: "2px solid var(--ink-900)", background: "var(--paper-0)", color: "var(--ink-900)" }}>
                <span style={{ fontWeight: 700, fontSize: "var(--text-md)" }}>{p.name}</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{p.tag} <Icon name="arrow-right" size={16} /></span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ---- STATS ---- */}
      <section style={{ background: "var(--ink-900)", color: "var(--paper-50)", padding: "var(--space-9) 0" }}>
        <div style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {[["120+", "Good businesses"], ["8 yrs", "Being friendly"], ["3 wks", "Typical turnaround"], ["98%", "Would recommend"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-hero-md)", color: "var(--sun-400)", letterSpacing: "-.02em" }}>{n}</div>
              <div style={{ marginTop: 6, color: "var(--paper-100)", fontSize: "var(--text-md)" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- TESTIMONIAL ---- */}
      <section style={{ ...wrap, padding: "var(--space-10) var(--gutter)", textAlign: "center" }}>
        <span style={{ display: "inline-flex", color: "var(--sun-600)", marginBottom: 18 }}>
          <Icon name="quote" size={40} />
        </span>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "var(--text-hero-md)", lineHeight: 1.2, letterSpacing: "-.01em", maxWidth: "20ch", margin: "0 auto", color: "var(--text-strong)" }}>
          &ldquo;Honestly? The easiest, sunniest project we&rsquo;ve ever run.&rdquo;
        </p>
        <div style={{ marginTop: 26, display: "inline-flex", alignItems: "center", gap: 12 }}>
          {window.GoodWebsitesDesignSystem_790400.Avatar ? <window.GoodWebsitesDesignSystem_790400.Avatar name="Mara Quinn" /> : null}
          <span style={{ fontWeight: 700 }}>Mara Quinn</span>
          <span style={{ color: "var(--text-muted)" }}>— Bright Bakery</span>
        </div>
      </section>

      {/* ---- CTA BAND ---- */}
      <section style={{ padding: "0 var(--gutter) var(--space-10)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", background: "var(--sun-400)", border: "2px solid var(--ink-900)", borderRadius: "var(--radius-2xl)", boxShadow: "var(--shadow-hard-xl)", padding: "var(--space-9)", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-hero-lg)", margin: 0, letterSpacing: "var(--tracking-tighter)", lineHeight: 1.05 }}>
            Let&rsquo;s make you a good one.
          </h2>
          <p style={{ marginTop: 14, fontSize: "var(--text-lg)", color: "var(--ink-700)", maxWidth: "44ch", marginInline: "auto" }}>
            Tell us about your business. We&rsquo;ll send back ideas, a timeline and a friendly hello.
          </p>
          <div style={{ marginTop: 26 }}>
            <Button variant="dark" size="lg" onClick={() => onNavigate("contact")} iconRight={<Icon name="arrow-right" size={20} />}>Start a project</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;
