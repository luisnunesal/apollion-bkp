import { WithTheme } from '../../themes/ThemeProvider/interface';
import { TextInterface } from '../Typography/interface';

export type HeadlineVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadlineVariantStyleProps = Record<
  HeadlineVariant,
  TextInterface & {
    mobile: TextInterface;
  }
>;

export interface HeadlineInterface extends TextInterface {
  variant?: HeadlineVariant;
  text?: string;
}

export interface HeadlineComponentInterface extends HeadlineInterface {
  children?: React.ReactNode;
}

export type HeadlineStyleProps = WithTheme<HeadlineInterface>;
