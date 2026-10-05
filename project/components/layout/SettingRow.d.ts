import * as React from 'react';
export interface SettingRowProps {
  icon?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Trailing Switch / Price / text. */
  control?: React.ReactNode;
  /** Makes the row a button with a chevron. */
  onClick?: () => void;
  chevron?: boolean;
}
export declare function SettingRow(props: SettingRowProps): JSX.Element;
