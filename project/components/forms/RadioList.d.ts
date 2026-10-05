import * as React from 'react';
export interface RadioListProps {
  /** lead = short code shown before the label (e.g. "KZ"). */
  options: { value: string; label: React.ReactNode; sub?: React.ReactNode; lead?: React.ReactNode }[];
  value?: string;
  onChange?: (value: string) => void;
}
export declare function RadioList(props: RadioListProps): JSX.Element;
