import styled, { css } from 'styled-components';

import { CheckboxStyleProps } from './interface';

import { Flex, FlexPropsInterface } from '../../containers/Flex';
import { IconStyle } from '../../elements/Icon/style';
import { ColorFactory, styled as _styled } from '../../factory';

export const CheckboxInputStyle = _styled('input')`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
`;

export const CheckboxStyle = styled(Flex).attrs<unknown, FlexPropsInterface>((props) => ({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'micro',
  borderWidth: 'thin',
  boderStyle: 'solid',
  borderColor: 'information',
  deep: -1,
  mr: 'small',
  ...props,
}))`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: ${({ theme }) => theme.animation.transitions.short};
`;

function checkboxVariantStyle({ variant, theme }: CheckboxStyleProps) {
  let color = theme.colors.information;

  if (variant === 'success') {
    color = theme.colors.success;
  }
  if (variant === 'error') {
    color = theme.colors.danger;
  }

  return css`
    color: ${color.dark};

    & > ${CheckboxStyle} {
      border: 1px solid ${color.dark};
    }

    &:hover > ${CheckboxStyle}, &:focus > ${CheckboxStyle} {
      border-color: ${color.action};
      box-shadow: ${theme.depth('level-zero')};
    }

    & > ${CheckboxInputStyle}:checked ~ ${CheckboxStyle} {
      border-color: ${color.base};
      background-color: ${color.base};
      box-shadow: ${theme.depth('level-zero')};
    }
  `;
}

function disabledStyle({ theme, disabled }: CheckboxStyleProps) {
  return (
    disabled &&
    css`
      color: ${theme.colors.neutral['50']};

      & > ${CheckboxInputStyle}:disabled {
        cursor: default;

        & ~ ${CheckboxStyle} {
          background-color: ${theme.colors.neutral['10']};
          border-color: ${theme.colors.neutral['10']};
          box-shadow: none;

          & > ${IconStyle} {
            ${ColorFactory({ color: 'neutral.50' })}
          }
        }
      }
    `
  );
}

/**
 * I can't extend TextStyle here because "variant" prop conflicts
 * between CheckboxInterface & TypographyInterface
 */
export const CheckboxContainerStyle = _styled('label')<CheckboxStyleProps>`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: flex-start;
  margin: ${({ theme }) => theme.spacing(0, 8, 'medium', 0)};
  transition: ${({ theme }) => theme.animation.transitions.short};

  & > ${CheckboxInputStyle} ~ ${CheckboxStyle} > ${IconStyle} {
    ${ColorFactory({ color: 'neutral.0' })}
    opacity: 0;
  }

  /* Shows the checkmark when checked */
  & > ${CheckboxInputStyle}:checked ~ ${CheckboxStyle} > ${IconStyle} {
    opacity: 1;
  }

  ${checkboxVariantStyle}
  ${disabledStyle}
`;
