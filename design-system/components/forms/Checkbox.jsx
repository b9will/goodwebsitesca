import React from "react";

const STYLE_ID = "gw-checkbox-styles";
const CSS = `
.gw-check{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-sans);cursor:pointer;user-select:none;}
.gw-check input{position:absolute;opacity:0;width:0;height:0;}
.gw-check__box{
  width:24px;height:24px;flex:none;border:2px solid var(--ink-900);
  border-radius:var(--radius-sm);background:var(--paper-0);
  display:inline-flex;align-items:center;justify-content:center;
  transition:background var(--dur-base) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.gw-check__box svg{width:15px;height:15px;stroke:var(--ink-900);stroke-width:3.5;fill:none;
  stroke-linecap:round;stroke-linejoin:round;opacity:0;transform:scale(.5);
  transition:opacity var(--dur-fast) var(--ease-out), transform var(--dur-base) var(--ease-spring);}
.gw-check input:checked + .gw-check__box{background:var(--sun-400);}
.gw-check input:checked + .gw-check__box svg{opacity:1;transform:scale(1);}
.gw-check input:focus-visible + .gw-check__box{box-shadow:0 0 0 3px var(--focus-ring);}
.gw-check input:disabled + .gw-check__box{opacity:.45;}
.gw-check__label{font-size:var(--text-md);color:var(--text-body);line-height:1.35;padding-top:1px;}
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

export function Checkbox({ label, className = "", ...props }) {
  useStyles();
  return (
    <label className={`gw-check ${className}`.trim()}>
      <input type="checkbox" {...props} />
      <span className="gw-check__box" aria-hidden="true">
        <svg viewBox="0 0 16 16"><polyline points="2.5,8.5 6.5,12.5 13.5,4" /></svg>
      </span>
      {label ? <span className="gw-check__label">{label}</span> : null}
    </label>
  );
}
