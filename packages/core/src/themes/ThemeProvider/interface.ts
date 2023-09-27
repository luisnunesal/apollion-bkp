import { AnimationThemeInterface } from '../Animation/interface';
import { BorderInput } from '../Border';
import { BreakpointInput, BreakpointsInterface } from '../Breakpoints';
import { ColorsInput, ColorsThemeInterface } from '../Colors';
import { DeepThemeInterface } from '../Deep';
import { DepthThemeInterface } from '../Depth';
import { FontInput, FontThemeInterface } from '../Font';
import { SpacingInput, SpacingThemeInterface } from '../Spacing';

export interface ThemeInputsInterface {
  breakpoints?: BreakpointInput;
  spacing?: SpacingInput;
  colors?: ColorsInput;
  font?: FontInput;
  border?: BorderInput;
}

export type Theme = {
  border: BorderInput;
  font: FontThemeInterface;
  colors: ColorsThemeInterface;
  breakpoints: BreakpointsInterface;
  spacing: SpacingThemeInterface;
  depth: DepthThemeInterface;
  deep: DeepThemeInterface;
  animation: AnimationThemeInterface;
};

export type ThemeMode = 'light' | 'dark';

export interface ApollionProviderInterface {
  theme?: Theme;
  lightTheme?: Theme;
  darkTheme?: Theme;
  useSystemPreference?: boolean;
}

export interface ApollionThemeContext {
  theme: Theme;
  themeMode: ThemeMode;
  toggleTheme: (mode?: ThemeMode) => void;
}

export type WithTheme<P> = P & {
  theme: Theme;
};
