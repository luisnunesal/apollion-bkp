import { BreakpointInput, BreakpointsInterface, BreakpointTypes } from './interface';

export const breakpointsValues: BreakpointTypes[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const defaultInputBreakpoints: BreakpointInput = {
  unit: 'px',
  step: 4,
  values: {
    xs: 0,
    sm: 575,
    md: 767,
    lg: 990,
    xl: 1200,
  },
};

export const createBreakpoints = (breakpoints: BreakpointInput): BreakpointsInterface => {
  const { values, unit, step } = breakpoints;

  const keysProps = Object.keys(values) as BreakpointTypes[];

  const up = (key: BreakpointTypes) => {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  };

  const down = (key: BreakpointTypes) => {
    const value = typeof values[key] === 'number' ? values[key] : Number(key);
    return `@media (max-width:${value - step / 100}${unit})`;
  };

  const between = (start: BreakpointTypes, end: BreakpointTypes) => {
    const endIndex = keysProps.indexOf(end) + 1;

    if (endIndex === keysProps.length) {
      return up(start);
    }

    return (
      `@media (min-width:${values[start]}${unit}) and ` +
      `(max-width:${values[keysProps[endIndex]] - step / 100}${unit})`
    );
  };

  const only = (key: BreakpointTypes) => {
    if (keysProps.indexOf(key) + 1 < keysProps.length) {
      return between(key, keysProps[keysProps.indexOf(key) + 1]);
    }

    return up(key);
  };

  const width = (key: BreakpointTypes) => values[key];

  return {
    up,
    down,
    between,
    only,
    width,
    values,
  };
};
