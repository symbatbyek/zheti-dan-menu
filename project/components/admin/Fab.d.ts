import * as React from 'react';
export interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon. Default "plus". */
  icon?: string;
  /** Label, e.g. "Добавить блюдо". */
  children?: React.ReactNode;
}
export declare function Fab(props: FabProps): JSX.Element;
