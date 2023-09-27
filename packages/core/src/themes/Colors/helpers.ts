import Color from 'color';

import {
  AcceptColorType,
  ColorPalleteInterface,
  ColorsInput,
  ColorsType,
  GrayscaleColorsType,
  NeutralColorsType,
} from './interface';

import { memoize } from '../../utils';

export const HextoRgb = memoize((color: string) => Color(color).array().join(','));

export function getOppositeColor(color: AcceptColorType) {
  return Color(color).rotate(180).hex();
}

/**
 * Use this to avoid crash errors
 * when get prop of 'null' errorlog
 */
export function getColor(color: AcceptColorType, prop?: keyof ColorPalleteInterface): string {
  if (!color) {
    return 'black';
  }

  if (typeof color === 'string') {
    return color;
  }

  return color[prop || 'base'];
}

/**
 * Apply directives from W3C for
 * constrast and luminosity
 */
export const getContrastColor = memoize((color: AcceptColorType, colorbase?: ColorsType): string => {
  const chosenColor = getColor(color);
  const minimumAllowedForContrast = 4.5;
  const minimumAllowedForLuminosity = 0.45;

  const baseLight = Color(colorbase || 'white');
  const baseColor = Color(chosenColor);
  const darkColor = baseColor.darken(0.6);
  const luminosity: number = baseColor.luminosity();
  const contrast: number = darkColor.contrast(baseColor);
  const hasContrast: boolean = contrast >= minimumAllowedForContrast;
  const isBright: boolean = luminosity < minimumAllowedForLuminosity;

  if (!isBright) {
    return darkColor.hex();
  }

  return hasContrast ? darkColor.hex() : baseLight.hex();
});

/**
 * Follows our ColorPalleteInterface. All colors provided by project
 * will preserve its .hex() as 'base' and calculate other 3 values
 * from it
 */
export function mountSingleColor(color: AcceptColorType, colors: ColorsInput): ColorPalleteInterface {
  const baseColor = Color(color);
  const lighten = Color(colors.deepLight);
  const darken = Color(colors.deepDark);

  return {
    base: baseColor.hex(),
    dark: baseColor.mix(darken, 0.6).hex(),
    action: baseColor.mix(darken, 0.2).hex(),
    active: baseColor.mix(lighten, 0.6).hex(),
    light: baseColor.mix(lighten, 0.9).hex(),
  };
}

export function mountGreyscaleColors(colors: ColorsInput): Record<GrayscaleColorsType, string> {
  const lighter = Color(colors.deepLight);
  const darken = Color(colors.deepDark);

  return {
    '0': lighter.hex(),
    '5': lighter.mix(darken, 0.05).hex(),
    '10': lighter.mix(darken, 0.1).hex(),
    '20': lighter.mix(darken, 0.2).hex(),
    '30': lighter.mix(darken, 0.3).hex(),
    '40': lighter.mix(darken, 0.4).hex(),
    '50': lighter.mix(darken, 0.5).hex(),
    '60': lighter.mix(darken, 0.6).hex(),
    '70': lighter.mix(darken, 0.7).hex(),
    '80': lighter.mix(darken, 0.8).hex(),
    '90': lighter.mix(darken, 0.9).hex(),
    '100': lighter.mix(darken, 1).hex(),
  };
}

export function mountNeutralColors(colors: ColorsInput): Record<NeutralColorsType, string> {
  const lighter = Color(colors.deepLight);
  const darker = Color(colors.deepDark);
  const primary = Color(colors.primary);

  const interpolation = (n: number): number => (1 / 17) * (n - 1);

  const n170 = primary.mix(darker, 0.5);

  return {
    '0': n170.mix(lighter, interpolation(18)).hex(),
    '5': n170.mix(lighter, interpolation(17.5)).hex(),
    '10': n170.mix(lighter, interpolation(17)).hex(),
    '20': n170.mix(lighter, interpolation(16)).hex(),
    '30': n170.mix(lighter, interpolation(15)).hex(),
    '40': n170.mix(lighter, interpolation(14)).hex(),
    '50': n170.mix(lighter, interpolation(13)).hex(),
    '60': n170.mix(lighter, interpolation(12)).hex(),
    '70': n170.mix(lighter, interpolation(11)).hex(),
    '80': n170.mix(lighter, interpolation(10)).hex(),
    '90': n170.mix(lighter, interpolation(9)).hex(),
    '100': n170.mix(lighter, interpolation(8)).hex(),
    '110': n170.mix(lighter, interpolation(7)).hex(),
    '120': n170.mix(lighter, interpolation(6)).hex(),
    '130': n170.mix(lighter, interpolation(5)).hex(),
    '140': n170.mix(lighter, interpolation(4)).hex(),
    '150': n170.mix(lighter, interpolation(3)).hex(),
    '160': n170.mix(lighter, interpolation(2)).hex(),
    '170': n170.hex(),
    '180': n170.mix(darker, 0.25).hex(),
  };
}

// BASE
export function mountBaseColors(colors: ColorsInput) {
  return {
    main: mountSingleColor(colors.main, colors),
    opposite: mountSingleColor(colors.opposite, colors),
    complementary: mountSingleColor(colors.complementary, colors),
  };
}

// ACTION
export function mountActionColors(colors: ColorsInput) {
  return {
    danger: mountSingleColor(colors.danger, colors),
    information: mountSingleColor(colors.information, colors),
    success: mountSingleColor(colors.success, colors),
    warning: mountSingleColor(colors.warning, colors),
  };
}

// MAIN
export function mountMainColors(colors: ColorsInput) {
  return {
    primary: mountSingleColor(colors.primary, colors),
    secondary: mountSingleColor(colors.secondary, colors),
    tertiary: mountSingleColor(colors.tertiary, colors),
  };
}
