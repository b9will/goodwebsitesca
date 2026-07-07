import * as React from "react";

/**
 * Round avatar with an outlined ring. Shows an image, or coloured initials
 * derived from the name.
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — used for initials and the colour pick. */
  name?: string;
  /** Image URL. Falls back to initials when absent. */
  src?: string;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
}

export function Avatar(props: AvatarProps): React.JSX.Element;
