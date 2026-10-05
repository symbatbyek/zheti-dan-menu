import * as React from 'react';
export interface AppBarProps {
  title?: React.ReactNode;
  /** Shows a back chevron when provided. */
  onBack?: () => void;
  backLabel?: string;
  /** Right-side IconButtons / Buttons. */
  actions?: React.ReactNode;
  /** Center the title (balanced with a spacer when there are no actions). */
  center?: boolean;
  style?: React.CSSProperties;
}
export declare function AppBar(props: AppBarProps): JSX.Element;
