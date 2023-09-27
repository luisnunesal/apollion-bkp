import { ReactNode } from 'react';

import { BgColorsTypes } from '../../../themes/Colors';

export interface TableCellInterface {
  children?: ReactNode;
  ellipsis?: boolean;
  colSpan?: HTMLTableCellElement['colSpan'];
  bgColor?: BgColorsTypes;
}
