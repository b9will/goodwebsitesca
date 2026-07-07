import React from "react";

const STYLE_ID = "gw-tag-styles";
const PALETTE = {
  neutral: ["var(--paper-200)", "var(--ink-700)"],
  sun: ["var(--sun-200)", "var(--sun-700)"],
  coral: ["color-mix(in srgb, var(--coral-500) 18%, white)", "var(--coral-600)"],
  grass: ["color-mix(in srgb, var(--grass-500) 18%, white)", "var(--grass-600)"],
  sky: ["color-mix(in srgb, var(--sky-500) 16%, white)", "var(--sky-600)"],
  grape: ["color-mix(in srgb, var(--grape-500) 16%, white)", "var(--grape-600)"],
};
const CSS = `
.gw-tag{
  display:inline-flex;align-items:center;gap:.4em;
  font-family:var(--font-sans);font-weight:500;font-size:var(--text-sm);
  line-height:1;padding:7px 13px;border-radius:var(--radius-pill);
}
.gw-tag__x{display:inline-flex;margin:-2px -4px -2px 2px;border:none;background:none;
  cursor:pointer;color:inherit;opacity:.6;font-size:1.1em;line-height:1;padding:2px;border-radius:50%;}
.gw-tag__x:hover{opacity:1;}
`;

function useStyles() {
  React.useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function Tag({ children, color = "neutral", onRemove, className = "", ...props }) {
  useStyles();
  const [bg, fg] = PALETTE[color] || PALETTE.neutral;
  return (
    <span className={`gw-tag ${className}`.trim()} style={{ background: bg, color: fg }} {...props}>
      {children}
      {onRemove ? (
        <button type="button" className="gw-tag__x" onClick={onRemove} aria-label="Remove">×</button>
      ) : null}
    </span>
  );
}
