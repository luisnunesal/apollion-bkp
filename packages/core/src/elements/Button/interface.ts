import { BaseContainerProps } from '../../containers/Base';
import { DefaultFlexInterface } from '../../containers/Flex';
import { Theme } from '../../themes/ThemeProvider/interface';

type ButtonColors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger';
type ButtonSizes = 'extraSmall' | 'small' | 'medium' | 'large';
type ButtonVariants = 'contained' | 'outlined' | 'linked';

type NativeButtonProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'color'>;

export type TypographyButtonVariantsInterface = 'btnTextExtraSmall' | 'btnTextDefault' | 'btnTextLarge';

export interface ButtonComponentProps {
  color?: ButtonColors;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  text?: string;
  isLoading?: boolean; // loading can't be used because it's a native attribute
  fullWidth?: boolean;

  area?: DefaultFlexInterface['area'];
  justifySelf?: DefaultFlexInterface['justifySelf'];
  alignSelf?: DefaultFlexInterface['alignSelf'];
}

export interface ButtonInterface extends NativeButtonProps, ButtonComponentProps, Omit<BaseContainerProps, 'color'> {}

export type ButtonStyleProps = {
  theme: Theme;
} & ButtonInterface;
