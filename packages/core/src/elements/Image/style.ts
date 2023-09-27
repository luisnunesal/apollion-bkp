import { CSSObject } from 'styled-components';

import { ImageInterface } from './interface';

import { styled } from '../../factory';
import { toPixel } from '../../utils';

const imageCover = ({ cover, height, width }: ImageInterface): CSSObject | false =>
  cover && {
    width: width ?? '100%',
    height: height ?? '100%',
    objectFit: 'cover',
  };

const getSizeValue = (size?: number | string) => (size ? toPixel(size) : 'fit-content');

export const ImageStyle = styled('img')<ImageInterface>`
  display: block;
  width: ${({ full, width }) => (full ? '100%' : getSizeValue(width))};
  height: ${({ height }) => getSizeValue(height)};
  ${imageCover};

  &[src=''] {
    visibility: hidden;
    position: absolute;
  }
`;
