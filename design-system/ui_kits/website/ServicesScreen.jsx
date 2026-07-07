/* Services — detail blocks, process steps, pricing, CTA. */
function ServicesScreen({ onNavigate }) {
  const { Button, Badge, Card, Tag } = window.GoodWebsitesDesignSystem_790400;
  const Icon = window.Icon;
  const wrap = { maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" };

  const services = [
    { name: "Web Design", icon: "pen-tool", color: "var(--sun-600)", points: ["Bespoke, on-brand design", "Friendly, clear page layouts", "Built mobile-first"] },
    { name: "Development", icon: "code-2", color: "var(--sky-600)", points: ["Fast, accessible builds", "Easy-to-edit CMS", "Rock-solid hosting"] },
    { name: "Branding", icon: "sparkles", color: "var(--coral-600)", points: ["Logo & identity", "Colour & type systems", "Tone of voice"] },
    { name: "SEO & Care", icon: "heart-handshake", color: "var(--grass-600)", points: ["Search-friendly setup", "Monthly care plans", "Always a real human"] },
  ];
  const steps = [
    { n: "01", h: "Hello", d: "A friendly chat about your business and goals." },
    { n: "02", h: "Sketch", d: "We map the site and rough out bright ideas." },
    { n: "03", h: "Make", d: "Design and build, with you in the loop." },
    { n: "04", h: "Launch", d: "Go live, then we keep things sunny." },
  ];
  const tiers = [
    { name: "Starter", price: "£3k", desc: "A tidy one-pager to get going.", feats: ["Up to 3 sections", "1 round of revisions", "Live in ~2 weeks"], variant: "soft", cta: "secondary" },
    { name: "Studio", price: "£8k", desc: "A full site with real personality.", feats: ["Up to 8 pages", "Custom illustrations", "CMS + training", "Live in ~4 weeks"], variant: "sticker", featured: true, cta: "primary" },
    { name: "The Works", price: "£15k+", desc: "Brand, site and the whole shebang.", feats: ["Brand identity", "Unlimited pages", "Ongoing care plan"], variant: "soft", cta: "secondary" },
  ];

  return (
    <div>
      <section style={{ ...wrap, paddingTop: "var(--space-9)", paddingBottom: "var(--space-7)" }}>
        <span className="gw-eyebrow" style={{ color: "var(--text-muted)" }}>Services</span>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-hero-xl)", margin: "10px 0 0", letterSpacing: "var(--tracking-tighter)", lineHeight: 1.04, maxWidth: "14ch" }}>
          Everything to look good online.
        </h1>
        <p style={{ marginTop: 20, fontSize: "var(--text-lg)", color: "var(--text-body)", maxWidth: "50ch" }}>
          Pick one thing or the whole lot. Either way you get the same easy-going studio and the same care.
        </p>
      </section>

      <section style={{ ...wrap, paddingBottom: "var(--space-9)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {services.map((s) => (
            <Card key={s.name} variant="outline" style={{ display: "flex", gap: 18 }}>
              <span style={{ flex: "none", display: "inline-flex", width: 52, height: 52, borderRadius: "var(--radius-md)", background: "var(--paper-200)", color: s.color, alignItems: "center", justifyContent: "center" }}>
                <Icon name={s.icon} size={26} />
              </span>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-h3)", margin: "2px 0 12px" }}>{s.name}</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                  {s.points.map((p) => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--text-md)", color: "var(--text-body)" }}>
                      <span style={{ color: s.color, display: "inline-flex" }}><Icon name="check" size={18} strokeWidth={3} /></span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* process */}
      <section style={{ background: "var(--surface-page-alt)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)", padding: "var(--space-9) 0" }}>
        <div style={wrap}>
          <span className="gw-eyebrow" style={{ color: "var(--text-muted)" }}>How we work</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-hero-md)", margin: "8px 0 28px", letterSpacing: "var(--tracking-tight)" }}>Four easy steps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ background: "var(--surface-card)", border: "2px solid var(--ink-900)", borderRadius: "var(--radius-lg)", padding: "var(--space-5)", boxShadow: "var(--shadow-hard-sm)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 40, color: "var(--sun-500)", letterSpacing: "-.02em" }}>{s.n}</div>
                <h4 style={{ margin: "10px 0 6px", fontSize: "var(--text-h4)", fontWeight: 700 }}>{s.h}</h4>
                <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "var(--text-sm)", lineHeight: 1.5 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pricing */}
      <section style={{ ...wrap, padding: "var(--space-9) var(--gutter)" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <span className="gw-eyebrow" style={{ color: "var(--text-muted)" }}>Simple pricing</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-hero-md)", margin: "8px 0 0", letterSpacing: "var(--tracking-tight)" }}>Good value, clearly priced</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, alignItems: "start" }}>
          {tiers.map((t) => (
            <Card key={t.name} variant={t.variant} style={{ display: "flex", flexDirection: "column", gap: 16, minHeight: 340 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-h3)", margin: 0 }}>{t.name}</h3>
                {t.featured ? <Badge variant="sun">Most loved</Badge> : null}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 48, letterSpacing: "-.02em", lineHeight: 1 }}>{t.price}</div>
              <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "var(--text-md)" }}>{t.desc}</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {t.feats.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--text-md)" }}>
                    <span style={{ color: "var(--grass-600)", display: "inline-flex" }}><Icon name="check" size={18} strokeWidth={3} /></span>{f}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "auto" }}>
                <Button variant={t.cta} onClick={() => onNavigate("contact")} style={{ width: "100%" }}>Choose {t.name}</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
window.ServicesScreen = ServicesScreen;
