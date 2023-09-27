import _styled from 'styled-components';

import { Apollion, ApollionElements, ApollionProps, Styled } from './interface';

import { BackgroundFactory, backgroundKeys } from '../BackgroundFactory';
import { BorderFactory, borderKeys } from '../BorderFactory';
import { ColorFactory, colorKeys } from '../ColorFactory';
import { ContainerFactory, containerKeys } from '../ContainerFactory';
import { DeepFactory, deepKeys } from '../DeepFactory';
import { FlexFactory, flexKeys } from '../FlexFactory';
import { FontFactory, fontKeys } from '../FontFactory';
import { ResponsiveFactory } from '../ResponsiveFactory';
import { SizeFactory, sizeKeys } from '../SizeFactory';
import { SpacingFactory, spacingKeys } from '../SpacingFactory';

const customPropNames: Set<string> = new Set([
  ...containerKeys,
  ...backgroundKeys,
  ...spacingKeys,
  ...borderKeys,
  ...colorKeys,
  ...deepKeys,
  ...fontKeys,
  ...flexKeys,
  ...sizeKeys,
  'variant',
  'active',
]);

const shouldForwardProp = (prop: any, defaultValidatorFn: (p: any) => boolean) =>
  !customPropNames.has(prop) && defaultValidatorFn(prop);

export const styled: Styled = (component: any) => _styled(component).withConfig({ shouldForwardProp });

const elements: Array<ApollionElements> = ['a', 'div', 'span', 'button'];
export const apollion = {} as Apollion;

elements.forEach((ele) => {
  apollion[ele] = styled(ele)<ApollionProps>(
    ContainerFactory({ position: 'relative', margin: 0 }),
    SpacingFactory,
    BorderFactory,
    BackgroundFactory,
    FontFactory,
    ColorFactory,
    DeepFactory,
    SizeFactory,
    FlexFactory,
    ResponsiveFactory,
  );
});
