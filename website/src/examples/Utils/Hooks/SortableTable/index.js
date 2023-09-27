import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, useSortable } from '@captalys-platform/core';
import hash from 'object-hash';
import React from 'react';
import './clear.css';



const headerSource = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  sortable: true,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  sortable: false,
}, {
  title: 'Nationality',
  dataIndex: 'nationality',
  key: 'nationality',
  sortable: true,
}];

const dataSource = [{
  name: 'Mike',
  age: '32',
  nationality: 'Brazil',
}, {
  name: 'John',
  age: '42',
  nationality: 'England',
}, {
  name: 'Bob',
  age: '25',
  nationality: 'Brazil',
}];

export const SortableTableExample = () => {
  const { headers, rows, orderBy, sortColumn } = useSortable(headerSource, dataSource);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map(({ key, sortable, title }) => (
            <TableHeaderCell
              key={key}
              columnId={key}
              sortable={sortable}
              sortDirection={orderBy[key]}
              onClick={sortColumn}
            >
              {title}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={hash(`${index}:${row.toString()}`)}>
            {row.map((cell, idx) => (
              <TableCell key={hash(`${idx}:${row.toString()}${cell.toString()}`)}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
