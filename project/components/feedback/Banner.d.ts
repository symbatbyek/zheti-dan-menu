import * as React from 'react';
export interface BannerProps {
  /** info = neutral sunken; accent = auto-translate notice; closed = café closed; danger = error; success = saved; warning = AI translation awaiting review. */
  tone?: 'info' | 'accent' | 'closed' | 'danger' | 'success' | 'warning';
  /** Override Lucide icon. */
  icon?: string;
  children?: React.ReactNode;
  /** Optional trailing Button / link. */
  action?: React.ReactNode;
}
export declare function Banner(props: BannerProps): JSX.Element;
