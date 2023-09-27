import { ReactNode } from 'react';

import { BaseContainerProps } from '../Base';
import { FlexPropsInterface } from '../Flex';

export interface ContentProps extends BaseContainerProps {
  loading?: boolean;
  loadingComponent?: ReactNode;
  contentGap?: FlexPropsInterface['gap'];
  opener?: ReactNode;
  content?: ReactNode;
  closer?: ReactNode;
  children?: ReactNode;
}
