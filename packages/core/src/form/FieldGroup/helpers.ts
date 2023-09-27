function createSpace(num: number) {
  return Array(num).fill('min-content').join(' ');
}

export function getGridColumns(columns: number) {
  return columns ? createSpace(columns) : '1fr';
}

export function getGridGap(gap: any) {
  const rowGap = gap && gap.row ? gap.row : gap;
  const columnGap = gap && gap.column ? gap.column : gap;

  return [rowGap, columnGap];
}
