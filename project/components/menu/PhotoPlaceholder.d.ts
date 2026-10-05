export interface PhotoPlaceholderProps {
  /** Optional caption, e.g. dish name or "Фото". */
  label?: string;
  /** Lucide icon. Default "utensils". */
  icon?: string;
  iconSize?: number;
}
export declare function PhotoPlaceholder(props: PhotoPlaceholderProps): JSX.Element;
