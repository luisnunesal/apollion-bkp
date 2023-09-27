import { CSSProperties, HTMLAttributes } from 'react';

import { FontFactoryProps } from '../../factory';
import { ColorsType } from '../../themes/Colors';

export interface TextInterface extends FontFactoryProps {
  hide?: boolean;
  color?: ColorsType;
  area?: string;
}

export type TypographyVariantsType =
  | 'default'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'lead'
  | 'meta'
  | 'blockquote'
  | 'caption';

export type TypographyVariantPropType = CSSProperties & {
  tag: React.ElementType;
  mobile?: CSSProperties;
};

export type TypographyVariantPropsInterface = Record<string, TypographyVariantPropType>;

export interface TypographyInterface extends HTMLAttributes<HTMLElement>, TextInterface {
  as?: React.ElementType;

  text?: string;
  variant?: TypographyVariantsType;
  color?: ColorsType;

  // native props
  htmlFor?: HTMLLabelElement['htmlFor'];
}
