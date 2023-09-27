import React from 'react';

import { TableCheckboxCellInterface } from './interface';
import { TableCheckboxCellStyle } from './style';

import { Content } from '../../../containers/Content';
import { Checkbox } from '../../../form/Checkbox';
import { TableContext } from '../TableContext';

export const TableCheckboxCellComponent = (props: TableCheckboxCellInterface) => {
  const { getSelected } = React.useContext(TableContext);
  const getNodeIndex = (elm: HTMLElement) => [...elm.parentNode.children].indexOf(elm);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const indexRowSelected = getNodeIndex(e.target.closest('tr'));

    getSelected(indexRowSelected, e.target.checked);
  };

  return (
    <TableCheckboxCellStyle>
      <Content>
        <Checkbox label={props.children} onChange={handleChecked} />
      </Content>
    </TableCheckboxCellStyle>
  );
};
