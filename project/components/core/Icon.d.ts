import * as React from 'react';
export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "flame", "chevron-left", "qr-code"). Prefix "brand:" for Simple Icons brand logos (e.g. "brand:whatsapp", "brand:2gis"). */
  name: string;
  /** px. Default 20. */
  size?: number;
  /** Accessible label. Omit for decorative icons (aria-hidden). */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
