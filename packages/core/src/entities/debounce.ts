export function debounce(callback: any, wait: any, immediate = false) {
  let timeout: any = null;

  return function execute(...args: any[]) {
    return new Promise((resolve) => {
      const callNow = immediate && !timeout;
      const next = () => resolve(callback.apply(this, args));

      clearTimeout(timeout);
      timeout = setTimeout(next, wait);

      if (callNow) {
        next();
      }
    });
  };
}
