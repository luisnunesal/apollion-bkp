export type BorderInput = {
  borderRadius: {
    straight: string;
    micro: string;
    xs: string;
    sm: string;
    md: string;
    large: string;
    circular: string;
  };
  borderWidth: {
    none: string;
    thin: string;
    regular: string;
    great: string;
    bold: string;
  };
  borderStyle: {
    solid: string;
    dotted: string;
    dashed: string;
  };
};

export type BorderThemeType = Partial<
  {
    [K in keyof BorderInput]: keyof BorderInput[K];
  }
>;
