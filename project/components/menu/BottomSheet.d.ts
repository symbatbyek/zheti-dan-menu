import * as React from 'react';
export interface BottomSheetProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  /** Frosted close button top-right. Default true. */
  showClose?: boolean;
  closeLabel?: string;
}
export declare function BottomSheet(props: BottomSheetProps): JSX.Element;
