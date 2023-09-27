import { WithTheme } from '../../themes/ThemeProvider/interface';
import { TextInterface } from '../Typography/interface';

export type DisplayVariant = 'h1' | 'h2' | 'h3' | 'h4';

export type DisplayVariantStyleProps = Record<
  DisplayVariant,
  TextInterface & {
    mobile: TextInterface;
  }
>;

export interface DisplayInterface extends TextInterface {
  variant?: DisplayVariant;
  text?: string;
}

export interface DisplayComponentInterface extends DisplayInterface {
  children?: React.ReactNode;
}

export type DisplayStyleProps = WithTheme<DisplayInterface>;
