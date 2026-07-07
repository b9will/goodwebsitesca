import React from "react";

const STYLE_ID = "gw-input-styles";
const CSS = `
.gw-field{display:flex;flex-direction:column;gap:7px;font-family:var(--font-sans);}
.gw-field__label{font-size:var(--text-sm);font-weight:700;color:var(--text-strong);}
.gw-field__req{color:var(--coral-600);margin-left:2px;}
.gw-input{
  font-family:var(--font-sans);font-size:var(--text-md);color:var(--text-strong);
  background:var(--paper-0);border:2px solid var(--ink-900);
  border-radius:var(--radius-input);padding:12px 15px;width:100%;box-sizing:border-box;
  transition:box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.gw-input::placeholder{color:var(--ink-400);}
.gw-input:focus{outline:none;box-shadow:var(--shadow-hard-sm);}
.gw-input:focus-visible{border-color:var(--ink-900);}
.gw-input--error{border-color:var(--coral-600);}
.gw-input--error:focus{box-shadow:2px 2px 0 0 var(--coral-600);}
.gw-input[disabled]{background:var(--paper-200);opacity:.7;cursor:not-allowed;}
.gw-field__hint{font-size:var(--text-xs);color:var(--text-muted);}
.gw-field__hint--error{color:var(--coral-600);font-weight:500;}
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

let _id = 0;
export function Input({ label, hint, error, required, id, className = "", ...props }) {
  useStyles();
  const fieldId = React.useMemo(() => id || `gw-input-${++_id}`, [id]);
  return (
    <div className="gw-field">
      {label ? (
        <label className="gw-field__label" htmlFor={fieldId}>
          {label}{required ? <span className="gw-field__req">*</span> : null}
        </label>
      ) : null}
      <input
        id={fieldId}
        className={`gw-input ${error ? "gw-input--error" : ""} ${className}`.trim()}
        aria-invalid={error ? "true" : undefined}
        {...props}
      />
      {error ? (
        <span className="gw-field__hint gw-field__hint--error">{error}</span>
      ) : hint ? (
        <span className="gw-field__hint">{hint}</span>
      ) : null}
    </div>
  );
}
