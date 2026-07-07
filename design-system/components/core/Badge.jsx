import React from "react";

const STYLE_ID = "gw-badge-styles";
const CSS = `
.gw-badge{
  display:inline-flex;align-items:center;gap:.4em;
  font-family:var(--font-sans);font-weight:700;font-size:var(--text-xs);
  line-height:1;padding:5px 10px;border-radius:var(--radius-pill);
  border:1.5px solid transparent;white-space:nowrap;
}
.gw-badge--solid{background:var(--ink-900);color:var(--paper-50);}
.gw-badge--sun{background:var(--sun-400);color:var(--ink-900);}
.gw-badge--outline{background:transparent;border-color:var(--ink-900);color:var(--ink-900);}
.gw-badge--soft{background:var(--paper-200);color:var(--ink-700);}
.gw-badge--success{background:color-mix(in srgb, var(--grass-500) 16%, white);color:var(--grass-600);}
.gw-badge--info{background:color-mix(in srgb, var(--sky-500) 14%, white);color:var(--sky-600);}
.gw-badge--warning{background:color-mix(in srgb, var(--sun-500) 26%, white);color:var(--sun-700);}
.gw-badge--danger{background:color-mix(in srgb, var(--coral-500) 16%, white);color:var(--coral-600);}
.gw-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}
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

export function Badge({ children, variant = "soft", dot = false, className = "", ...props }) {
  useStyles();
  return (
    <span className={`gw-badge gw-badge--${variant} ${className}`.trim()} {...props}>
      {dot ? <span className="gw-badge__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
