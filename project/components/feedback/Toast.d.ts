import * as React from 'react';
export interface ToastProps {
  open: boolean;
  children?: React.ReactNode;
  /** Lucide icon. Default circle-check. */
  icon?: string;
  /** Called after duration ms — set open=false here. */
  onDone?: () => void;
  duration?: number;
}
export declare function Toast(props: ToastProps): JSX.Element;
