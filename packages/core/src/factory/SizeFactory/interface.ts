import { WithTheme } from '../../themes/ThemeProvider/interface';

export interface SizeFactoryProps {
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
}

export type SizeThemeProps = WithTheme<SizeFactoryProps>;
