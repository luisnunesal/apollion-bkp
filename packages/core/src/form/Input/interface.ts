import { BorderFactoryProps, FontFactoryProps, SizeFactoryProps, SpacingFactoryProps } from '../../factory';
import { Theme } from '../../themes/ThemeProvider/interface';
import { FieldVariants } from '../Field/interface';

type NativeInputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>;

export interface DefaultInputInterface extends NativeInputProps {
  variant?: FieldVariants;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export type InputSize = 'expansive' | 'medium' | 'compact' | 'micro';

export interface InputInterface extends DefaultInputInterface {
  size?: InputSize;
  iconPosition?: 'right' | 'left';
  icon?: React.Component | any;
  clearable?: boolean;
  reset?: () => void;
}

export type InputTokenProps = { color?: string } & FontFactoryProps &
  SpacingFactoryProps &
  BorderFactoryProps &
  SizeFactoryProps;

export type InputStyleProps = {
  theme: Theme;
} & InputInterface &
  InputTokenProps;
