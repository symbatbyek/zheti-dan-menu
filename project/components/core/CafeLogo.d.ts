export interface CafeLogoProps {
  /** Uploaded logo URL. If absent, renders the café name initial on the accent color. */
  src?: string;
  name?: string;
  /** px. Default 48. */
  size?: number;
}
export declare function CafeLogo(props: CafeLogoProps): JSX.Element;
