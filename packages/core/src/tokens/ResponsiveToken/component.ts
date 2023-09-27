import { CSSObject } from 'styled-components';

import { BreakpointTypes } from '../../themes/Breakpoints/interface';
import { breakpointsValues } from '../../themes/Breakpoints/props';
import { Theme } from '../../themes/ThemeProvider/interface';
import { isObject } from '../../utils/utils';

function responsiveArray<T>(
  prop: string,
  values: T[],
  mediaQuery: (m: BreakpointTypes) => string,
  fn: (v: T) => any,
): CSSObject {
  const styles = {} as Record<string, any>;

  for (let index = 0; index < values.length; index++) {
    const value = values[index];

    if (index === 0) {
      styles[prop] = fn(value);
    } else {
      styles[mediaQuery(breakpointsValues[index])] = {
        [prop]: fn(value),
      };
    }
  }

  return styles;
}

function responsiveObject<T>(
  prop: string,
  values: Record<BreakpointTypes, T>,
  mediaQuery: (m: BreakpointTypes) => string,
  fn: (v: T) => any,
) {
  const medias = Object.keys(values) as BreakpointTypes[];

  const styles: Record<string, any> = {};

  for (let i = 0; i < medias.length; i++) {
    const media = medias[i];

    const value = values[media];

    if (media === 'xs') {
      styles[prop] = fn(value);
    } else {
      styles[mediaQuery(media)] = {
        [prop]: fn(value),
      };
    }
  }

  return styles;
}

export function responsiveToken<T>(
  mapToValues: Record<string, T | T[] | Record<any, T>>,
  mediaQuery: Theme['breakpoints']['up'],
  fn: (v: T) => any,
) {
  const styles: CSSObject[] = [];

  const props = Object.keys(mapToValues);

  for (let i = 0; i < props.length; i++) {
    const prop = props[i];

    const values = mapToValues[prop];

    if (typeof values === 'string' || typeof values === 'number') {
      styles.push({ [prop]: fn(values) });
    } else if (Array.isArray(values) && values.length > 1) {
      styles.push(responsiveArray(prop, values, mediaQuery, fn));
    } else if (isObject(values)) {
      styles.push(responsiveObject(prop, values as Record<any, T>, mediaQuery, fn));
    }
  }

  return styles;
}
