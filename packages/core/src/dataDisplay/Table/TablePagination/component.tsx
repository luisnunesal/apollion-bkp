import React from 'react';

import { TablePaginationInterface } from './interface';

import { Flex } from '../../../containers/Flex';
import { Typography } from '../../../elements/Typography';
import { InputSelect } from '../../../form/InputSelect';

export const TablePaginationComponent = ({
  initialPagination,
  finalPagination,
  linesPerPage,
  totalPagination,
}: TablePaginationInterface) => {
  const isVisible = initialPagination && finalPagination && totalPagination && Array.isArray(linesPerPage);

  return isVisible ? (
    <Flex flexDirection="row" justifyContent="between" alignItems="center">
      <Typography color="primary.dark">
        Exibindo {initialPagination} - {finalPagination} de {totalPagination} itens
      </Typography>
      <Flex flexDirection="row" justifyContent="center" alignItems="center" gap={2}>
        <Typography color="primary.dark">Linhas por página</Typography>
        <InputSelect width="150px" options={linesPerPage} />
      </Flex>
    </Flex>
  ) : null;
};
