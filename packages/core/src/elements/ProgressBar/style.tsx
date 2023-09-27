import styled from 'styled-components';

import { ProgressBarInterface } from './interface';

import { BaseContainer, BaseContainerProps } from '../../containers/Base';
import { Flex } from '../../containers/Flex';
import { WithTheme } from '../../themes/ThemeProvider/interface';
import { BaseText } from '../Typography';

function progressOverlayProps({ size, border }: Partial<ProgressBarInterface>): BaseContainerProps {
  let overlayProps: BaseContainerProps;

  switch (size) {
    case 'extraSmall':
      overlayProps = {
        height: '0.25rem',
        borderRadius: 'micro',
        mb: 'micro',
      };
      break;

    case 'small':
      overlayProps = {
        height: '0.5rem',
        borderRadius: 'xs',
        mb: 'micro',
      };
      break;

    case 'large':
      overlayProps = {
        height: '1rem',
        borderRadius: 'md',
        mb: 'small',
      };
      break;

    default:
      overlayProps = {
        height: '0.75rem',
        borderRadius: 'sm',
        mb: 'xs',
      };
  }

  if (!border) {
    overlayProps.borderRadius = undefined;
  }

  return overlayProps;
}

export const ProgerssOverlayStyle = styled(BaseContainer).attrs<unknown, any>(progressOverlayProps)`
  background: var(--bg-overlay);
  overflow: hidden;
  width: 100%;
`;

export const ProgressBarStyle = styled(BaseContainer)`
  height: 100%;
  background: var(--bg-progress);
  transition: ${({ theme }) => theme.animation.transitions.short};
`;

function getProgressColor({ color, theme }: WithTheme<Partial<ProgressBarInterface>>) {
  const { base, dark, light } = theme.colors[color];

  return {
    '--text-color': dark,
    '--bg-overlay': light,
    '--bg-progress': base,
  };
}

export const ProgressContainer = styled(Flex)<WithTheme<{ color: any }>>`
  ${getProgressColor}

  ${BaseText} {
    color: var(--text-color);
  }
`;
