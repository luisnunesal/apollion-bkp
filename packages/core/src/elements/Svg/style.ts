import { DefaultSvgInterface } from './interface';

import { styled } from '../../factory';

const getComputedSize = ({
  size,
  dimensions,
}: DefaultSvgInterface): { width: string | number; height: string | number } => {
  if (size) {
    return { width: size, height: size };
  }

  if (dimensions) {
    const { width, height, ratio } = dimensions;

    if (height) {
      return { width, height };
    }

    if (ratio) {
      if (typeof width === 'number') {
        return { width, height: width / ratio };
      }

      if (width.endsWith('px')) {
        return {
          width,
          height: `calc(${width} / ${ratio})`,
        };
      }

      return { width, height: 'auto' };
    }
  }

  return { width: '1em', height: '1em' };
};

export const SvgStyle = styled('svg')<DefaultSvgInterface>`
  ${(props) => ({ ...getComputedSize(props) })}
  ${({ error, theme }) => error && `fill: ${theme.colors.getColor(theme.colors.danger)};`}
`;

export const GroupStyle = styled('g')`
  fill: ${({ fill, theme }) => fill || theme.colors.getColor(theme.colors.main)};
  ${({ transform }) => transform && `transform: ${transform};`}
`;

export const PathStyle = styled('path')``;
