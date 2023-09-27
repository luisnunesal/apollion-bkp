export interface BreakPoint<T> {
  xs: T;
  sm: T;
  md: T;
  lg: T;
  xl: T;
}

export type BreakpointTypes = keyof BreakPoint<any>;

export type BreakpointValuesTypes = BreakPoint<number>;

export type BreakpointInput = {
  values: BreakpointValuesTypes;
  unit: string;
  step: number;
};

export interface BreakpointsInterface {
  // keys: BreakpointTypes[];
  values: BreakpointValuesTypes;
  up: (key: BreakpointTypes) => string;
  down: (key: BreakpointTypes) => string;
  between: (start: BreakpointTypes, end: BreakpointTypes) => string;
  only: (key: BreakpointTypes) => string;
  width: (key: BreakpointTypes) => number;
}
