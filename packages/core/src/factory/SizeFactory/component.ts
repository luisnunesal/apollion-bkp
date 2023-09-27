import { CSSObject } from 'styled-components';

import { SizeFactoryProps, SizeThemeProps } from './interface';

export const sizeKeys: Array<keyof SizeFactoryProps> = [
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'width',
  'height',
];

export const SizeFactory =
  (customProps: SizeFactoryProps) =>
  (contextProps: SizeFactoryProps = {}): CSSObject => {
    const { maxWidth, height, maxHeight, minHeight, minWidth, width } = { ...customProps, ...contextProps };

    return {
      maxWidth,
      height,
      maxHeight,
      minHeight,
      minWidth,
      width,
    };
  };
