/**
 * @startingPoint section="Admin" subtitle="Admin dish row with drag handle and one-tap sold-out toggle" viewport="700x300"
 */
export interface MenuRowProps {
  name: string;
  price: number;
  photo?: string;
  /** Switch state. false = sold out (row greys out). */
  available?: boolean;
  onToggle?: (available: boolean) => void;
  /** Opens the edit screen. */
  onClick?: () => void;
  /** Show the drag handle. Default true. */
  draggable?: boolean;
  soldOutLabel?: string;
  availableLabel?: string;
}
export declare function MenuRow(props: MenuRowProps): JSX.Element;
