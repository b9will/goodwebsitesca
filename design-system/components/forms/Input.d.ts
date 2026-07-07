import * as React from "react";

/**
 * Labelled text input with optional hint and error states. On focus it
 * pops the signature hard offset shadow.
 *
 * @startingPoint section="Forms" subtitle="Text field with label, hint & error" viewport="700x180"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label rendered above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — replaces hint and turns the field coral. */
  error?: string;
  /** Marks the field required (adds a coral asterisk). */
  required?: boolean;
}

export function Input(props: InputProps): React.JSX.Element;
