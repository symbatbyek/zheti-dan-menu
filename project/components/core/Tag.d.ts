import * as React from 'react';
export interface TagProps {
  /** Dish attribute. soldout = grey "Нет в наличии" label. */
  kind?: 'spicy' | 'veg' | 'new' | 'popular' | 'neutral' | 'soldout';
  /** Override Lucide icon, or false to hide. Defaults: spicy=flame, veg=leaf, new=sparkles, popular=star. */
  icon?: string | false;
  /** Localised label text. */
  children?: React.ReactNode;
  /** When onClick is set the tag becomes a toggle chip (admin tag picker). */
  pressed?: boolean;
  onClick?: () => void;
}
export declare function Tag(props: TagProps): JSX.Element;
