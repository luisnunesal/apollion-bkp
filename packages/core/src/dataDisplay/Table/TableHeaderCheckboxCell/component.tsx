import React from 'react';

import { TableHeaderCheckboxCellInterface } from './interface';
import { TableHeaderCheckboxCellStyle } from './style';

import { Flex } from '../../../containers/Flex';
import { Checkbox } from '../../../form/Checkbox';
import { TableContext } from '../TableContext';

export const TableHeaderCheckboxCellComponent = (props: TableHeaderCheckboxCellInterface) => {
  const { getAllSelected } = React.useContext(TableContext);

  return (
    <TableHeaderCheckboxCellStyle bgColor="baseLight">
      <Flex justifyContent="center">
        <Checkbox label={props.children} onChange={(e) => getAllSelected(e.target.checked)} />
      </Flex>
    </TableHeaderCheckboxCellStyle>
  );
};
