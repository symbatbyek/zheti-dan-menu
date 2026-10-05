export interface LangSwitcherProps {
  /** Current language code. */
  value?: 'kz' | 'ru' | 'en' | 'zh';
  onChange?: (code: string) => void;
  /** Defaults to KZ · RU · EN · ZH with native names. */
  languages?: { code: string; label: string }[];
}
export declare function LangSwitcher(props: LangSwitcherProps): JSX.Element;
