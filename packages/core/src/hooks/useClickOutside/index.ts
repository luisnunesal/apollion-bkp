import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(callback: () => void) => {
  const container = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (container.current && !container.current.contains(event.target as Element)) {
      callback();
    }
  };

  useEffect(() => {
    if (document) {
      document.addEventListener('mousedown', handleClickOutside, true);
    }

    return function cleanup() {
      if (document) {
        document.removeEventListener('mousedown', handleClickOutside, true);
      }
    };
  });

  return container;
};
