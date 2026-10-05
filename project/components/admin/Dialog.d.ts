import * as React from 'react';
export interface DialogProps {
  open: boolean;
  title?: React.ReactNode;
  /** Body text or custom content. */
  children?: React.ReactNode;
  /** Stacked full-width Buttons, destructive first. */
  actions?: React.ReactNode;
  /** Called on scrim tap. */
  onClose?: () => void;
}
export declare function Dialog(props: DialogProps): JSX.Element;
