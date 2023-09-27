export type DeepThemeInterface = {
  position: {
    outter: string;
    internal: string;
  };
  distance: {
    flat: number;
    micro: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  intensity: {
    low: number;
    medium: number;
    high: number;
  };
  proximity: {
    flat: number;
    close: number;
    medium: number;
    distant: number;
  };
  color: {
    deep: string;
    regular: string;
    smooth: string;
    light: string;
    primary: string;
    success: string;
    warning: string;
    danger: string;
  };
};
