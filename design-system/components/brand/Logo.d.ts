import * as React from "react";

/**
 * The Good Websites logo — globe-and-smiley mark + Excon wordmark.
 * The mark is embedded as a data URI, so the component is fully portable.
 */
export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colourway. `ink` = mark + ink word (light bg); `light` = cream globe + cream word (dark bg); `onSun` = mark + ink word on gold. @default "ink" */
  colorway?: "ink" | "light" | "onSun";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render only the sun mark, no wordmark. @default false */
  markOnly?: boolean;
}

export function Logo(props: LogoProps): React.JSX.Element;
