import styled, { css, keyframes } from 'styled-components';

import { NotificationVariants } from './interface';

import { IconStyle } from '../../elements/Icon/style';
import { IconButtonStyle } from '../../elements/IconButton/style';
import { TextStyle } from '../../elements/Typography/style';
import { WithTheme } from '../../themes/ThemeProvider/interface';
import { AnimatedContainer } from '../Base';
import { Flex } from '../Flex';

// PROGRESS
const progress = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

export const NotificationProgress = styled(Flex)`
  --time: 15;

  width: 0;
  height: 0.25rem;
  background-color: var(--baseColor);
  animation: ${progress} calc(var(--time, 15) * 1s) normal forwards;
`;

export const ProgressContainer = styled(Flex)`
  position: absolute;
  top: 0.25rem;
  left: 0.5rem;
  right: 0.5rem;
`;

function getWrapperStyle({ variant, theme }: WithTheme<{ variant: NotificationVariants }>) {
  const color = theme.colors[variant];

  return css`
    --baseColor: ${color.base};
    --lightColor: ${color.light};
    --darkColor: ${color.dark};
    --activeColor: ${color.active};
    --actionColor: ${color.action};

    position: relative;
    background-color: var(--lightColor);
    border-color: var(--baseColor);

    ${TextStyle} {
      color: var(--darkColor);
    }

    & ${IconButtonStyle} {
      width: intrinsic;
      color: var(--darkColor);

      &:hover {
        background: var(--activeColor);
      }

      &:active ${IconStyle} {
        color: var(--actionColor);
      }
    }

    &:hover ${NotificationProgress} {
      animation-play-state: paused;
    }
  `;
}

// BASE NOTIFICATION

export const WrapperNotificationStyle = styled(AnimatedContainer)<{
  variant: NotificationVariants;
}>(getWrapperStyle);

WrapperNotificationStyle.displayName = 'div';

// ICON LEFT

export const NotificationIconStyle = styled(Flex)`
  color: var(--darkColor);

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
