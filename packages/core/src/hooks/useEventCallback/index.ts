import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

export const useIsomorphicEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useEventCallback(fn: (...args: any[]) => void) {
  const ref = useRef(fn);

  useIsomorphicEffect(() => {
    ref.current = fn;
  });

  // @ts-ignore
  return useCallback((...args) => ref.current.apply(undefined, args), []) as T;
}
