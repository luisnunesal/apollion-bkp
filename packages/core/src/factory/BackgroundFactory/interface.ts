import { BgColorsTypes } from '../../themes/Colors';
import { WithTheme } from '../../themes/ThemeProvider/interface';

export type BackgroundFactoryProps = {
  bgColor?: BgColorsTypes;
};

export type BackgroundThemePropsType = WithTheme<BackgroundFactoryProps>;
