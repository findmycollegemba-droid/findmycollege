/**
 * Dynamic confetti trigger - loads canvas-confetti only when a celebration event occurs.
 * Keeps initial bundle lightweight.
 */

let _confettiModule = null;

export async function fireConfetti(options = {}) {
  try {
    if (!_confettiModule) {
      const mod = await import('canvas-confetti');
      _confettiModule = mod.default || mod;
    }
    return _confettiModule(options);
  } catch (err) {
    console.warn('Confetti animation suppressed:', err);
  }
}
