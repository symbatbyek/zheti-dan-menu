import * as React from 'react';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name. */
  icon: string;
  /** Required accessible label. */
  label: string;
  /** ghost = bare; secondary = outlined; overlay = frosted white over photos; danger = red glyph. */
  variant?: 'ghost' | 'secondary' | 'overlay' | 'danger';
  /** Glyph size in px (button is always 44×44). */
  size?: number;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
