import * as React from "react";

/**
 * Good Websites primary action button. Pill-shaped with the signature
 * ink outline + hard offset shadow that "presses" down on click.
 *
 * @startingPoint section="Core" subtitle="Pill button with sticker-press shadow" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "dark" | "secondary" | "coral" | "ghost";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as a different element, e.g. "a" for links. @default "button" */
  as?: "button" | "a";
  /** Optional icon node before the label. */
  iconLeft?: React.ReactNode;
  /** Optional icon node after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): React.JSX.Element;
