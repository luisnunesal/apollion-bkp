import { ReactNode } from 'react';
import { IContentLoaderProps } from 'react-content-loader';

import { AcceptColorType } from '../../themes';

export interface ComposedSkeletonInterface extends Omit<IContentLoaderProps, 'backgroundColor' | 'foregroundColor'> {
  children: ReactNode;
  backgroundColor?: AcceptColorType;
  foregroundColor?: AcceptColorType;
  width: number | string;
  height: number | string;
}
