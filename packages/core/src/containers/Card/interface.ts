import { ReactNode } from 'react';

import { FlexPropsInterface } from '../Flex';

export interface CardInterface extends FlexPropsInterface {
  title?: string | ReactNode;
  description?: string | ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  actionComponent?: ReactNode;
  media?: ReactNode;

  // image?: ImageInterface['src'];
  // areas?: string;
  // actions?: ReactNode;
  // width?: string;
}
