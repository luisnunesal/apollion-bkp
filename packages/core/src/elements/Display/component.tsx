import React, { forwardRef } from 'react';

import { DisplayComponentInterface } from './interface';
import { DisplayStyle } from './style';

export const Display = forwardRef<HTMLHeadingElement, DisplayComponentInterface>(
  ({ variant = 'h2', children, text, ...props }, ref) => {
    const content = children ?? text;

    return (
      <DisplayStyle as={variant} variant={variant} ref={ref} {...props}>
        {content}
      </DisplayStyle>
    );
  },
);
