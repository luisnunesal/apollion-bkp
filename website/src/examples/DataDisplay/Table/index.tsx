import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@captalys-platform/core';
import './clear.css';

export const TableSimples = () => {
  return (
    <Table align="center">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Nº Pokedex</TableHeaderCell>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell>Tipo</TableHeaderCell>
          <TableHeaderCell>Região</TableHeaderCell>
          <TableHeaderCell>Geração</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>001</TableCell>
          <TableCell>Bulbasauro</TableCell>
          <TableCell>Grama</TableCell>
          <TableCell>Kanto</TableCell>
          <TableCell>I</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>002</TableCell>
          <TableCell>Ivysauro</TableCell>
          <TableCell>Grama</TableCell>
          <TableCell>Kanto</TableCell>
          <TableCell>I</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>003</TableCell>
          <TableCell>Venusauro</TableCell>
          <TableCell>Grama</TableCell>
          <TableCell>Kanto</TableCell>
          <TableCell>I</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
