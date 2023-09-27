import {
  getColor,
  getContrastColor,
  getOppositeColor,
  mountActionColors,
  mountBaseColors,
  mountGreyscaleColors,
  mountMainColors,
  mountNeutralColors,
} from './helpers';
import { ColorsInput, ColorsThemeInterface } from './interface';

import { getValue, memoize } from '../../utils';

export const defaultInputColors: ColorsInput = {
  // contrast Colors
  baseDark: '#26292E',
  baseLight: '#FCFCFC',

  // deep Colors
  deepDark: '#000',
  deepLight: '#FFF',

  // brand Colors
  main: '#003750',
  opposite: getOppositeColor('#003750'),
  complementary: '#F6BA20',

  // action Colors
  information: '#3399FF',
  success: '#2CB567',
  danger: '#E12712',
  warning: '#FFBB00',

  // main Colors
  primary: '#32AFDC',
  secondary: '#2D81AA',
  tertiary: '#2CE571',
};

export function createColors(inputColors: ColorsInput): ColorsThemeInterface {
  const colors = {
    baseDark: inputColors.baseDark,
    baseLight: inputColors.baseLight,
    deepDark: inputColors.deepDark,
    deepLight: inputColors.deepLight,
    neutral: mountNeutralColors(inputColors),
    grayscale: mountGreyscaleColors(inputColors),
    ...mountBaseColors(inputColors),
    ...mountActionColors(inputColors),
    ...mountMainColors(inputColors),
  };

  const getThemeColor = memoize(getValue);

  return Object.assign((c: string) => getThemeColor(c, colors, 'base'), colors, {
    getColor,
    getContrastColor,
  });
}
