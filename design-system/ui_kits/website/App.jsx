/* App — holds the current screen and stitches Nav + screen + Footer. */
function App() {
  const [screen, setScreen] = React.useState("home");
  const scroller = React.useRef(null);

  const go = (id) => {
    setScreen(id);
    if (scroller.current) scroller.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Screen = {
    home: window.HomeScreen,
    services: window.ServicesScreen,
    work: window.WorkScreen,
    contact: window.ContactScreen,
  }[screen];

  return (
    <div ref={scroller} style={{ height: "100%", overflowY: "auto", background: "var(--surface-page)", color: "var(--text-strong)" }}>
      <window.Nav current={screen} onNavigate={go} />
      <main>{Screen ? <Screen onNavigate={go} /> : null}</main>
      <window.Footer onNavigate={go} />
    </div>
  );
}
window.App = App;
