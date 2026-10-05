export interface StatusPillProps {
  /** true = green "open", false = red "closed". */
  open?: boolean;
  /** Localised label (default Ашық / Жабық; RU Открыто, EN Open, ZH 营业中). */
  label?: string;
  /** e.g. "08:00–23:00" or "Откроется в 08:00". */
  hours?: string;
}
export declare function StatusPill(props: StatusPillProps): JSX.Element;
