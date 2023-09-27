import { ReactNode } from 'react';

export interface TableEmptyInterface {
  children?: ReactNode;
  iconPropsEmpty?: Record<string, unknown>;
  titleEmpty?: string;
  subtitleEmpty?: string;
}
