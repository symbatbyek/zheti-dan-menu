import * as React from 'react';
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  /** CSS radius, default var(--radius-sm). */
  radius?: number | string;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
