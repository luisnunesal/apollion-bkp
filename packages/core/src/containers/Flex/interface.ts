import { ReactNode } from 'react';

import { FlexFactoryProps } from '../../factory/FlexFactory';
import { BaseContainerProps } from '../Base';

export interface FlexPropsInterface extends BaseContainerProps, FlexFactoryProps {
  children?: ReactNode;
}

/**
 * These props should emulate CSS props with Flex and some 'Grid' Techniques
 * But only add new props if you're going to use it
 */
export interface DefaultFlexInterface
  extends FlexPropsInterface,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {}
