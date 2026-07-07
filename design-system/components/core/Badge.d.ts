import * as React from "react";

/**
 * Small status / category pill. Use for labels, counts and statuses.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "soft" */
  variant?: "solid" | "sun" | "outline" | "soft" | "success" | "info" | "warning" | "danger";
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): React.JSX.Element;
