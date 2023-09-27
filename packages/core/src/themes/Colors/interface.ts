export interface ColorPalleteInterface {
  base: string;
  dark: string;
  action: string;
  light: string;
  active: string;
}

export type AcceptColorType = ColorPalleteInterface | string;

// ----- //

interface ContrastColorsInterface {
  baseDark?: string;
  baseLight?: string;
}

interface DeepColorsInterface {
  deepDark?: string;
  deepLight?: string;
}

interface BrandColorsInterface<T> {
  main?: T;
  opposite?: T;
  complementary?: T;
}

interface MainColorsInterface<T> {
  primary?: T;
  secondary?: T;
  tertiary?: T;
}

interface ActionColorsInterface<T> {
  success?: T;
  information?: T;
  warning?: T;
  danger?: T;
}

export type ColorsInput<T = string> = ContrastColorsInterface &
  DeepColorsInterface &
  BrandColorsInterface<T> &
  ActionColorsInterface<T> &
  MainColorsInterface<T>;

// ----- //

type ColorVariantNamesType = 'dark' | 'action' | 'light' | 'active';

type FunctionColorsType = 'primary' | 'secondary' | 'tertiary';
type FeedbackColorsType = 'success' | 'information' | 'warning' | 'danger';

export type VariantColorsType = FunctionColorsType | FeedbackColorsType;

type BrandColorsType = 'main' | 'opposite' | 'complementary';
type ContrastColorsType = 'baseDark' | 'baseLight' | 'deepDark' | 'deepLight';

export type GrayscaleColorsType = 0 | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
export type NeutralColorsType = GrayscaleColorsType | 110 | 120 | 130 | 140 | 150 | 160 | 170 | 180;

type ColorWithVariantType<
  C extends VariantColorsType = VariantColorsType,
  V extends ColorVariantNamesType = ColorVariantNamesType,
> = `${C}` | `${C}.${V}`;
type GrayscaleColorType<S extends GrayscaleColorsType = GrayscaleColorsType> = `grayscale.${S}`;
type NeutralColorType<S extends NeutralColorsType = NeutralColorsType> = `neutral.${S}`;

export type BgColorsTypes =
  | ColorWithVariantType
  | GrayscaleColorType
  | NeutralColorType
  | BrandColorsType
  | ContrastColorsType;

export type ColorsType = BgColorsTypes | null;

export type ThemeColorsType<T = ColorPalleteInterface> = BrandColorsInterface<T> &
  MainColorsInterface<T> &
  ActionColorsInterface<T> &
  ContrastColorsInterface &
  DeepColorsInterface & {
    neutral?: Record<NeutralColorsType, string>;
    grayscale?: Record<GrayscaleColorsType, string>;
  };

export type ColorsThemeInterface = ThemeColorsType & {
  (color: string): string;

  getColor?: (color: AcceptColorType, prop?: keyof ColorPalleteInterface) => string;
  getContrastColor?: (color: AcceptColorType, colorbase?: ColorsType) => string;
};
