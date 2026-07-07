/* Footer — dark ink block with the light logo, links and a sunny sign-off. */
function Footer({ onNavigate }) {
  const { Logo } = window.GoodWebsitesDesignSystem_790400;
  const Icon = window.Icon;
  const cols = [
    { h: "Studio", items: ["About", "Our work", "Journal", "Careers"] },
    { h: "Services", items: ["Web design", "Development", "Branding", "SEO & care"] },
    { h: "Say hello", items: ["hello@goodwebsites.studio", "+44 20 7946 0000", "Bristol, UK"] },
  ];
  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--paper-50)" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "var(--space-10) var(--gutter) var(--space-7)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 40 }}>
          <div>
            <Logo colorway="light" size="md" />
            <p style={{ marginTop: 18, color: "var(--ink-400)", fontSize: "var(--text-md)", maxWidth: "28ch", lineHeight: 1.5 }}>
              Good websites for good businesses. Made with care in Bristol.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 style={{ margin: "0 0 14px", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--sun-400)", fontWeight: 700 }}>{c.h}</h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.items.map((it) => (
                  <li key={it}>
                    <button onClick={() => onNavigate && onNavigate("contact")}
                      style={{ border: "none", background: "none", color: "var(--paper-100)", fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", cursor: "pointer", padding: 0, textAlign: "left" }}>
                      {it}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "var(--space-8)", paddingTop: "var(--space-5)", borderTop: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ color: "var(--ink-400)", fontSize: "var(--text-sm)" }}>© 2026 Good Websites Ltd.</span>
          <span style={{ marginLeft: "auto", display: "inline-flex", gap: 14, color: "var(--paper-100)" }}>
            <Icon name="instagram" size={20} />
            <Icon name="dribbble" size={20} />
            <Icon name="linkedin" size={20} />
          </span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
