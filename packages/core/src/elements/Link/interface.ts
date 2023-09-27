import React from 'react';
import { LinkProps } from 'react-router-dom';

import { ColorFactoryProps, ContainerFactoryProps, FontFactoryProps } from '../../factory';
import { ButtonComponentProps } from '../Button';

type NativeLinkProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'color'>;

//dis
export interface LinkInterface
  extends Partial<LinkProps>,
    FontFactoryProps,
    ContainerFactoryProps,
    ColorFactoryProps {
  text?: string;
  children?: React.ReactNode;
}

export interface LinkButtonInterface extends ButtonComponentProps, Omit<LinkInterface, 'color'> {}
