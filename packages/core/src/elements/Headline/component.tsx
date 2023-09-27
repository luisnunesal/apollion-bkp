import React, { forwardRef } from 'react';

import { HeadlineComponentInterface } from './interface';
import { HeadingStyle } from './style';

export const Headline = forwardRef<HTMLHeadingElement, HeadlineComponentInterface>(
  ({ variant = 'h2', children, text, ...props }, ref) => {
    const content = children ?? text;

    return (
      <HeadingStyle as={variant} ref={ref} variant={variant} {...props}>
        {content}
      </HeadingStyle>
    );
  },
);
