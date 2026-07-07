/* Icon — thin wrapper over Lucide (loaded via CDN as window.lucide).
   React owns only the outer <span>; we set its innerHTML to a Lucide
   placeholder and let Lucide swap in the SVG, so React never diffs the
   icon internals (no DOM-conflict on navigation). */
function Icon({ name, size = 20, strokeWidth = 2, className = "", style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    if (window.lucide) {
      window.lucide.createIcons({
        attrs: { width: size, height: size, "stroke-width": strokeWidth },
        nameAttr: "data-lucide",
      });
    }
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", alignItems: "center", width: size, height: size, color: "inherit", ...style }}
    />
  );
}
window.Icon = Icon;
