import { useCallback, useReducer } from 'react';

type ToggleOptions = Partial<{
  onActive: () => void;
}>;

type ToggleState = 'ON' | 'OFF' | 'TOGGLE';

type Payload = [ToggleState, ToggleOptions];

function reducer(state: { active: boolean }, [action, options]: Payload) {
  switch (action) {
    case 'ON': {
      if (options?.onActive) options.onActive();
      return { active: true };
    }
    case 'OFF': {
      return { active: false };
    }
    case 'TOGGLE': {
      const nexState = !state.active;
      if (nexState && options && options.onActive) options.onActive();
      return { active: nexState };
    }
    default:
      return state;
  }
}

export function useToggle(initialState?: boolean | (() => boolean), opt?: ToggleOptions) {
  const [{ active }, dispatch] = useReducer(reducer, undefined, () => ({
    active: typeof initialState === 'function' ? initialState() : Boolean(initialState),
  }));

  const run = (state: ToggleState) => () => dispatch([state, opt]);

  return {
    active,
    enable: run('ON'),
    disable: run('OFF'),
    toggle: run('TOGGLE'),
  };
}
