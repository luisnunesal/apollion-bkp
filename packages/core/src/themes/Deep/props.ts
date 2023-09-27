import { DeepThemeInterface } from './interface';

import { ColorsThemeInterface, HextoRgb } from '../Colors';

export function createDeepTheme(themeColors: ColorsThemeInterface): DeepThemeInterface {
  return {
    position: {
      outter: '',
      internal: 'inset',
    },
    distance: {
      flat: 0,
      micro: 4,
      xs: 8,
      sm: 16,
      md: 28,
      lg: 44,
      xl: 72,
    },
    intensity: {
      low: 0.05,
      medium: 0.15,
      high: 0.3,
    },
    proximity: {
      flat: 0,
      close: -2,
      medium: -4,
      distant: -8,
    },
    color: {
      deep: HextoRgb(themeColors.baseDark),
      regular: HextoRgb(themeColors.grayscale['50']),
      smooth: HextoRgb(themeColors.grayscale['30']),
      light: HextoRgb(themeColors.baseLight),
      primary: HextoRgb(themeColors.primary.base),
      success: HextoRgb(themeColors.success.base),
      warning: HextoRgb(themeColors.warning.base),
      danger: HextoRgb(themeColors.danger.base),
    },
  };
}
