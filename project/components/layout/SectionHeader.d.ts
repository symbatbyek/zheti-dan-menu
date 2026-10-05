import * as React from 'react';
export interface SectionHeaderProps {
  children: React.ReactNode;
  /** Optional count / note at the right, e.g. "3 тағам · 1 таусылды". */
  count?: React.ReactNode;
  action?: React.ReactNode;
  /** caps = admin group label (14/600 uppercase muted). title = guest menu section (20/700). */
  variant?: 'caps' | 'title';
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
