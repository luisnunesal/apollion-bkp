import { BreakpointTypes } from '../../themes/Breakpoints/interface';

export type ResponsiveProp<T> = T | T[] | Record<BreakpointTypes, T>;
