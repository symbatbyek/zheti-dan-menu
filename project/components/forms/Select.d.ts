export interface SelectProps {
  label?: string;
  hint?: string;
  value?: string;
  onChange?: (value: string) => void;
  /** sub = optional second line in the picker. */
  options: { value: string; label: string; sub?: string }[];
  placeholder?: string;
  /** Picker sheet heading. Defaults to label. */
  title?: string;
  /** field = 52px bordered field (default). inline = bare value + chevron, for the right side of a SettingRow. */
  variant?: 'field' | 'inline';
  id?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
