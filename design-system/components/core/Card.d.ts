import * as React from "react";

/**
 * Surface container. `sticker` uses the brand's ink-outline + hard offset
 * shadow; `soft` is a warm floating card; `ink` / `sun` are filled blocks.
 *
 * @startingPoint section="Core" subtitle="Surface card — soft, sticker, ink & sun" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "soft" */
  variant?: "soft" | "outline" | "sticker" | "flat" | "ink" | "sun";
  /** Adds hover lift; pair with onClick. @default false */
  interactive?: boolean;
  /** Element to render. @default "div" */
  as?: "div" | "a" | "article" | "button" | "section";
  children?: React.ReactNode;
}

export function Card(props: CardProps): React.JSX.Element;
