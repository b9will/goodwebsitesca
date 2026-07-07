import React from "react";

const STYLE_ID = "gw-button-styles";
const CSS = `
.gw-btn{
  --_shadow: var(--shadow-hard);
  display:inline-flex;align-items:center;justify-content:center;gap:.55em;
  font-family:var(--font-sans);font-weight:700;line-height:1;
  border:2px solid var(--ink-900);border-radius:var(--radius-pill);
  cursor:pointer;text-decoration:none;white-space:nowrap;
  box-shadow:var(--_shadow);
  transition:var(--transition-button);
  -webkit-tap-highlight-color:transparent;
}
.gw-btn:focus-visible{outline:3px solid var(--focus-ring);outline-offset:2px;}
.gw-btn:hover{transform:translate(-1px,-1px);box-shadow:var(--shadow-hard-lg);}
.gw-btn:active{transform:translate(2px,2px);box-shadow:var(--shadow-hard-sm);}
.gw-btn[disabled]{opacity:.45;cursor:not-allowed;box-shadow:none;transform:none;}

/* sizes */
.gw-btn--sm{font-size:var(--text-sm);padding:8px 16px;}
.gw-btn--md{font-size:var(--text-md);padding:12px 22px;}
.gw-btn--lg{font-size:var(--text-lg);padding:16px 30px;}

/* variants */
.gw-btn--primary{background:var(--sun-400);color:var(--ink-900);}
.gw-btn--dark{background:var(--ink-900);color:var(--paper-50);}
.gw-btn--secondary{background:var(--paper-0);color:var(--ink-900);}
.gw-btn--coral{background:var(--coral-500);color:var(--paper-50);}
.gw-btn--ghost{background:transparent;border-color:transparent;box-shadow:none;color:var(--ink-900);}
.gw-btn--ghost:hover{background:var(--paper-200);transform:none;box-shadow:none;}
.gw-btn--ghost:active{transform:translate(1px,1px);box-shadow:none;}
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

export function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  iconLeft,
  iconRight,
  className = "",
  ...props
}) {
  useStyles();
  const Tag = as;
  const cls = `gw-btn gw-btn--${variant} gw-btn--${size} ${className}`.trim();
  return (
    <Tag className={cls} {...props}>
      {iconLeft ? <span className="gw-btn__icon" aria-hidden="true">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span className="gw-btn__icon" aria-hidden="true">{iconRight}</span> : null}
    </Tag>
  );
}
