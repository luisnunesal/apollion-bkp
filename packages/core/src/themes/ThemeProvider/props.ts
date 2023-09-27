import deepmerge from 'deepmerge';

import { Theme, ThemeInputsInterface } from './interface';

import { $window } from '../../entities';
import { LOGGER } from '../../utils';
import { animation } from '../Animation';
import { defaultInputBorder } from '../Border/props';
import { createBreakpoints, defaultInputBreakpoints } from '../Breakpoints/props';
import { createColors, defaultInputColors } from '../Colors/props';
import { createDeepTheme } from '../Deep/props';
import { createDeth } from '../Depth/props';
import { defaultInputFont } from '../Font/props';
import { createSpacing, defaultInputSpacing } from '../Spacing/props';

export function createTheme(themeInput: ThemeInputsInterface = {}): Theme {
  const { colors, breakpoints, spacing, border, font } = deepmerge(
    {
      colors: defaultInputColors,
      spacing: defaultInputSpacing,
      font: defaultInputFont,
      border: defaultInputBorder,
      breakpoints: defaultInputBreakpoints,
    },
    themeInput,
  );

  const themeColors = createColors(colors);

  return {
    font,
    border,
    animation,
    colors: themeColors,
    breakpoints: createBreakpoints(breakpoints),
    spacing: createSpacing(spacing),
    depth: createDeth(themeColors),
    deep: createDeepTheme(themeColors),
  };
}

if ($window && process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  ($window as any).theme = createTheme();

  LOGGER.log(`
       d88888888888b.  .d88888b. 888     888     8888888 .d88888b. 888b    888
      d88888888   Y88bd88P" "Y88b888     888       888  d88P" "Y88b8888b   888
     d88P888888    888888     888888     888       888  888     88888888b  888
    d88P 888888   d88P888     888888     888       888  888     888888Y88b 888
   d88P  8888888888P" 888     888888     888       888  888     888888 Y88b888
  d88P   888888       888     888888     888       888  888     888888  Y88888
 d8888888888888       Y88b. .d88P888     888       888  Y88b. .d88P888   Y8888
d88P     888888        "Y88888P" 88888888888888888888888 "Y88888P" 888    Y888

Tip: you can access the documentation "theme" object directly in the console.
`);
}
