export interface QrCodeProps {
  /** Seed for the illustrative pattern (e.g. menu URL + table). */
  value?: string;
  /** px. Default 168. */
  size?: number;
  color?: string;
}
export declare function QrCode(props: QrCodeProps): JSX.Element;
