import { BorderThemeType } from '../../themes/Border';
import { BgColorsTypes } from '../../themes/Colors';
import { WithTheme } from '../../themes/ThemeProvider/interface';

export type BorderRoundPropsType =
  | 'round'
  | 'roundBottom'
  | 'roundTop'
  | 'roundRight'
  | 'roundLeft'
  | 'roundTopLeft'
  | 'roundTopRight'
  | 'roundBottomLeft'
  | 'roundBottomRight'
  | 'roundTangentRight'
  | 'roundTangentLeft'
  | 'sharpTopLeft'
  | 'sharpTopRight'
  | 'sharpBottomRight'
  | 'sharpBottomLeft';

export type BorderRoundProps = Partial<Record<BorderRoundPropsType, BorderThemeType['borderRadius'] | number>>;

export type BorderFactoryProps = {
  borderColor?: BgColorsTypes;
  borderPosition?: 'right' | 'left' | 'top' | 'bottom' | 'vertical' | 'horizontal';
  square?: boolean;
} & BorderThemeType &
  BorderRoundProps;

export type BorderThemePropsType = WithTheme<BorderFactoryProps>;
