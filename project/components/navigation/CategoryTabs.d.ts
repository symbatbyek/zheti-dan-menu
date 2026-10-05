/**
 * @startingPoint section="Navigation" subtitle="Sticky, scrollable category tabs for the guest menu" viewport="700x260"
 */
export interface CategoryTabsProps {
  items: { id: string; label: string }[];
  /** Active category id. The active tab auto-scrolls into the centre. */
  value?: string;
  onChange?: (id: string) => void;
  /** position: sticky; top: 0 */
  sticky?: boolean;
}
export declare function CategoryTabs(props: CategoryTabsProps): JSX.Element;
