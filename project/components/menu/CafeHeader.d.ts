import * as React from 'react';
/**
 * @startingPoint section="Menu" subtitle="Guest menu header: cover, logo, name, open status, language" viewport="700x300"
 */
export interface CafeHeaderProps {
  name: string;
  logo?: string;
  /** Cover image URL. Pass null for an empty sunken cover, omit to hide the cover. */
  cover?: string | null;
  open?: boolean;
  statusLabel?: string;
  hours?: string;
  /** Tap on name/logo → café info. Adds a chevron. */
  onInfo?: () => void;
  /** Usually <LangSwitcher />. */
  trailing?: React.ReactNode;
}
export declare function CafeHeader(props: CafeHeaderProps): JSX.Element;
