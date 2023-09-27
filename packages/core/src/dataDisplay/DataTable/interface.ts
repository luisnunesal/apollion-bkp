import React from 'react';
import { CellProps, Row, TableInstance } from 'react-table';

export enum RowColor {
  primary = 'primary',
  success = 'success',
  alert = 'warning',
  error = 'danger',
}

export enum CellAlign {
  left = 'flex-start',
  center = 'center',
  right = 'flex-end',
}

export type CellStyle = {
  align?: CellAlign;
  header?: boolean;
  hasCheckbox?: boolean;
  selectable?: boolean;
  cellProps?: React.ComponentPropsWithoutRef<'div'>;
};

export type Column<T extends Record<string, unknown>> = {
  id?: string;
  Header: string | React.ReactNode;
  Cell?: (props: CellProps<T>) => React.ReactNode;
  Footer?: (table: TableInstance<T>) => React.ReactNode;
  accessor: keyof T;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  align?: CellAlign;
  selectable?: boolean;
  disableSortBy?: boolean;
  disableFilters?: boolean;
};

interface ComponentProps<T extends Record<string, unknown>> {
  data: T[];
  columns: Array<Column<T>>;
  selectableColumn?: string | boolean;
  selectableColumnWidth?: number;
  spacing?: number;
  height?: number;
  title?: string;
  searchPlaceholder?: string;

  onRowSelect?: (d: T[]) => void;
  onRowClick?: (row: T) => void;

  striped?: boolean;
  bordered?: boolean;
  hasHeader?: boolean;
  hasFooter?: boolean;
  hasSpacingMenu?: boolean;
  headerLeftComponent?: React.ReactNode;
  headerRightComponent?: React.ReactNode;
  inputSearchComponent?: React.ReactNode;
  lastRowComponent?: React.ReactNode;

  emptyIcon?: React.ReactNode;
  emptyTitle?: string;
  emptyDescription?: string;

  setRowColor?: (row: Row<T>) => RowColor | undefined;
}

export type RegularProps = React.ComponentPropsWithoutRef<'div'>;
export type DataTableProps<T extends Record<string, unknown>> = ComponentProps<T> & RegularProps;

export interface GlobalFilterProps {
  preGlobalFilteredRows?: Row<any>[];
  globalFilter: string | ((...args: any) => any);
  setGlobalFilter: (filterValue: any) => void;
  placeholder?: string;
}
