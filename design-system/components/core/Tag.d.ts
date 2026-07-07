import * as React from "react";

/**
 * Soft colour-coded chip for topics, filters and selections. Optionally
 * removable via the trailing ×.
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour family. @default "neutral" */
  color?: "neutral" | "sun" | "coral" | "grass" | "sky" | "grape";
  /** When provided, shows a remove (×) button. */
  onRemove?: () => void;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): React.JSX.Element;
