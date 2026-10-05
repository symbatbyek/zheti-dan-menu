import { useEffect, useRef, useState, type PointerEvent as RPointerEvent } from 'react';

/*
 * Touch-friendly reordering from a grip handle (HTML5 drag-and-drop doesn't work with fingers).
 * Rows swap live as the pointer crosses a neighbour's midpoint; the list scrolls near its edges.
 *
 *   const s = useSortable(ids, (from, to) => move(from, to));
 *   <div ref={s.rowRef(id)} style={s.rowStyle(id)}> <span {...s.handleProps(id)} /> … </div>
 */
export function useSortable(ids: string[], onMove: (dragId: string, overId: string) => void) {
  const [dragId, setDragId] = useState<string | null>(null);
  const rows = useRef(new Map<string, HTMLElement>());
  const live = useRef({ ids, onMove });
  live.current = { ids, onMove };

  useEffect(() => {
    if (!dragId) return;
    const scroller = scrollParent(rows.current.get(dragId));
    const move = (e: PointerEvent) => {
      e.preventDefault();
      const { ids, onMove } = live.current;
      const me = ids.indexOf(dragId);
      for (const [i, id] of ids.entries()) {
        if (id === dragId) continue;
        const r = rows.current.get(id)?.getBoundingClientRect();
        if (!r) continue;
        const mid = r.top + r.height / 2;
        if ((i > me && e.clientY > mid) || (i < me && e.clientY < mid)) { onMove(dragId, id); break; }
      }
      if (scroller) {
        const b = scroller.getBoundingClientRect();
        if (e.clientY < b.top + 64) scroller.scrollBy(0, -12);
        else if (e.clientY > b.bottom - 64) scroller.scrollBy(0, 12);
      }
    };
    const end = () => setDragId(null);
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', end);
      window.removeEventListener('pointercancel', end);
    };
  }, [dragId]);

  return {
    dragId,
    rowRef: (id: string) => (el: HTMLElement | null) => { if (el) rows.current.set(id, el); else rows.current.delete(id); },
    handleProps: (id: string) => ({
      onPointerDown: (e: RPointerEvent) => { if (e.button === 0) { e.preventDefault(); setDragId(id); } },
      role: 'button' as const,
      'aria-label': 'Ретін өзгерту үшін сүйреңіз',
    }),
    rowStyle: (id: string) => (id === dragId
      ? { position: 'relative' as const, zIndex: 2, background: 'var(--surface-card)', boxShadow: 'var(--shadow-raised)', borderRadius: 'var(--radius-md)' }
      : undefined),
  };
}

function scrollParent(el?: HTMLElement | null): HTMLElement | null {
  for (let n = el?.parentElement; n; n = n.parentElement) {
    const o = getComputedStyle(n).overflowY;
    if (o === 'auto' || o === 'scroll') return n;
  }
  return null;
}
