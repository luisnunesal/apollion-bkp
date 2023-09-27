// it prevents SSR errors
export const $window = (() => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  return window;
})();

export const $documentBody = (() => (typeof document !== 'undefined' ? document.body : undefined))() as HTMLElement;
