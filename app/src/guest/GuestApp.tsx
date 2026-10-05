import { useEffect, useMemo, useState } from 'react';
import { lsGet, lsSet, useMenuData } from '../shared/store';
import { openState } from '../shared/hours';
import { LANGS, htmlLang, type Dish, type Lang } from '../shared/types';
import { MenuScreen, MenuSkeleton } from './MenuScreen';
import { ItemSheet } from './ItemSheet';
import { CafeInfoScreen } from './CafeInfoScreen';

const LANG_KEY = 'qm-guest-lang';

export function GuestApp() {
  const [data, accent] = useMenuData();
  const [lang, setLangS] = useState<Lang>(() => {
    const saved = lsGet(LANG_KEY, 'kz') as Lang;
    return LANGS.includes(saved) ? saved : 'kz';
  });
  const setLang = (l: Lang) => { setLangS(l); lsSet(LANG_KEY, l); };
  const [screen, setScreen] = useState<'menu' | 'info'>('menu');
  const [item, setItem] = useState<Dish | null>(null);
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 600); return () => clearTimeout(t); }, []);
  useEffect(() => { const t = setInterval(() => setTick(x => x + 1), 60_000); return () => clearInterval(t); }, []);
  useEffect(() => { document.documentElement.lang = htmlLang(lang); }, [lang]);

  // Re-evaluated every minute so the open/closed pill flips on time.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const status = useMemo(() => openState(data.cafe.hours), [data.cafe.hours, tick]);

  return (
    <div className="phone" data-qm-root="" data-accent={accent}>
      {loading ? <MenuSkeleton /> : screen === 'info'
        ? <CafeInfoScreen cafe={data.cafe} lang={lang} status={status} onBack={() => setScreen('menu')} />
        : <MenuScreen key={lang} data={data} lang={lang} setLang={setLang} status={status} onItem={setItem} onInfo={() => setScreen('info')} />}
      <ItemSheet item={item} lang={lang} onClose={() => setItem(null)} />
    </div>
  );
}
