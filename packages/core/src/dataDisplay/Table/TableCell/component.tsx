import React, { useEffect } from 'react';

import { TableCellInterface } from './interface';
import { TableCellStyle } from './style';

import { Flex } from '../../../containers/Flex';
import { Tooltip } from '../../../elements/Tooltip';
import { Typography } from '../../../elements/Typography';
import { TableContext } from '../TableContext';

export const TableCellComponent = (props: TableCellInterface) => {
  const { ellipsis } = React.useContext(TableContext);
  const [shouldEllipsis, setShouldEllipsis] = React.useState(null);

  const myRef = React.createRef<HTMLElement | null>();

  function getCustomChild() {
    if (myRef === null || shouldEllipsis === null) return props.children;
    if (ellipsis && shouldEllipsis) {
      return <Tooltip content={props.children}>{props.children}</Tooltip>;
    }
    if (props.children === 'string') {
      return <Typography color="baseDark">{props.children}</Typography>;
    }

    return props.children;
  }

  useEffect(() => {
    const refCell = myRef.current;
    if (refCell !== null) {
      setShouldEllipsis(refCell.offsetWidth < refCell.scrollWidth);
    }
  }, [myRef.current]);

  return (
    <TableCellStyle ref={myRef as any} {...props}>
      <Flex>{getCustomChild()}</Flex>
    </TableCellStyle>
  );
};
