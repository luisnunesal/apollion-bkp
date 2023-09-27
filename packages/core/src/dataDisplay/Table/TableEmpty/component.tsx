import React from 'react';

import { TableEmptyInterface } from './interface';
import { TableEmptyStyle } from './style';

import { Flex } from '../../../containers/Flex';
import { Icon } from '../../../elements/Icon';
import { Typography } from '../../../elements/Typography';

export const TableEmptyComponent = (props: TableEmptyInterface) => (
  <TableEmptyStyle width="100%" justifyContent="center" alignItems="center" gap={2} p="xl" {...props}>
    {props.iconPropsEmpty ? (
      <Icon {...props.iconPropsEmpty} />
    ) : (
      <Icon name="pictures" size="xl" color="primary.dark" />
    )}
    <Flex width="50%">
      <Typography variant="h5" color="primary" textAlign="center">
        {props.titleEmpty ? props.titleEmpty : 'Nada foi encontrado'}
      </Typography>

      <Typography variant="p" color="primary" textAlign="center">
        {props.subtitleEmpty
          ? props.subtitleEmpty
          : 'Tente ajustar os parâmetros dos filtros ou tente um novo termo para a busca.'}
      </Typography>
    </Flex>
  </TableEmptyStyle>
);
