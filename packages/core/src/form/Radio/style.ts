import styled, { css } from 'styled-components';

import { RadioStyleProps } from './interface';

import { BaseContainer, BaseContainerProps } from '../../containers';
import { Theme } from '../../themes/ThemeProvider/interface';

export const RadioInputStyle = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  z-index: 1;
  opacity: 0;
`;

RadioInputStyle.displayName = 'input';

export const RadioStyle = styled(BaseContainer).attrs<BaseContainerProps>((props) => ({
  borderRadius: 'md',
  borderWidth: 'regular',
  borderStyle: 'solid',
  borderColor: 'information',
  deep: -1,
  ...props,
}))`
  --size: 20px;
  --checked-size: calc(var(--size) * 0.5);

  width: var(--size);
  height: var(--size);
  flex-shrink: 0;

  margin-right: ${({ theme }) => theme.spacing('small')};

  &::before {
    content: '';
    border-radius: 50%;
    display: inline-block;
    width: var(--checked-size);
    height: var(--checked-size);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    opacity: 0;
  }
`;

function inputVariantStyle({ variant, theme }: RadioStyleProps) {
  let color = theme.colors.information;

  if (variant === 'success') {
    color = theme.colors.success;
  }
  if (variant === 'error') {
    color = theme.colors.danger;
  }

  return css`
    color: ${color.dark};

    & > ${RadioStyle} {
      border: 2px solid ${color.dark};

      &::before {
        background: ${color.base};
      }
    }

    &:hover > ${RadioStyle}, &:focus > ${RadioStyle} {
      border-color: ${color.action};
    }

    & > ${RadioInputStyle}:checked ~ ${RadioStyle} {
      border-color: ${color.base};
      box-shadow: ${theme.depth('level-zero')};
    }
  `;
}

function getDisabledStyle(theme: Theme) {
  return css`
    color: ${theme.colors.neutral['50']};

    & > ${RadioInputStyle}:disabled {
      cursor: default;

      & ~ ${RadioStyle} {
        background-color: ${theme.colors.neutral['10']};
        border-color: ${theme.colors.neutral['10']};

        &::before {
          background: ${theme.colors.neutral['50']};
        }
      }
    }
  `;
}

/**
 * I can't extend TextStyle here because "variant" prop conflicts
 * between CheckboxInterface & TypographyInterface
 */
export const RadioContainerStyle = styled.label<RadioStyleProps>`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(0, 8, 'medium', 0)};

  ${inputVariantStyle}
  ${({ theme, disabled }) => disabled && getDisabledStyle(theme)}

  /* Shows the checkmark when checked */
  &  ${RadioInputStyle}:checked ~ ${RadioStyle}::before {
    opacity: 1;
  }
`;
