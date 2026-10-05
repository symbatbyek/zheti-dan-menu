export interface HoursTableProps {
  /** Seven rows, Monday first. */
  days: { label: string; from?: string; to?: string; closed?: boolean; closedLabel?: string; todayLabel?: string }[];
  /** Index of today (0 = Monday); row is bolded. */
  today?: number;
}
export declare function HoursTable(props: HoursTableProps): JSX.Element;
