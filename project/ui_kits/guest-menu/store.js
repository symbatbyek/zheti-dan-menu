(() => {
  const KEY = 'qm-data-v1';
  const D = window.QM_DATA;
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (s) {
      if (s.items) D.items = s.items;
      if (s.cats) D.categories = [D.categories[0], ...s.cats];
      if (s.cafe) D.cafe = { ...D.cafe, ...s.cafe };
    }
  } catch (e) {}
  window.QM_STORE = {
    save(patch) {
      let s = {};
      try { s = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
      const next = { ...s, ...patch };
      try { localStorage.setItem(KEY, JSON.stringify(next)); return true; }
      catch (e) {
        if (next.items) next.items = next.items.map(i => (i.img && i.img.startsWith('data:')) ? { ...i, img: undefined } : i);
        try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (e2) {}
        return false;
      }
    }
  };
})();
