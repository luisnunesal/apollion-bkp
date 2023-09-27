import { useEffect, useRef, useState } from 'react';

import { $window } from '../../entities';

// Run a callback when a given Document Node,
// appear on the Window Viewport
// USES: Intersection Observer API
// DOCS: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
export function useIntersect(
  { root = null, threshold = 0.5, rootMargin = '0px' }: IntersectionObserverInit,
  onIntersect?: () => void,
) {
  const [node, setNode] = useState(null);

  let { current } = useRef<IntersectionObserver>(null);

  useEffect(() => {
    if ('IntersectionObserver' in $window) {
      if (current) {
        current.disconnect();
      }

      if ($window.IntersectionObserver) {
        current = new $window.IntersectionObserver(
          (entries) => {
            entries.forEach(({ isIntersecting }) => {
              if (isIntersecting && onIntersect) onIntersect();
            });
          },
          { root, rootMargin, threshold },
        );
      }

      if (node) {
        current.observe(node);
      }
    } else if (onIntersect) {
      onIntersect();
    }

    return () => {
      current && current.disconnect();
    };
  }, [node]);

  return [setNode];
}
