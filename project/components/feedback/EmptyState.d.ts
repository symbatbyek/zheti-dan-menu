import * as React from 'react';
export interface EmptyStateProps {
  icon?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Optional Button. */
  action?: React.ReactNode;
  /** Dashed outline (in-list) vs bare (full screen). Default true. */
  dashed?: boolean;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
