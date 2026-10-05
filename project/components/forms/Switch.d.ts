export interface SwitchProps {
  /** On = available (green). */
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  /** Visible label to the left of the track. */
  label?: string;
  /** Label for icon-only usage (e.g. in a MenuRow). */
  ariaLabel?: string;
  disabled?: boolean;
}
export declare function Switch(props: SwitchProps): JSX.Element;
