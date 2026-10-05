export interface ColorPickerProps {
  /** Accent preset id; apply to the guest menu with data-accent="<id>". */
  value?: string;
  onChange?: (id: string) => void;
  /** Defaults to the six data-accent presets in tokens/colors.css. */
  options?: { id: string; label: string; color: string; dark?: boolean }[];
}
export declare function ColorPicker(props: ColorPickerProps): JSX.Element;
