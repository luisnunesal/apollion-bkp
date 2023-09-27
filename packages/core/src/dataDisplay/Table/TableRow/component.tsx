import React from 'react';

import { TableRowInterface } from './interface';
import { TableRowStyle } from './style';

export const TableRowComponent = (props: TableRowInterface) => (
  <TableRowStyle {...props}>{props.children}</TableRowStyle>
);
