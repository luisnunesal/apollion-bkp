import { domToReact, LOGGER, parseHtmlString } from '../../utils';

export function getIconFromUrl(src: string, cb: (c: React.ReactNode) => void) {
  if (typeof window !== 'undefined') {
    try {
      window
        .fetch(src)
        .then((resp) => resp.text())
        .then((doc: string) => parseHtmlString(doc, 'svg'))
        .then(domToReact)
        .then(cb);
    } catch (e) {
      LOGGER.warn(`[ICON] Failed to load icon from: ${src}`);
    }
  }
}
