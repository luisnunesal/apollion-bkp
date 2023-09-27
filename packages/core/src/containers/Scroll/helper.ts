import { $window } from '../../entities';

/**
 * We use a negative right on the content to hide original OS scrollbars
 */
export const OS_SCROLLBAR_WIDTH = (() => {
  // Needed this because docs uses SSR
  if (typeof window === 'undefined') {
    return 15;
  }

  const outer = $window.document.createElement('div');
  const inner = $window.document.createElement('div');
  outer.style.overflow = 'scroll';
  outer.style.width = '100%';
  inner.style.width = '100%';

  $window.document.body.appendChild(outer);
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.removeChild(inner);
  $window.document.body.removeChild(outer);

  return scrollbarWidth;
})();

/**
 * We need this for OSs that automatically hide the scrollbar (so the offset
 * doesn't change in such case). Eg: macOS with "Automatically based on mouse".
 */
export const SCROLLBAR_WIDTH = OS_SCROLLBAR_WIDTH ? OS_SCROLLBAR_WIDTH + 1 : null || 20;
