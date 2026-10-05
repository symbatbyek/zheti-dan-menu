import * as React from 'react';
export interface SegmentedProps {
  options: { value: string; label: React.ReactNode }[];
  value?: string;
  onChange?: (value: string) => void;
  /** Compact, content-width (e.g. г / мл inside a row). Default full width. */
  inline?: boolean;
}
export declare function Segmented(props: SegmentedProps): JSX.Element;
