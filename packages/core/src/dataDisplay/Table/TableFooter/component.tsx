import React from 'react';

import { TableFooterInterface } from './interface';
import { TableFooterStyle } from './style';

import { Typography } from '../../../elements';
import { TableCell } from '../TableCell';
import { TableContext } from '../TableContext';
import { TableRow } from '../TableRow';

export const TableFooterComponent = (props: TableFooterInterface) => {
  const { columnSum } = React.useContext(TableContext);

  const child =
    columnSum.index !== undefined ? (
      <TableRow>
        {Array.from({ length: columnSum.index + 1 }, (item, i) => {
          if (columnSum.index === i) {
            return (
              <TableCell key={i}>
                <Typography variant="h6">{columnSum.sum}</Typography>
              </TableCell>
            );
          }
          if (columnSum.index - 1 === i) {
            return (
              <TableCell key={i}>
                <Typography variant="h6">Total:</Typography>
              </TableCell>
            );
          }
          return <TableCell key={i}>&nbsp;</TableCell>;
        })}
      </TableRow>
    ) : (
      props.children
    );
  return (
    <TableFooterStyle isSum={columnSum.index !== undefined} {...props}>
      {child}
    </TableFooterStyle>
  );
};
