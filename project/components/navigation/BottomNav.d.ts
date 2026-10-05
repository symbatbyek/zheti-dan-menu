export interface BottomNavProps {
  /** 3–5 destinations. */
  items: { id: string; label: string; icon: string }[];
  value?: string;
  onChange?: (id: string) => void;
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
