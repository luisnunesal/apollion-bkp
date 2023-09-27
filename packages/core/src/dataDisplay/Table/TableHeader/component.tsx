import React from 'react';

import { TableHeaderInterface } from './interface';
import { TableHeaderStyle } from './style';

export const TableHeaderComponent = (props: TableHeaderInterface) => (
  <TableHeaderStyle {...props}>{props.children}</TableHeaderStyle>
);
