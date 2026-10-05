export interface CodeInputProps {
  /** Digits. Default 4. */
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}
export declare function CodeInput(props: CodeInputProps): JSX.Element;
