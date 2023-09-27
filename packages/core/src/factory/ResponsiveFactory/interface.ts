import { BackgroundFactoryProps } from '../BackgroundFactory';
import { BorderFactoryProps } from '../BorderFactory';
import { ColorFactoryProps } from '../ColorFactory';
import { ContainerFactoryProps } from '../ContainerFactory';
import { DeepFactoryProps } from '../DeepFactory';
import { FlexFactoryProps } from '../FlexFactory';
import { FontFactoryProps } from '../FontFactory';
import { SizeFactoryProps } from '../SizeFactory';
import { SpacingFactoryProps } from '../SpacingFactory';

export type Responsive<T = Record<string, any>> = {
  [K in keyof T as `sm_${string & K}` | `md_${string & K}` | `lg_${string & K}` | `xl_${string & K}`]: T[K];
};

export type ResponsiveProps =
  | Responsive<FlexFactoryProps>
  | Responsive<BorderFactoryProps>
  | Responsive<BackgroundFactoryProps>
  | Responsive<ColorFactoryProps>
  | Responsive<ContainerFactoryProps>
  | Responsive<DeepFactoryProps>
  | Responsive<FontFactoryProps>
  | Responsive<SizeFactoryProps>
  | Responsive<SpacingFactoryProps>;
