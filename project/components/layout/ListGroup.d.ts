import * as React from 'react';
export interface ListGroupProps {
  /** Rows (MenuRow, SettingRow, …). Dividers are inserted between them. */
  children?: React.ReactNode;
  /** Adds 16px horizontal padding inside (for SettingRows). */
  inset?: boolean;
}
export declare function ListGroup(props: ListGroupProps): JSX.Element;
