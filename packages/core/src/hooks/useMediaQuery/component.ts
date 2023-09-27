import { useContext } from 'react';

import { BreakpointsContext } from '../../utils/components/Breakpoints';

export function useMediaQuery() {
  const context = useContext(BreakpointsContext);

  if (context === undefined) {
    throw new Error('cant use useMediaQuery hook outside of <BreakpointsProvider />');
  }

  return context;
}
