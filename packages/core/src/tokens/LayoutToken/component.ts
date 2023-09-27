import { CSSObject } from 'styled-components';

import { LayoutTokenProps } from './interface';

export const LayoutToken =
  (customProps: LayoutTokenProps) =>
  (contextProps: LayoutTokenProps): CSSObject => {
    const { hidden, absoluteFill, position, left, right, top, bottom } = { ...customProps, ...contextProps };

    return {
      position,
      left,
      right,
      top,
      bottom,
      ...(hidden && { visibility: 'hidden' }),
      ...(absoluteFill && {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }),
    };
  };
