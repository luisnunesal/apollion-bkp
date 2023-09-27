import React from 'react';
import {
  CellAlign,
  Column,
  DataTable as DataTableComponent,
  DataTableProps,
  Flex,
  Tooltip,
} from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';

import { data } from './data';

export const simpleColumns: Column<typeof data[number]>[] = [
  {
    Header: 'Nome',
    accessor: 'firstName',
    width: 80,
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: 90,
  },
  {
    Header: 'Visitas',
    accessor: 'visits',
    align: CellAlign.right,
    width: 80,
  },
  {
    Header: 'Progresso',
    Cell: ({ value }) => `${value}%`,
    accessor: 'progress',
    width: 80,
    align: CellAlign.right,
  },
  {
    Header: 'Idade',
    // Footer: (info) => {
    //   const total = React.useMemo(
    //     () => info.rows.reduce((sum, row) => row.values.age + sum, 0),
    //     [info.rows]
    //   );

    //   return <>Total: {total}</>;
    // },
    accessor: 'age',
    width: 70,
    align: CellAlign.right,
  },
];

export const customCellColumns: Column<typeof data[number]>[] = [
  {
    Header: 'Nome',
    accessor: 'firstName',
    width: 80,
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: 90,
  },
  {
    Header: <Tooltip content="№ de visitas">Visitas</Tooltip>,
    accessor: 'visits',
    align: CellAlign.right,
    width: 80,
  },
  {
    Header: <Tooltip content="Progresso">Progresso</Tooltip>,
    Cell: ({ value }) => `${value}%`,
    accessor: 'progress',
    width: 80,
    align: CellAlign.right,
  },
  {
    Header: <Tooltip content="Idade">Idade</Tooltip>,
    accessor: 'age',
    width: 70,
    align: CellAlign.right,
  },
];

export const footerExampleColumns: Column<typeof data[number]>[] = [
  {
    Header: 'Nome',
    accessor: 'firstName',
    width: 80,
  },
  {
    Header: 'Status',
    accessor: 'status',
    width: 90,
  },
  {
    Header: 'Visitas',
    accessor: 'visits',
    align: CellAlign.right,
    width: 80,
  },
  {
    Header: 'Progresso',
    Cell: ({ value }) => `${value}%`,
    accessor: 'progress',
    width: 80,
    align: CellAlign.right,
  },
  {
    Header: 'Idade',
    Footer: (info) => {
      const total = React.useMemo(
        () => info.rows.reduce((sum, row) => row.values.age + sum, 0),
        [info.rows]
      );

      return <>Total: {total}</>;
    },
    accessor: 'age',
    width: 70,
    align: CellAlign.right,
  },
];

export function DataTable(props: DataTableProps<any>) {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => <DataTableComponent {...props} />}
    </BrowserOnly>
  );
}

export function SelectExample() {
  const [selected, setValues] = React.useState<any[]>([]);

  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <Flex gap="large">
          <DataTableComponent
            data={data}
            columns={simpleColumns}
            height={200}
            selectableColumn="Usuário"
            selectableColumnWidth={100}
            onRowSelect={setValues}
          />
          <pre>
            <code>
              {JSON.stringify(
                {
                  selected,
                },
                null,
                2
              )}
            </code>
          </pre>
        </Flex>
      )}
    </BrowserOnly>
  );
}
