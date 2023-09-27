import {
  BackgroundFactoryProps,
  BorderFactoryProps,
  ColorFactoryProps,
  ContainerFactoryProps,
  DeepFactoryProps,
  FontFactoryProps,
  SizeFactoryProps,
  SpacingFactoryProps,
} from '../../factory';

export interface BaseContainerProps
  extends SpacingFactoryProps,
    SizeFactoryProps,
    ContainerFactoryProps,
    FontFactoryProps,
    ColorFactoryProps,
    BorderFactoryProps,
    DeepFactoryProps,
    BackgroundFactoryProps {}
