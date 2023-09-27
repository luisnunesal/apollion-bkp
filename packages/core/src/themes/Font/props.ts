import { FontThemeInterface } from './interface';

export const defaultInputFont: FontThemeInterface = {
  fontFamily: {
    main: "'Mulish', sans-serif;",
    code: 'Consolas, monospace, serif',
  },
  fontSize: {
    nano: 10,
    micro: 12,
    xs: 14,
    small: 16,
    medium: 20,
    large: 24,
    xl: 28,
    xxl: 36,
    giant: 44,
    colossal: 52,
    gargantua: 60,
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 600,
    stronger: 900,
  },
  lineHeight: {
    tight: 1,
    close: 1.2,
    regular: 1.4,
    wild: 1.8,
  },
  letterSpacing: {
    tight: '-0.045em',
    regular: 0,
    wild: '0.05em',
  },
  textTransform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    captalyze: 'capitalize',
    normal: 'none',
  },
  fontStyle: {
    italic: 'italic',
    normal: 'normal',
  },
};
