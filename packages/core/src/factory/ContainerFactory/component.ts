import { CSSObject } from 'styled-components';

import { ContainerFactoryProps, ContainerThemePropsType } from './interface';

export const containerKeys: Array<keyof ContainerFactoryProps> = [
  'area',
  'padding',
  'margin',
  'isHidden',
  'truncate',
  'container',
  'overflow',
  'overflowX',
  'overflowY',
  'absoluteFill',
  'position',
  'display',
  'cursor',
  'top',
  'bottom',
  'left',
  'right',
  'zIndex',
];

export const ContainerFactory =
  (customProps: ContainerFactoryProps) =>
  (contextProps: ContainerThemePropsType): CSSObject => {
    const {
      area,
      padding,
      margin,
      zIndex,
      display,
      isHidden,
      truncate,
      overflow,
      overflowX,
      overflowY,
      absoluteFill,
      position,
      left,
      right,
      top,
      bottom,
      container,
      cursor,
    } = {
      ...customProps,
      ...contextProps,
    };

    return {
      cursor,
      padding,
      margin,
      zIndex,
      display,
      overflow,
      overflowX,
      overflowY,
      position,
      left,
      right,
      top,
      bottom,
      gridArea: area,
      ...(isHidden && { visibility: 'hidden' }),
      ...(truncate && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }),
      ...(container && {
        margin: '0 auto',
        maxWidth: 1366,
      }),
      ...(absoluteFill && {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }),
    };
  };
