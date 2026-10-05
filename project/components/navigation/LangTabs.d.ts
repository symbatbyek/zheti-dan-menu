/**
 * @startingPoint section="Navigation" subtitle="KZ · RU · EN · ZH segmented tabs with translation status" viewport="700x220"
 */
export interface LangTabsProps {
  value?: string;
  onChange?: (code: string) => void;
  /** Per-language translation status dot: filled = typed by owner, auto = AI-translated, not yet reviewed (amber), empty = missing. */
  status?: Partial<Record<string, 'filled' | 'auto' | 'empty'>>;
  languages?: string[];
}
export declare function LangTabs(props: LangTabsProps): JSX.Element;
