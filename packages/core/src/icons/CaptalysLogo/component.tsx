import React from 'react';

import { CaptalysLogoProps } from './props';

import { DefaultSvgInterface, Svg } from '../../elements/Svg';

export const CaptalysLogoComponent = (props: DefaultSvgInterface) => <Svg {...CaptalysLogoProps} {...props} />;
