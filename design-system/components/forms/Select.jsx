import React from "react";

const STYLE_ID = "gw-select-styles";
const CSS = `
.gw-select-field{display:flex;flex-direction:column;gap:7px;font-family:var(--font-sans);}
.gw-select-field__label{font-size:var(--text-sm);font-weight:700;color:var(--text-strong);}
.gw-select-wrap{position:relative;display:block;}
.gw-select{
  appearance:none;-webkit-appearance:none;width:100%;box-sizing:border-box;
  font-family:var(--font-sans);font-size:var(--text-md);color:var(--text-strong);
  background:var(--paper-0);border:2px solid var(--ink-900);border-radius:var(--radius-input);
  padding:12px 42px 12px 15px;cursor:pointer;
  transition:box-shadow var(--dur-fast) var(--ease-out);
}
.gw-select:focus{outline:none;box-shadow:var(--shadow-hard-sm);}
.gw-select[disabled]{background:var(--paper-200);opacity:.7;cursor:not-allowed;}
.gw-select-wrap__chev{position:absolute;right:15px;top:50%;transform:translateY(-50%);
  pointer-events:none;width:14px;height:14px;stroke:var(--ink-900);stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round;}
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

let _sid = 0;
export function Select({ label, options = [], children, id, className = "", ...props }) {
  useStyles();
  const fieldId = React.useMemo(() => id || `gw-select-${++_sid}`, [id]);
  return (
    <div className="gw-select-field">
      {label ? <label className="gw-select-field__label" htmlFor={fieldId}>{label}</label> : null}
      <span className="gw-select-wrap">
        <select id={fieldId} className={`gw-select ${className}`.trim()} {...props}>
          {options.map((o) => {
            const val = typeof o === "string" ? o : o.value;
            const lbl = typeof o === "string" ? o : o.label;
            return <option key={val} value={val}>{lbl}</option>;
          })}
          {children}
        </select>
        <svg className="gw-select-wrap__chev" viewBox="0 0 16 16" aria-hidden="true"><polyline points="3,6 8,11 13,6" /></svg>
      </span>
    </div>
  );
}
