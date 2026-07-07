import * as React from "react";

/** Checkbox with a sun-gold checked fill and a springy tick. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label rendered beside the box. */
  label?: string;
}

export function Checkbox(props: CheckboxProps): React.JSX.Element;
