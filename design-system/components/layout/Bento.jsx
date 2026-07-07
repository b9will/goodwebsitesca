import React from "react";

const STYLE_ID = "gw-bento-styles";
const CSS = `
.gw-bento{
  display:grid;
  grid-auto-flow:dense;
  grid-auto-rows:minmax(var(--gw-bento-row, 168px), auto);
  gap:var(--gw-bento-gap, var(--space-4));
  width:100%;
}
.gw-bento--cols-2{grid-template-columns:repeat(2,1fr);}
.gw-bento--cols-3{grid-template-columns:repeat(3,1fr);}
.gw-bento--cols-4{grid-template-columns:repeat(4,1fr);}
.gw-bento--cols-6{grid-template-columns:repeat(6,1fr);}

.gw-tile{
  position:relative;
  display:flex;flex-direction:column;
  border:2px solid var(--ink-900);
  border-radius:var(--radius-lg);
  box-shadow:var(--shadow-hard);
  padding:var(--space-5);
  text-align:left;
  overflow:hidden;
  min-width:0;
  background:var(--tile-cream);
  color:var(--ink-900);
}
/* soft, sunlit tile fills — the lighter bento palette */
.gw-tile--cream{background:var(--tile-cream);}
.gw-tile--white{background:var(--paper-0);}
.gw-tile--sun{background:var(--tile-sun);}
.gw-tile--coral{background:var(--tile-coral);}
.gw-tile--grass{background:var(--tile-grass);}
.gw-tile--sky{background:var(--tile-sky);}
.gw-tile--grape{background:var(--tile-grape);}
/* bold blocks */
.gw-tile--ink{background:var(--ink-900);color:var(--paper-50);}
.gw-tile--sun-solid{background:var(--sun-400);color:var(--ink-900);}
.gw-tile--coral-solid{background:var(--coral-500);color:var(--paper-50);}

.gw-tile--interactive{cursor:pointer;transition:var(--transition-card);}
.gw-tile--interactive:hover{transform:translate(-2px,-2px);box-shadow:var(--shadow-hard-lg);}
.gw-tile--interactive:active{transform:translate(2px,2px);box-shadow:var(--shadow-hard-sm);}

@media (max-width:640px){
  .gw-bento{grid-template-columns:1fr !important;}
  .gw-tile{grid-column:auto !important;grid-row:auto !important;}
}
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

export function Bento({
  children,
  columns = 4,
  gap,
  rowHeight,
  className = "",
  style,
  ...props
}) {
  useStyles();
  const cls = `gw-bento gw-bento--cols-${columns} ${className}`.trim();
  const css = { ...style };
  if (gap != null) css["--gw-bento-gap"] = typeof gap === "number" ? `${gap}px` : gap;
  if (rowHeight != null) css["--gw-bento-row"] = typeof rowHeight === "number" ? `${rowHeight}px` : rowHeight;
  return (
    <div className={cls} style={css} {...props}>
      {children}
    </div>
  );
}

export function BentoTile({
  children,
  tone = "cream",
  colSpan = 1,
  rowSpan = 1,
  interactive = false,
  as = "div",
  className = "",
  style,
  ...props
}) {
  useStyles();
  const Tag = as;
  const cls = `gw-tile gw-tile--${tone} ${interactive ? "gw-tile--interactive" : ""} ${className}`.trim();
  const css = {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
    ...style,
  };
  return (
    <Tag className={cls} style={css} {...props}>
      {children}
    </Tag>
  );
}
