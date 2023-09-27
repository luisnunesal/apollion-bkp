export interface TablePaginationInterface {
  initialPagination?: number | string;
  finalPagination?: number | string;
  totalPagination?: number | string;
  linesPerPage?: Array<{
    label: string;
    value: any;
  }>;
}
