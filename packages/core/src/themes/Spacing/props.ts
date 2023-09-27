import { SpacingInput, SpacingInterface, SpacingThemeInterface } from './interface';

export const defaultInputSpacing: SpacingInput = {
  multiplier: 0.25,
  alias: {
    zero: 0,
    micro: 1, // 0.25
    xs: 2, // 0.5
    small: 3, // 0.75
    medium: 4, // 1.0
    large: 7, // 1.75
    xl: 11, // 2.75
    xxl: 18, // 4.5
    giant: 29, // 7.25
  },
};

export function createSpacing({ multiplier = 0.25, alias }: SpacingInput): SpacingThemeInterface {
  /**
   * Must be a number or one of defined types:
   * zero      0 rem
   *
   * micro     0.25 rem
   *
   * xs        0.5  rem
   *
   * small     0.75 rem
   *
   * medium    1.0  rem
   *
   * large     1.75 rem
   *
   * xl        2.75 rem
   *
   * xxl:      4.5  rem
   *
   * giant     7.25 rem
   *
   * ```ts
   * theme.spacing('medium') // '1rem'
   * theme.spacing('medium', 'xs')  // '1rem 0.5rem'
   * theme.spacing(10) // '2.5rem'
   * ```
   */
  return (...values: SpacingInterface[]) =>
    values
      .map((value) => {
        const spacingValue = typeof value === 'string' ? alias[value] : value;
        return `${multiplier * spacingValue}rem`;
      })
      .join(' ');
}
