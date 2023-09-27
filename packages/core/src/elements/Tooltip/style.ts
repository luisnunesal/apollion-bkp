import styled from 'styled-components';

import { TooltipStyleProps } from './interface';

import { BaseContainer } from '../../containers/Base';

function getContainerStyle({ inverted, theme }: TooltipStyleProps) {
  if (inverted) {
    return {
      '--background': theme.colors.grayscale['0'],
      '--color': theme.colors.neutral['170'],
    };
  }
  return {
    '--background': theme.colors.grayscale['80'],
    '--color': theme.colors.grayscale['0'],
  };
}

export const Arrow = styled(BaseContainer)`
  position: absolute;
  width: 8px;
  height: 8px;
  z-index: -1;

  &::before {
    content: '';
    transform: rotate(45deg);
    background: var(--background);
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: -1;
  }
`;

export const TooltipContainer = styled(BaseContainer)<TooltipStyleProps>`
  ${getContainerStyle}

  color: var(--color);
  background-color: var(--background);
  line-height: 1;

  &[data-placement^='top'] > ${Arrow} {
    bottom: -4px;
  }

  &[data-placement^='bottom'] > ${Arrow} {
    top: -4px;
  }

  &[data-placement^='left'] > ${Arrow} {
    right: -4px;
  }

  &[data-placement^='right'] > ${Arrow} {
    left: -4px;
  }
`;
