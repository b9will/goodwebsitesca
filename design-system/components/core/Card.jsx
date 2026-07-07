import React from "react";

const STYLE_ID = "gw-card-styles";
const CSS = `
.gw-card{
  display:block;background:var(--surface-card);
  border-radius:var(--radius-card);
  border:2px solid transparent;
  padding:var(--space-6);
  text-align:left;
}
.gw-card--soft{box-shadow:var(--shadow-soft);}
.gw-card--outline{border-color:var(--ink-900);}
.gw-card--sticker{border-color:var(--ink-900);box-shadow:var(--shadow-hard-lg);}
.gw-card--flat{background:var(--surface-sunk);}
.gw-card--ink{background:var(--ink-900);color:var(--paper-50);}
.gw-card--sun{background:var(--sun-400);color:var(--ink-900);}
.gw-card--interactive{cursor:pointer;transition:var(--transition-card);}
.gw-card--interactive:hover{transform:translate(-2px,-2px);}
.gw-card--interactive.gw-card--sticker:hover{box-shadow:var(--shadow-hard-xl);}
.gw-card--interactive.gw-card--soft:hover{box-shadow:var(--shadow-soft-lg);}
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

export function Card({
  children,
  variant = "soft",
  interactive = false,
  as = "div",
  className = "",
  ...props
}) {
  useStyles();
  const Tag = as;
  const cls = `gw-card gw-card--${variant} ${interactive ? "gw-card--interactive" : ""} ${className}`.trim();
  return (
    <Tag className={cls} {...props}>
      {children}
    </Tag>
  );
}
