import styled, { css } from 'styled-components';

import { ButtonInterface, ButtonStyleProps } from './interface';

import { Flex } from '../../containers/Flex';
import { BorderFactory, FlexFactory, FontFactory, SpacingFactory } from '../../factory';
import { ColorPalleteInterface } from '../../themes/Colors/interface';
import { Theme } from '../../themes/ThemeProvider/interface';
import { SpinnerStyle } from '../Spinner';

export const buttonSize = ({ size }: ButtonStyleProps) => {
  switch (size) {
    case 'extraSmall':
      return [
        FontFactory({ textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'micro' }),
        SpacingFactory({ py: 'micro', px: 'medium' }),
        BorderFactory({ borderRadius: 'micro' }),
      ];
    case 'small':
      return [
        FontFactory({ fontWeight: 'bold', fontSize: 'small' }),
        SpacingFactory({ py: 'xs', px: 'medium' }),
        BorderFactory({ borderRadius: 'large' }),
      ];
    case 'large':
      return [
        FontFactory({ fontWeight: 'bold', fontSize: 'medium' }),
        SpacingFactory({ py: 'medium', px: 'xl' }),
        BorderFactory({ borderRadius: 'large' }),
      ];
    default:
      return [
        FontFactory({ fontWeight: 'bold', fontSize: 'small' }),
        SpacingFactory({ py: 'small', px: 'large' }),
        BorderFactory({ borderRadius: 'large' }),
      ];
  }
};

// ----- VARIANTS ----- //

const ButtonContained = (themeColor: ColorPalleteInterface, theme: Theme) => css`
  color: ${theme.colors.getContrastColor(themeColor.base)};
  background: ${themeColor.base};
  border-color: ${themeColor.base};
  box-shadow: ${(props) => props.theme.depth('level-two')};

  &:hover {
    color: ${theme.colors.getContrastColor(themeColor.action)};
    background: ${themeColor.action};
    border-color: ${themeColor.action};
    box-shadow: ${(props) => props.theme.depth('level-zero')};
  }

  &:focus {
    color: ${theme.colors.getContrastColor(themeColor.action)};
    background: ${themeColor.action};
    border-color: ${themeColor.active};

    &:hover {
      border-color: ${themeColor.action};
    }
  }

  &:active {
    &,
    &:hover,
    &:focus {
      color: ${theme.colors.getContrastColor(themeColor.active)};
      background: ${themeColor.active};
      border-color: ${themeColor.light};
    }
  }

  &:disabled {
    background: ${theme.colors.neutral['10']};
    border-color: ${theme.colors.neutral['10']};
    color: ${theme.colors.neutral['40']};
    box-shadow: ${(props) => props.theme.depth('level-zero')};
    cursor: default;
  }
`;

const ButtonOutlined = (themeColor: ColorPalleteInterface, theme: Theme) => css`
  background: transparent;
  color: ${themeColor.base};
  border-color: ${themeColor.base};

  &:hover {
    color: ${theme.colors.getContrastColor(themeColor.action)};
    background: ${themeColor.action};
    border-color: ${themeColor.action};
  }

  &:focus {
    color: ${theme.colors.getContrastColor(themeColor.action)};
    background: ${themeColor.action};
    border-color: ${themeColor.active};
    box-shadow: ${(props) => props.theme.depth('level-two')};

    &:hover {
      border-color: ${themeColor.action};
    }
  }

  &:active {
    &,
    &:hover,
    &:focus {
      background-color: transparent;
      color: ${themeColor.dark};
      border-color: ${themeColor.light};
      box-shadow: ${(props) => props.theme.depth('level-two')};
    }
  }

  &:disabled {
    color: ${theme.colors.getContrastColor(theme.colors.neutral['10'])};
    background: ${theme.colors.neutral['10']};
    border-color: ${theme.colors.neutral['10']};
    cursor: default;
  }
`;

const ButtonLinked = (themeColor: ColorPalleteInterface, theme: Theme) => css`
  background: transparent;
  color: ${themeColor.base};
  border-color: transparent;
  border-radius: none;

  &:hover {
    color: ${themeColor.action};
    text-decoration: underline;
  }

  &:focus {
    color: ${themeColor.base};
    text-decoration: underline;
  }

  &:active {
    color: ${themeColor.active};
    text-decoration: underline;
  }

  &:disabled {
    color: ${theme.colors.getContrastColor(theme.colors.neutral['10'])};
    text-decoration: none;
    cursor: default;
  }
`;

export const buttonVariant = ({ color, variant, theme }: ButtonStyleProps) => {
  const themeColor = theme.colors[color] as ColorPalleteInterface;

  switch (variant) {
    case 'outlined':
      return ButtonOutlined(themeColor, theme);
    case 'linked':
      return ButtonLinked(themeColor, theme);

    default:
      return ButtonContained(themeColor, theme);
  }
};

const isFullWidth = css<ButtonStyleProps>(({ fullWidth }) => ({
  width: fullWidth ? '100%' : 'fit-content',
}));

export const buttonBaseStyles = css`
  outline: 0;
  cursor: pointer;
  transition: ${({ theme }) => theme.animation.transitions.short};

  ${BorderFactory({ borderWidth: 'regular', borderStyle: 'solid' })}

  ${FlexFactory({
    gap: 'xs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  })}

  ${isFullWidth}
  ${buttonSize}
  ${buttonVariant}
`;

export const ButtonStyle = styled(Flex)<ButtonInterface>`
  ${buttonBaseStyles}

  /* Handle Loading Icon */
  ${SpinnerStyle} {
    width: 1em;
    height: 1em;
  }
`;
