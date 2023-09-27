import { CSSObject } from 'styled-components';

import { FontFactoryProps, FontThemePropsType, WordBreakType } from './interface';

export const fontKeys: Array<keyof FontFactoryProps> = [
  'textAlign',
  'whiteSpace',
  'textDecoration',
  'fontSize',
  'fontWeight',
  'fontFamily',
  'letterSpacing',
  'lineHeight',
  'fontStyle',
  'textTransform',
  'wordBreak',
];

const wordBreakMap: Record<WordBreakType, CSSObject> = {
  all: {
    wordBreak: 'break-all',
  },
  normal: {
    overflowWrap: 'normal',
    wordBreak: 'normal',
  },
  words: {
    overflowWrap: 'break-word',
  },
};

export const FontFactory =
  (customProps: FontFactoryProps) =>
  (contextProps: FontThemePropsType): CSSObject => {
    const {
      theme,
      fontFamily,
      fontSize,
      fontStyle,
      fontWeight,
      letterSpacing,
      lineHeight,
      textTransform,
      textDecoration,
      whiteSpace,
      wordBreak,
      textAlign,
    } = { ...customProps, ...contextProps };

    return {
      textAlign,
      whiteSpace,
      textDecoration,
      fontSize: fontSize && theme.font.fontSize[fontSize],
      fontWeight: fontWeight && theme.font.fontWeight[fontWeight],
      fontFamily: fontFamily && theme.font.fontFamily[fontFamily],
      letterSpacing: letterSpacing && theme.font.letterSpacing[letterSpacing],
      lineHeight: lineHeight && theme.font.lineHeight[lineHeight],
      fontStyle: fontStyle && theme.font.fontStyle.normal,
      textTransform: (textTransform && theme.font.textTransform[textTransform]) as React.CSSProperties['textTransform'],
      ...(wordBreak && wordBreakMap[wordBreak]),
    };
  };
