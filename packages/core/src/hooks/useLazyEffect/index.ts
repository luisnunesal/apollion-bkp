import { useEffect, useRef } from 'react';

export function useLazyEffect(cb: () => any, deps: any[]) {
  const initializeRef = useRef<boolean>(false);

  useEffect((...args) => {
    if (initializeRef.current) {
      cb(...args);
    } else {
      initializeRef.current = true;
    }
  }, deps);
}
