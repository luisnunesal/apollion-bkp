import React from 'react';

import { LabelProps } from './interface';
import { LabelStyle } from './style';

export function Label(props: LabelProps) {
  const { variant = 'default', text, children } = props;

  return <LabelStyle variant={variant}>{children || text}</LabelStyle>;
}
