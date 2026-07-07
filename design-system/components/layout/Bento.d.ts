import * as React from "react";

/**
 * Bento grid — the house layout motif. A dense CSS grid of outlined,
 * hard-shadowed tiles in soft sunlit tints. Compose `BentoTile`
 * children and let them span columns/rows for an editorial,
 * magazine-like rhythm. Collapses to a single column on mobile.
 *
 * @startingPoint section="Layout" subtitle="Bento grid + spanning tiles" viewport="760x520"
 */
export interface BentoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Grid columns. @default 4 */
  columns?: 2 | 3 | 4 | 6;
  /** Gap between tiles (px number or CSS length). @default --space-4 */
  gap?: number | string;
  /** Min height of one grid row (px number or CSS length). @default 168px */
  rowHeight?: number | string;
  children?: React.ReactNode;
}

export function Bento(props: BentoProps): React.JSX.Element;

/**
 * A single bento cell. Carries the signature ink outline + hard offset
 * shadow. Light `tone` tints are for content tiles; the `*-solid` /
 * `ink` tones are bold feature blocks.
 */
export interface BentoTileProps extends React.HTMLAttributes<HTMLElement> {
  /** Fill tone. @default "cream" */
  tone?:
    | "cream" | "white" | "sun" | "coral" | "grass" | "sky" | "grape"
    | "ink" | "sun-solid" | "coral-solid";
  /** Columns to span. @default 1 */
  colSpan?: number;
  /** Rows to span. @default 1 */
  rowSpan?: number;
  /** Adds hover lift; pair with onClick. @default false */
  interactive?: boolean;
  /** Element to render. @default "div" */
  as?: "div" | "a" | "article" | "button" | "section";
  children?: React.ReactNode;
}

export function BentoTile(props: BentoTileProps): React.JSX.Element;
