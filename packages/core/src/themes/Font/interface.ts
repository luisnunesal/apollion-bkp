export type FontThemeInterface = {
  fontFamily: {
    main: string;
    code: string;
  };
  fontSize: {
    nano: number;
    micro: number;
    xs: number;
    small: number;
    medium: number;
    large: number;
    xl: number;
    xxl: number;
    giant: number;
    colossal: number;
    gargantua: number;
  };
  fontWeight: {
    light: number;
    regular: number;
    bold: number;
    stronger: number;
  };
  lineHeight: {
    tight: number;
    close: number;
    regular: number;
    wild: number;
  };
  letterSpacing: {
    tight: number | string;
    regular: number | string;
    wild: number | string;
  };
  textTransform: {
    uppercase: string;
    lowercase: string;
    captalyze: string;
    normal: string;
  };
  fontStyle: {
    italic: string;
    normal: string;
  };
};

export type FontInput = FontThemeInterface;
