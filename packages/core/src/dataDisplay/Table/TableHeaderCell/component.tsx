import React from 'react';

import { TableHeaderCellInterface } from './interface';
import { TableHeaderCellStyle } from './style';

import { Content } from '../../../containers/Content';
import { Typography } from '../../../elements/Typography';

export const TableHeaderCellComponent = (props: TableHeaderCellInterface) => (
  <TableHeaderCellStyle {...props} bgColor={props.bgColor || undefined}>
    <Content>
      <Typography color="neutral.170" fontWeight="stronger">
        {props.children}
      </Typography>
    </Content>
  </TableHeaderCellStyle>
);
