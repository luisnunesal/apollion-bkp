import { CSSObject } from 'styled-components';

import { DeepFactoryProps, DeepThemePropsType, DeepThemeType } from './interface';

import { HextoRgb } from '../../themes/Colors';

export const deepKeys: Array<keyof DeepFactoryProps> = ['deep', 'deepColor', 'noShadow'];

function getBoxShadow({
  position = '',
  distance = 0,
  proximity = 0,
  color = '',
  intensity = 0,
}: DeepThemeType): CSSObject {
  return {
    boxShadow: `${position} 0px 0px ${distance}px ${proximity}px rgba(${color}, ${intensity})`.trim(),
  };
}

export const DeepFactory = (customProps: DeepFactoryProps) => (contextProps: DeepThemePropsType) => {
  const { theme, deep, deepColor, noShadow } = { ...customProps, ...contextProps };

  if (deep === undefined || noShadow) return null;

  const { deep: depth } = theme;

  let color = depth.color.regular;

  if (deepColor) {
    const themeColor = theme.colors(deepColor);
    color = typeof themeColor === 'string' ? HextoRgb(themeColor) : color;
  }

  const defaultConfig = {
    color,
    position: depth.position.outter,
    distance: depth.distance.flat,
    proximity: depth.proximity.flat,
    intensity: depth.intensity.medium,
  };

  switch (deep) {
    case -1:
      return getBoxShadow({
        ...defaultConfig,
        position: depth.position.internal,
        distance: depth.distance.micro,
        proximity: depth.proximity.flat,
        intensity: depth.intensity.high,
      });

    case 1:
      return getBoxShadow({
        ...defaultConfig,
        proximity: depth.proximity.flat,
        distance: depth.distance.micro,
      });

    case 2:
      return getBoxShadow({
        ...defaultConfig,
        proximity: depth.proximity.close,
        distance: depth.distance.xs,
      });

    case 3:
      return getBoxShadow({
        ...defaultConfig,
        distance: depth.distance.sm,
        proximity: depth.proximity.medium,
      });

    case 4:
      return getBoxShadow({
        ...defaultConfig,
        distance: depth.distance.md,
        proximity: depth.proximity.close,
      });

    case 5:
      return getBoxShadow({
        ...defaultConfig,
        distance: depth.distance.lg,
        proximity: depth.proximity.close,
      });

    case 6:
      return getBoxShadow({
        ...defaultConfig,
        distance: depth.distance.xl,
        proximity: depth.proximity.close,
      });

    // level-0
    default:
      return getBoxShadow(defaultConfig);
  }
};
