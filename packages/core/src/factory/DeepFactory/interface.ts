import { DeepThemeInterface } from '../../themes/Deep/interface';
import { WithTheme } from '../../themes/ThemeProvider/interface';

export type DeepThemeType = Record<keyof DeepThemeInterface, string | number>;

export type DeepStylesTypes = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DeepFactoryProps = {
  deep?: DeepStylesTypes;
  deepColor?: string;
  noShadow?: boolean;
};

export type DeepThemePropsType = WithTheme<DeepFactoryProps>;
