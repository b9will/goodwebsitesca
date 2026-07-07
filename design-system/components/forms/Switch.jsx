import React from "react";

const STYLE_ID = "gw-switch-styles";
const CSS = `
.gw-switch{display:inline-flex;align-items:center;gap:11px;font-family:var(--font-sans);cursor:pointer;user-select:none;}
.gw-switch input{position:absolute;opacity:0;width:0;height:0;}
.gw-switch__track{
  width:48px;height:28px;flex:none;border-radius:var(--radius-pill);
  border:2px solid var(--ink-900);background:var(--paper-200);position:relative;
  transition:background var(--dur-base) var(--ease-out);
}
.gw-switch__thumb{
  position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;
  background:var(--ink-900);
  transition:transform var(--dur-base) var(--ease-spring);
}
.gw-switch input:checked + .gw-switch__track{background:var(--grass-400);}
.gw-switch input:checked + .gw-switch__track .gw-switch__thumb{transform:translateX(20px);}
.gw-switch input:focus-visible + .gw-switch__track{box-shadow:0 0 0 3px var(--focus-ring);}
.gw-switch input:disabled + .gw-switch__track{opacity:.45;}
.gw-switch__label{font-size:var(--text-md);color:var(--text-body);}
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

export function Switch({ label, className = "", ...props }) {
  useStyles();
  return (
    <label className={`gw-switch ${className}`.trim()}>
      <input type="checkbox" role="switch" {...props} />
      <span className="gw-switch__track" aria-hidden="true">
        <span className="gw-switch__thumb" />
      </span>
      {label ? <span className="gw-switch__label">{label}</span> : null}
    </label>
  );
}
