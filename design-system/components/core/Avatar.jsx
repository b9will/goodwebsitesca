import React from "react";

const STYLE_ID = "gw-avatar-styles";
const BGS = ["var(--sun-400)", "var(--coral-500)", "var(--grass-500)", "var(--sky-500)", "var(--grape-500)"];
const SIZES = { sm: 32, md: 44, lg: 60 };
const CSS = `
.gw-avatar{
  display:inline-flex;align-items:center;justify-content:center;
  font-family:var(--font-sans);font-weight:700;color:var(--ink-900);
  border-radius:50%;border:2px solid var(--ink-900);overflow:hidden;
  flex:none;user-select:none;
}
.gw-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
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

function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
}

export function Avatar({ name = "", src, size = "md", className = "", ...props }) {
  useStyles();
  const px = SIZES[size] || SIZES.md;
  const hue = BGS[(name.charCodeAt(0) || 0) % BGS.length];
  return (
    <span
      className={`gw-avatar ${className}`.trim()}
      style={{ width: px, height: px, background: src ? "var(--paper-200)" : hue, fontSize: px * 0.4 }}
      title={name}
      {...props}
    >
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
