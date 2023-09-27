import React from 'react';

import { CaptalysLogoSimpleProps } from './props';

import { DefaultSvgInterface, Svg } from '../../elements/Svg';

export const CaptalysLogoSimpleComponent = (props: DefaultSvgInterface) => (
  <Svg {...CaptalysLogoSimpleProps} {...props} />
);
