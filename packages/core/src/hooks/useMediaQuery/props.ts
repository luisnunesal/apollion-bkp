import { TargetEventInterface } from './interface';

import { BreakpointValuesTypes } from '../../themes/Breakpoints';

export function getBoundaries({ innerWidth: width, innerHeight: height }: TargetEventInterface) {
  return { width, height };
}

export function checkIsMobile({ innerWidth: width }: TargetEventInterface, breakpoints: BreakpointValuesTypes) {
  return width <= breakpoints.md;
}

export function checkIsTablet({ innerWidth: width }: TargetEventInterface, breakpoints: BreakpointValuesTypes) {
  return width > breakpoints.md && width <= breakpoints.lg;
}

export function checkIsLaptop({ innerWidth: width }: TargetEventInterface, breakpoints: BreakpointValuesTypes) {
  return width > breakpoints.lg && width <= breakpoints.xl;
}
