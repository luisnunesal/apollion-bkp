import {
  AnyStyledComponent,
  StyledComponent as Component,
  StyledComponentInnerAttrs,
  StyledComponentInnerComponent,
  StyledComponentInnerOtherProps,
  ThemedStyledFunction,
} from 'styled-components';

import { Theme } from '../../themes/ThemeProvider/interface';
import { BackgroundFactoryProps } from '../BackgroundFactory/interface';
import { BorderFactoryProps } from '../BorderFactory/interface';
import { ColorFactoryProps } from '../ColorFactory/interface';
import { ContainerFactoryProps } from '../ContainerFactory/interface';
import { DeepFactoryProps } from '../DeepFactory/interface';
import { FlexFactoryProps } from '../FlexFactory/interface';
import { FontFactoryProps } from '../FontFactory/interface';
import { ResponsiveProps } from '../ResponsiveFactory/interface';
import { SizeFactoryProps } from '../SizeFactory/interface';
import { SpacingFactoryProps } from '../SpacingFactory/interface';

export type StyledComponent = JSX.IntrinsicElements | React.ComponentType<any>;

export interface Styled {
  <C extends AnyStyledComponent>(component: C): ThemedStyledFunction<
    StyledComponentInnerComponent<C>,
    Theme,
    StyledComponentInnerOtherProps<C>,
    StyledComponentInnerAttrs<C>
  >;
  <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(component: C): ThemedStyledFunction<C, Theme>;
}

export type ApollionProps = SpacingFactoryProps &
  SizeFactoryProps &
  ContainerFactoryProps &
  FontFactoryProps &
  ColorFactoryProps &
  BorderFactoryProps &
  DeepFactoryProps &
  BackgroundFactoryProps &
  FlexFactoryProps &
  ResponsiveProps;

export type ApollionElements = 'a' | 'div' | 'span' | 'button';
export type Apollion = {
  [E in ApollionElements]: Component<E, Theme, ApollionProps, never>;
};
