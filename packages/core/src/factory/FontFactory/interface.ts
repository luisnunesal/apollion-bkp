import { FontThemeInterface } from '../../themes/Font';
import { WithTheme } from '../../themes/ThemeProvider/interface';

export type WordBreakType = 'normal' | 'words' | 'all';

export type FontFactoryProps = Partial<
  {
    [K in keyof FontThemeInterface]: keyof FontThemeInterface[K];
  } & {
    textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
    textDecoration: 'none' | 'overline' | 'underline' | 'line-through';
    whiteSpace: 'normal' | 'pre' | 'nowrap' | 'pre-wrap' | 'pre-line' | 'break-spaces';
    wordBreak: WordBreakType;
  }
>;

export type FontThemePropsType = WithTheme<FontFactoryProps>;
