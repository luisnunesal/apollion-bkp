import { WithTheme } from '../../themes/ThemeProvider/interface';

export type ColorFactoryProps = {
  color?: string;
  contrast?: string;
};

export type ColorThemePropsType = WithTheme<ColorFactoryProps>;
