import { SpacingInterface } from '../../themes/Spacing';
import { WithTheme } from '../../themes/ThemeProvider/interface';

export type SpacingKeysTypes =
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py';

export type SpacingFactoryProps = Partial<Record<SpacingKeysTypes, SpacingInterface>>;

export type SpacingThemeProps = WithTheme<SpacingFactoryProps>;
