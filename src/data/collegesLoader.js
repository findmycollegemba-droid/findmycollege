/**
 * Lazy loader and caching singleton for the 1.6MB COLLEGES_DATA module.
 * Enables instant home page and calculator loads without blocking the main thread.
 */

let _collegesCache = null;
let _loadPromise = null;

export async function getCollegesData() {
  if (_collegesCache) return _collegesCache;
  if (!_loadPromise) {
    _loadPromise = import('./collegesData.js').then(m => {
      _collegesCache = m.COLLEGES_DATA;
      return _collegesCache;
    });
  }
  return _loadPromise;
}

export function preloadCollegesData() {
  if (typeof window === 'undefined') return;

  const triggerPreload = () => {
    cleanup();
    getCollegesData();
  };

  const cleanup = () => {
    ['pointerdown', 'touchstart', 'focusin', 'keydown'].forEach(evt => {
      window.removeEventListener(evt, triggerPreload);
    });
  };

  ['pointerdown', 'touchstart', 'focusin', 'keydown'].forEach(evt => {
    window.addEventListener(evt, triggerPreload, { once: true, passive: true });
  });
}
