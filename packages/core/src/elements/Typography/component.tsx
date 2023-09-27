import React, { forwardRef } from 'react';

import { TypographyInterface } from './interface';
import { TypoVariantsProps } from './props';
import { TextStyle } from './style';

import { Display } from '../Display';
import { Headline } from '../Headline';

export const Text = forwardRef<HTMLElement, TypographyInterface>(({ text, children, variant, ...props }, ref) => {
  const component = TypoVariantsProps[variant].tag || 'span';
  return (
    <TextStyle as={component} ref={ref} variant={variant} {...props}>
      {text || children}
    </TextStyle>
  );
}) as React.ForwardRefExoticComponent<TypographyInterface & React.RefAttributes<HTMLElement>> & {
  Display: typeof Display;
  Headline: typeof Headline;
};

Text.defaultProps = {
  variant: 'default',
  color: 'neutral.180',
  fontFamily: 'main',
  letterSpacing: 'regular',
  lineHeight: 'regular',
};

Text.Display = Display;
Text.Headline = Headline;

export const Typography = Text;
