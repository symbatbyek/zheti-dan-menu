import * as React from 'react';
/**
 * @startingPoint section="Forms" subtitle="Text, phone, price, search and multiline fields" viewport="700x380"
 */
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string;
  hint?: string;
  /** Error message; turns border red and replaces hint. */
  error?: string;
  /** Leading text, e.g. "+7". */
  prefix?: React.ReactNode;
  /** Trailing text, e.g. "₸", "г", "мл". */
  suffix?: React.ReactNode;
  /** Leading Lucide icon (e.g. "search"). */
  icon?: string;
  multiline?: boolean;
  rows?: number;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
