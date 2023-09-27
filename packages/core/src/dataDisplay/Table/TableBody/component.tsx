import React from 'react';

import { TableBodyInterface } from './interface';
import { TableBodyStyle } from './style';

export const TableBodyComponent = React.forwardRef<HTMLTableElement, TableBodyInterface>((props, ref) => (
  <TableBodyStyle ref={ref as any}>{props.children}</TableBodyStyle>
));
