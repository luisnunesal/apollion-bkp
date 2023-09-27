import styled, { css } from 'styled-components';

import { ModalComponentProps, ModalStyleProps } from './interface';

import { AnimatedContainer, BaseContainer, Flex } from '../../containers';
import { BaseContainerProps } from '../../containers/Base';
import { FlexPropsInterface } from '../../containers/Flex';
import { IconButtonStyle } from '../IconButton';
import { TextStyle } from '../Typography';

const modalSmall = css`
  max-width: 30rem;
  min-width: 20rem;
`;

const modalBase = css`
  max-width: 40rem;
  min-width: 20rem;
`;

const modalMedium = css`
  max-width: 55rem;
  min-width: 40rem;
`;

const modalLarge = css`
  max-width: 75rem;
  min-width: 40rem;
`;

const modalMobile = css`
  width: 95%;
`;

function modalSize({ size }: ModalStyleProps) {
  switch (size) {
    case 'small':
      return modalSmall;
    case 'medium':
      return modalMedium;
    case 'large':
      return modalLarge;

    default:
      return modalBase;
  }
}

function modalVariantColor({ variant, theme }: ModalStyleProps) {
  const color = theme.colors[variant];

  return css`
    --baseColor: ${color.base};
    --lightColor: ${color.light};
    --actionColor: ${color.action};
  `;
}

export const ModalDialogStyle = styled(AnimatedContainer).attrs<unknown, BaseContainerProps>({
  p: 'large',
  borderRadius: 'md',
  bgColor: 'neutral.0',
})<{
  variant: ModalComponentProps['variant'];
  size: ModalComponentProps['size'];
}>`
  ${modalMobile};

  ${modalVariantColor};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    ${modalSize};
  }
`;

export const ModalContentStyle = styled(Flex)`
  max-height: 84vh;
  overflow: hidden;
`;

export const ModalHeader = styled(Flex)`
  & ${TextStyle} {
    flex: 1;
    margin: 0;
  }

  & ${IconButtonStyle} {
    padding: 0.3rem;
    color: var(--baseColor);

    &:only-child {
      margin-left: auto;
    }
  }

  & ${IconButtonStyle}:active {
    color: var(--actionColor);
    background-color: var(--lightColor);
  }

  & ${IconButtonStyle}:hover {
    background-color: var(--lightColor);
  }
`;

export const ModalBody = styled(BaseContainer)`
  flex: 1;
  display: flex;
  overscroll-behavior: none;
  overflow: hidden;

  & > ${TextStyle} {
    margin: 0;
  }
`;

export const ModalIconStyle = styled(Flex).attrs<unknown, FlexPropsInterface>({
  borderRadius: 'circular',
})<FlexPropsInterface>`
  background-color: var(--lightColor);

  & svg {
    color: var(--baseColor);
    width: 1.25rem;
    height: 1.25rem;

    g {
      fill: var(--baseColor);
    }
  }
`;

export const ModalContainer = styled(BaseContainer)`
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalOverlayStyle = styled(AnimatedContainer)`
  will-change: opacity;
`;
