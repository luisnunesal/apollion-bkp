import styled, { css } from 'styled-components';

import { InputInterface, InputStyleProps } from './interface';

import { BaseContainer } from '../../containers';
import { IconStyle } from '../../elements/Icon/style';
import { IconButtonStyle } from '../../elements/IconButton/style';
import {
  BackgroundFactory,
  BorderFactory,
  DeepFactory,
  FontFactory,
  SizeFactory,
  SpacingFactory,
  styled as _styled,
} from '../../factory';

export function inputVariantStyle() {
  return css`
    color: var(--dark-color);
    border-color: var(--border-color);

    ${DeepFactory({ deep: -1 })}

    &:focus, &:hover {
      ${DeepFactory({ deep: 0 })}
    }

    &:focus + ${IconStyle} {
      color: var(--base-color);
    }
  `;
}

export const inputPlaceholderStyle = css`
  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral['70']};
  }

  &:disabled {
    &::placeholder {
      color: var(--disabled-color);
    }
  }
`;

export const inputDisabledStyle = css`
  &:disabled,
  &:read-only {
    border: 1px solid var(--disabled-bg);
    background-color: var(--disabled-bg);
    color: var(--disabled-color);
  }
  &:read-only {
    ${DeepFactory({ deep: 0 })}
  }
`;

export function invertIconPosition({ iconPosition }: InputStyleProps) {
  return iconPosition === 'left'
    ? css`
        & + ${IconButtonStyle}, & + ${IconStyle} {
          left: 1em;
          right: unset;
        }
      `
    : null;
}

const inputIconStyle = css`
  &:disabled + ${IconStyle} {
    color: var(--disabled-color);
  }

  &:disabled + ${IconButtonStyle} {
    pointer-events: none;
    ${BackgroundFactory({ bgColor: 'grayscale.10' })}
  }

  & + ${IconButtonStyle} {
    width: intrinsic;
    ${BackgroundFactory({ bgColor: 'grayscale.40' })}
  }

  & + ${IconButtonStyle}, & + ${IconStyle} {
    color: var(--icon-color);
    z-index: 100;
    position: absolute;
    align-self: center;
    right: 1em;

    & > g {
      fill: var(--icon-color);
    }
  }
`;

export const InputStyle = _styled('input')<InputStyleProps>`
  -webkit-appearance: none;
  position: relative;
  display: block;

  width: 100%;

  outline: none;
  transition: ${({ theme }) => theme.animation.transitions.short};

  ${inputVariantStyle}

  ${inputIconStyle};

  ${invertIconPosition};

  ${inputDisabledStyle};

  ${inputPlaceholderStyle};

  &[type='date']::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    opacity: 0;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${SizeFactory}
  ${SpacingFactory({ px: 'small' })}
  ${FontFactory({ lineHeight: 'tight' })}
  ${BackgroundFactory({ bgColor: 'grayscale.0' })}
  ${BorderFactory({
    borderWidth: 'thin',
    borderStyle: 'solid',
  })}
`;

export const WrapperInputStyle = styled(BaseContainer)<InputInterface>(({ theme, variant }) => {
  let color = theme.colors.primary;

  if (variant === 'error') {
    color = theme.colors.danger;
  } else if (variant === 'success') {
    color = theme.colors.success;
  }

  const { base, dark } = color;

  return {
    display: 'flex',
    '--base-color': base,
    '--dark-color': dark,
    '--disabled-bg': theme.colors.neutral['10'],
    '--disabled-color': theme.colors.neutral['50'],
    '--icon-color': variant === 'default' ? theme.colors.neutral['100'] : base,
    '--border-color': variant === 'default' ? theme.colors.neutral['40'] : base,
  };
});

WrapperInputStyle.displayName = 'input';
