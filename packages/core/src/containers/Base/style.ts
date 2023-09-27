import { motion } from 'framer-motion';

import { BaseContainerProps } from './interface';

import {
  BackgroundFactory,
  BorderFactory,
  ColorFactory,
  ContainerFactory,
  DeepFactory,
  FontFactory,
  SizeFactory,
  SpacingFactory,
  styled,
} from '../../factory';

export const BaseContainer = styled('div')<BaseContainerProps>(
  ContainerFactory({ position: 'relative' }),
  SpacingFactory,
  BorderFactory,
  BackgroundFactory,
  FontFactory,
  ColorFactory,
  DeepFactory,
  SizeFactory,
);

export const AnimatedContainer = motion(BaseContainer);
