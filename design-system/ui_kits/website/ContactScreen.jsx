/* Contact — friendly form (showcases form components) + info sidebar. */
function ContactScreen() {
  const { Button, Input, Select, Checkbox, Badge } = window.GoodWebsitesDesignSystem_790400;
  const Icon = window.Icon;
  const wrap = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" };
  const [sent, setSent] = React.useState(false);

  return (
    <section style={{ ...wrap, paddingTop: "var(--space-9)", paddingBottom: "var(--space-10)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "start" }}>
        {/* left: pitch + info */}
        <div>
          <span className="gw-eyebrow" style={{ color: "var(--text-muted)" }}>Say hello</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-hero-lg)", margin: "10px 0 0", letterSpacing: "var(--tracking-tighter)", lineHeight: 1.04 }}>
            Tell us about your good business.
          </h1>
          <p style={{ marginTop: 18, fontSize: "var(--text-lg)", color: "var(--text-body)", maxWidth: "40ch" }}>
            Fill this in and we&rsquo;ll be back within a day — with ideas, a rough timeline, and a friendly hello.
          </p>
          <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 16 }}>
            {[["mail", "hello@goodwebsites.studio"], ["phone", "+44 20 7946 0000"], ["map-pin", "Unit 4, Sunny Yard, Bristol"]].map(([ic, tx]) => (
              <div key={tx} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "var(--text-md)", color: "var(--text-body)" }}>
                <span style={{ display: "inline-flex", width: 40, height: 40, borderRadius: "50%", border: "2px solid var(--ink-900)", alignItems: "center", justifyContent: "center", color: "var(--sun-600)" }}>
                  <Icon name={ic} size={18} />
                </span>
                {tx}
              </div>
            ))}
          </div>
        </div>

        {/* right: form card */}
        <div style={{ background: "var(--surface-card)", border: "2px solid var(--ink-900)", borderRadius: "var(--radius-2xl)", boxShadow: "var(--shadow-hard-lg)", padding: "var(--space-8)" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "var(--space-7) 0" }}>
              <span style={{ display: "inline-flex", width: 64, height: 64, borderRadius: "50%", background: "var(--grass-400)", color: "var(--ink-900)", alignItems: "center", justifyContent: "center", border: "2px solid var(--ink-900)" }}>
                <Icon name="check" size={32} strokeWidth={3} />
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "var(--text-h2)", margin: "20px 0 8px" }}>Thank you!</h3>
              <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "var(--text-md)" }}>We&rsquo;ve got it. Expect a sunny reply soon.</p>
              <div style={{ marginTop: 22 }}>
                <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Input label="Your name" placeholder="Posy Field" required />
                <Input label="Email" type="email" placeholder="you@business.com" required />
              </div>
              <Select label="What do you need?" options={["A new website", "A redesign", "Branding", "SEO & care", "Not sure yet"]} />
              <Input label="Budget" hint="A ballpark is totally fine" placeholder="£5k–£15k" />
              <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "var(--text-sm)" }}>Tell us a little more</span>
                <textarea rows={4} placeholder="We&rsquo;re a bakery and our site is a bit sad…"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: "var(--text-strong)", background: "var(--paper-0)", border: "2px solid var(--ink-900)", borderRadius: "var(--radius-input)", padding: "12px 15px", resize: "vertical" }} />
              </label>
              <Checkbox label="Keep me posted with good news (no spam, promise)" defaultChecked />
              <Button variant="primary" size="lg" type="submit" iconRight={<Icon name="send" size={18} />}>Send it our way</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
window.ContactScreen = ContactScreen;
