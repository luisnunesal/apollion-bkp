import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

import { BreakpointsContextType } from './interface';

import { $window } from '../../../entities';

export const BreakpointsContext = createContext({} as BreakpointsContextType);

export const BreakpointsProvider: React.FC = ({ children }) => {
  const { breakpoints } = useTheme();

  const [queryMatch, setQueryMatch] = useState<BreakpointsContextType>({
    isLaptop: false,
    isMobile: false,
    isTablet: false,
    isPortrait: false,
  });

  const queries = {
    isMobile: `(max-width: ${breakpoints.values.md}px)`,
    isTablet: `(min-width: ${breakpoints.values.md}px) and (max-width: ${breakpoints.values.lg}px)`,
    isLaptop: `(min-width: ${breakpoints.values.lg}px) and (max-width: ${breakpoints.values.xl}px)`,
    isPortrait: '(orientation: portrait)',
  };

  useEffect(() => {
    const mediaQueryLists = {} as { [key: string]: MediaQueryList };

    const keys = Object.keys(queries) as Array<keyof BreakpointsContextType>;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
        return acc;
      }, {} as BreakpointsContextType);

      setQueryMatch(updatedMatches);
    };

    if (!$window?.matchMedia) {
      return undefined;
    }

    const matches = {} as BreakpointsContextType;

    keys.forEach((media) => {
      if (typeof queries[media] === 'string') {
        mediaQueryLists[media] = $window.matchMedia(queries[media]);
        matches[media] = mediaQueryLists[media].matches;
      } else {
        matches[media] = false;
      }
    });

    setQueryMatch(matches);

    keys.forEach((media) => {
      if (typeof queries[media] === 'string') {
        mediaQueryLists[media].addEventListener('change', handleQueryListener);
      }
    });

    return () => {
      keys.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media]?.removeEventListener('change', handleQueryListener);
        }
      });
    };
  }, []);

  return <BreakpointsContext.Provider value={queryMatch}>{children}</BreakpointsContext.Provider>;
};
