import { ReactNode } from 'react';

import { TextInterface } from '../Typography/interface';

export interface LabelProps extends TextInterface {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'danger';
  children?: ReactNode;
  text?: string;
}
