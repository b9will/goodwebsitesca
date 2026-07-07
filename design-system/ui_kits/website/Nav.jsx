/* Top navigation bar. Sticky, cream, with the brand logo + a primary CTA. */
function Nav({ current, onNavigate }) {
  const { Logo, Button } = window.GoodWebsitesDesignSystem_790400;
  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "color-mix(in srgb, var(--surface-page) 88%, transparent)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-soft)",
    }}>
      <div style={{
        maxWidth: "var(--container-wide)", margin: "0 auto",
        padding: "14px var(--gutter)", display: "flex", alignItems: "center", gap: 24,
      }}>
        <button onClick={() => onNavigate("home")}
          style={{ border: "none", background: "none", cursor: "pointer", padding: 0 }}>
          <Logo size="md" />
        </button>
        <nav style={{ display: "flex", gap: 4, marginLeft: 12 }}>
          {links.map((l) => (
            <button key={l.id} onClick={() => onNavigate(l.id)}
              style={{
                border: "none", background: current === l.id ? "var(--paper-200)" : "transparent",
                color: "var(--text-strong)", fontFamily: "var(--font-sans)",
                fontWeight: 700, fontSize: "var(--text-sm)", cursor: "pointer",
                padding: "9px 15px", borderRadius: "var(--radius-pill)",
                transition: "background var(--dur-base) var(--ease-out)",
              }}>
              {l.label}
            </button>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          <Button variant="primary" size="sm" onClick={() => onNavigate("contact")}>Start a project</Button>
        </div>
      </div>
    </header>
  );
}
window.Nav = Nav;
