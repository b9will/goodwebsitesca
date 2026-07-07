import React from "react";
import { gwIconDark, gwIconLight } from "./logoData.js";

const SIZES = { sm: 26, md: 34, lg: 48 };

export function Logo({ colorway = "ink", size = "md", markOnly = false, className = "", ...props }) {
  const px = SIZES[size] || SIZES.md;
  const wordColor = colorway === "light" ? "var(--paper-50)" : "var(--ink-900)";
  // Light icon (cream globe) only when sitting on the dark/ink colourway.
  const iconSrc = colorway === "light" ? gwIconLight : gwIconDark;

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: px * 0.34 }}
      {...props}
    >
      <img src={iconSrc} alt="Good Websites" width={px} height={px}
        style={{ display: "block", flex: "none", width: px, height: px }} />
      {!markOnly && (
        <span style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: px * 0.72,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          color: wordColor,
          whiteSpace: "nowrap",
        }}>
          Good&nbsp;Websites
        </span>
      )}
    </span>
  );
}
