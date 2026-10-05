import * as React from 'react';
export interface PriceProps {
  /** Amount in tenge (integer). Rendered as "2 500 ₸" with non-breaking spaces. */
  value: number;
  /** Font size override in px. */
  size?: number;
  /** Struck-through (old price). */
  strike?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Price(props: PriceProps): JSX.Element;
