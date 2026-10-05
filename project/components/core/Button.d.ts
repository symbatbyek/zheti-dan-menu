import * as React from 'react';
/**
 * @startingPoint section="Core" subtitle="Primary, secondary, soft, ghost, danger buttons" viewport="700x320"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = accent fill; soft = accent tint; secondary = outlined; ghost = text; danger = destructive tint. */
  variant?: 'primary' | 'secondary' | 'soft' | 'ghost' | 'danger';
  /** md = 44px (guest), lg = 52px (admin primary actions). */
  size?: 'md' | 'lg';
  /** Full width. */
  block?: boolean;
  /** Leading Lucide icon name. */
  icon?: string;
  /** Trailing Lucide icon name. */
  iconRight?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
