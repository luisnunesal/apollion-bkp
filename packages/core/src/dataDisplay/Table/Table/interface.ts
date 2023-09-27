import { ReactNode } from 'react';

import { TablePaginationInterface } from '../TablePagination/interface';

export type TableAlign = 'left' | 'center' | 'right';

export type TableAlignTargetColumns = Array<{
  direction: TableAlign;
  target: string;
}>;

export interface TableInterface {
  children?: ReactNode;
  title?: string;
  searching?: boolean;
  stickyHeader?: boolean;
  striped?: boolean;
  rowSize?: 'Compact' | 'Expansive' | 'Default';
  rowTypes?: boolean;
  align?: TableAlign | TableAlignTargetColumns;
  columnSize?: [
    {
      width?: string | number;
      type?: 'max' | 'min';
    },
  ];
  width?: string;
  ellipsis?: boolean;
  hoverable?: boolean;
  share?: {
    email?: () => void;
    social?: () => void;
  };

  selected?: Array<number>;

  initialPagination?: TablePaginationInterface['initialPagination'];
  finalPagination?: TablePaginationInterface['finalPagination'];
  totalPagination?: TablePaginationInterface['totalPagination'];
  linesPerPage?: TablePaginationInterface['linesPerPage'];
  columnSum?: number;
}
