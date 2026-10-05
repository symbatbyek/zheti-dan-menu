import { useRef, useState } from 'react';
import { Banner, CafeHeader, CategoryTabs, EmptyState, Icon, ItemCard, LangSwitcher, SectionHeader, Skeleton } from '../ds';
import { T } from '../shared/i18n';
import { asset } from '../shared/store';
import type { OpenState } from '../shared/hours';
import { htmlLang, type Dish, type Lang, type MenuData } from '../shared/types';
import { statusHours } from './status';

export function MenuSkeleton() {
  return (
    <div>
      <Skeleton height={152} radius={0} />
      <div style={{ display: 'flex', gap: 12, padding: 16, alignItems: 'center' }}>
        <Skeleton width={52} height={52} radius="var(--radius-md)" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}><Skeleton width="55%" height={20} /><Skeleton width="40%" height={14} /></div>
      </div>
      <div style={{ display: 'flex', gap: 16, padding: '12px 16px', borderBottom: '1px solid var(--border-subtle)' }}>{[40, 70, 110, 60].map((w, i) => <Skeleton key={i} width={w} height={16} />)}</div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Skeleton width={120} height={22} />
        {[0, 1, 2].map(i => (
          <div key={i} className="qm-item" style={{ cursor: 'default' }}>
            <div className="qm-item__body" style={{ gap: 8 }}><Skeleton width="70%" height={18} /><Skeleton width="95%" height={12} /><Skeleton width="60%" height={12} /><Skeleton width="35%" height={16} style={{ marginTop: 'auto' }} /></div>
            <Skeleton width={104} height={104} radius="var(--radius-md)" />
          </div>
        ))}
      </div>
    </div>
  );
}

interface Props { data: MenuData; lang: Lang; setLang: (l: Lang) => void; status: OpenState; onItem: (d: Dish) => void; onInfo: () => void }

export function MenuScreen({ data, lang, setLang, status, onItem, onInfo }: Props) {
  const { cafe, cats, items } = data;
  const s = T[lang];
  const [active, setActive] = useState('all');
  const scroller = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const secs = useRef<Record<string, HTMLElement | null>>({});

  const onScroll = () => {
    const el = scroller.current, tabs = tabsRef.current;
    if (!el || !tabs) return;
    let cur = 'all';
    cats.forEach(c => { const n = secs.current[c.id]; if (n && n.offsetTop - tabs.offsetHeight - 8 <= el.scrollTop) cur = c.id; });
    setActive(cur);
  };
  const go = (id: string) => {
    const el = scroller.current, tabs = tabsRef.current;
    if (!el || !tabs) return;
    const top = id === 'all' ? tabs.offsetTop : (secs.current[id]?.offsetTop ?? 0) - tabs.offsetHeight;
    el.scrollTo({ top: Math.max(0, top) + 1, behavior: 'smooth' });
    setActive(id);
  };

  return (
    <div ref={scroller} onScroll={onScroll} lang={htmlLang(lang)} style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: 'var(--surface-page)' }}>
      <div>
        <CafeHeader name={cafe.name} logo={asset(cafe.logo)} cover={asset(cafe.cover) ?? null} open={status.open} statusLabel={status.open ? s.open : s.closed} hours={statusHours(status, s)} onInfo={onInfo} trailing={<LangSwitcher value={lang} onChange={setLang} />} />
        {!status.open && <div style={{ margin: '0 16px 12px' }}><Banner tone="closed">{s.closedNote}</Banner></div>}
      </div>
      <div ref={tabsRef} style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <CategoryTabs value={active} onChange={go} items={[{ id: 'all', label: s.all }, ...cats.map(c => ({ id: c.id, label: c[lang] || c.kz }))]} />
      </div>
      <div style={{ padding: '4px 16px 40px' }}>
        {cats.map(c => {
          const list = items.filter(i => i.cat === c.id);
          return (
            <section key={c.id} ref={n => { secs.current[c.id] = n; }} style={{ paddingTop: 20 }}>
              <SectionHeader variant="title">{c[lang] || c.kz}</SectionHeader>
              {list.length === 0 ? (
                <EmptyState title={s.empty} />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {list.map(i => (
                    <ItemCard key={i.id} name={i.name[lang] || i.name.kz} description={i.desc[lang] || i.desc.kz} price={i.price} photo={asset(i.img)}
                      soldOut={i.soldOut} soldOutLabel={s.soldOut} tags={i.tags.map(k => ({ kind: k, label: s[k] }))} onClick={() => onItem(i)} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
        <button onClick={onInfo} style={{ marginTop: 28, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 44, border: 0, background: 'none', color: 'var(--text-muted)', font: '500 14px var(--font-sans)', cursor: 'pointer' }}>
          <Icon name="info" size={18} />{s.info}
        </button>
      </div>
    </div>
  );
}
