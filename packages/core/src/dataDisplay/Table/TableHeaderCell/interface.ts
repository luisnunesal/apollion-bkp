import { ReactNode } from 'react';

import { BgColorsTypes } from '../../../themes/Colors';

export interface TableHeaderCellInterface {
  children?: ReactNode;
  bgColor?: BgColorsTypes;
}
