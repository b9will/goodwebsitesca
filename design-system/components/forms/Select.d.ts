import * as React from "react";

/** Styled native select with a custom chevron and optional label. */
export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Label rendered above the control. */
  label?: string;
  /** Options as strings or {value,label}. You may pass <option> children instead. */
  options?: (string | SelectOption)[];
}

export function Select(props: SelectProps): React.JSX.Element;
