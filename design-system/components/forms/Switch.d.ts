import * as React from "react";

/** Toggle switch — ink thumb on a track that turns grass-green when on. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label rendered beside the switch. */
  label?: string;
}

export function Switch(props: SwitchProps): React.JSX.Element;
