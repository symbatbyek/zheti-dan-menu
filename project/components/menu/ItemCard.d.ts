/**
 * @startingPoint section="Menu" subtitle="Guest menu dish card: row, feature, text-only, sold out" viewport="700x420"
 */
export interface ItemCardProps {
  name: string;
  /** Short description, clamped to 2 lines. */
  description?: string;
  /** Tenge. */
  price: number;
  /** Photo URL. Without it (and without placeholder) the card renders as text-only. */
  photo?: string;
  /** Show a PhotoPlaceholder in the media slot when there is no photo. */
  placeholder?: boolean;
  /** Up to 2 shown on the card. */
  tags?: { kind: 'spicy' | 'veg' | 'new' | 'popular'; label: string }[];
  /** Greyed out, stays visible, shows soldOutLabel tag. */
  soldOut?: boolean;
  soldOutLabel?: string;
  /** row = 104px photo left, text right (default). feature = full-width 4:3 photo on top. */
  layout?: 'row' | 'feature';
  onClick?: () => void;
  /** BCP-47 lang for the card text ("zh" switches to CJK type). */
  lang?: string;
}
export declare function ItemCard(props: ItemCardProps): JSX.Element;
