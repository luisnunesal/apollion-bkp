import React, { CSSProperties } from 'react';
import {
  Cell,
  Row,
  useFlexLayout,
  useGlobalFilter,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import { FixedSizeList } from 'react-window';
import { useTheme } from 'styled-components';

import { EmptyTable, getSortIcon, GlobalFilter, ResizeHandle, useSelectableRow, VitualScrollbar } from './helper';
import { CellAlign, CellStyle, DataTableProps } from './interface';
import { defaultColumn, RowHeight } from './props';
import { SortIconContainer, Table, TableBody, TableCell, TableFooterRow, TableRow } from './style';

import { BaseContainer, Flex } from '../../containers';
import { Dropdown, Icon, Typography } from '../../elements';
import { useLazyEffect } from '../../hooks';
import { Theme } from '../../themes';

export function DataTableComponent<T extends Record<string, unknown>>(props: DataTableProps<T>) {
  const {
    data,
    columns,
    onRowSelect,
    onRowClick,
    selectableColumnWidth,
    selectableColumn,
    setRowColor,
    title,
    striped,
    bordered,
    searchPlaceholder,
    hasHeader,
    hasFooter,
    hasSpacingMenu,
    inputSearchComponent,
    headerLeftComponent = null,
    headerRightComponent = null,
    lastRowComponent,
    height = 400,
    spacing = 0,
  } = props;

  const [innerRowHeight, setRowHeight] = React.useState(RowHeight.default);

  const {
    state,
    getTableProps,
    getTableBodyProps,
    allColumns,
    rows,
    prepareRow,
    footerGroups,
    totalColumnsWidth,
    // @ts-ignore
    selectedFlatRows,
    // @ts-ignore
    setGlobalFilter,
  } = useTable<T>(
    {
      data,
      columns,
      defaultColumn,
    },
    useFlexLayout,
    useResizeColumns,
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    useSelectableRow(selectableColumn, selectableColumnWidth),
  );

  useLazyEffect(() => {
    if (onRowSelect) {
      onRowSelect(selectedFlatRows.map((d: Row<T>) => d.original));
    }
  }, [selectedFlatRows, state]);

  const theme = useTheme() as Theme;

  // add an extra row to hold a loading indicator/component
  const rowCount = rows.length + (lastRowComponent ? 1 : 0);

  // row color must be set here
  // because react-window unMount row component while scrolling
  const rowColor = (row: Row<T> & { isSelected?: boolean }, idx: number): CSSProperties => {
    const status = setRowColor && setRowColor(row);
    const isStripped = striped && idx % 2 === 0;

    let color = theme.colors.neutral['0'];

    if (status) {
      color = theme.colors[status].light;
    } else if (row.isSelected && onRowSelect) {
      color = theme.colors.neutral['10'];
    } else if (isStripped) {
      color = theme.colors.neutral['5'];
    }

    return {
      backgroundColor: color,
    };
  };

  // we do not use padding to increase the cell height
  // because react-window the row height must be well defined
  const rowHeight = innerRowHeight + spacing;

  // this styles must be defined here
  // because react-table will overwrite them
  const getCellCustomProps = ({ align = CellAlign.left, cellProps = {}, header, hasCheckbox, selectable }: CellStyle) =>
    Object.assign(cellProps, {
      title: undefined,
      style: {
        height: rowHeight,
        overflow: 'hidden',
        display: 'flex',
        alignItems: header ? 'flex-end' : 'center',
        justifyContent: align,
        paddingLeft: hasCheckbox ? theme.spacing('small') : undefined,
        cursor: selectable ? 'pointer' : undefined,
      },
    }) as Partial<React.ComponentPropsWithoutRef<'div'>>;

  const renderRow = React.useCallback(
    ({ index, style: blockCellStyle }): any => {
      if (lastRowComponent && index === rowCount - 1) {
        return React.cloneElement(lastRowComponent as React.ReactElement, { style: blockCellStyle });
      }

      const row = rows[index];

      prepareRow(row);

      const style = {
        ...blockCellStyle,
        ...rowColor(row, index),
      };

      return (
        <TableRow {...row.getRowProps({ style })}>
          {row.cells.map((cell: Cell<T, any> & { column: { id?: string; selectable?: boolean; align?: any } }) => {
            let onClickAction;

            if (onRowClick) {
              onClickAction = () => onRowClick(row?.original);
            } else if (onRowSelect) {
              // @ts-ignore
              onClickAction = () => row?.toggleRowSelected();
            }

            const cellProps = cell.getCellProps(
              getCellCustomProps({
                align: cell?.column?.align,
                hasCheckbox: cell?.column?.id === 'checkbox',
                selectable: (onRowSelect || onRowClick) && !cell?.column?.selectable,
                cellProps:
                  cell?.column?.selectable !== false
                    ? {
                        onClick: onClickAction,
                      }
                    : undefined,
              }),
            );

            return (
              <TableCell key={JSON.stringify(cellProps)} {...cellProps}>
                {cell.render('Cell')}
              </TableCell>
            );
          })}
        </TableRow>
      );
    },
    [prepareRow, rows, state, striped, totalColumnsWidth, innerRowHeight],
  );

  const displayTableBody = !!rows.length;
  const displayFooter = hasFooter && displayTableBody && columns.some((c) => 'Footer' in c);

  const table = (
    <Table bgColor="baseLight" data-border={bordered} data-default={!striped && !bordered} {...getTableProps()}>
      <TableRow>
        {allColumns.map((column: any) => (
          <TableCell
            key={JSON.stringify(column)}
            {...column.getHeaderProps(
              column.getSortByToggleProps(
                getCellCustomProps({ align: column?.align, header: true, hasCheckbox: column?.id === 'checkbox' }),
              ),
            )}
          >
            {column.render('Header')}

            {column.canSort && (
              <SortIconContainer>
                <Icon name={getSortIcon(column.isSorted + column.isSortedDesc)} />
              </SortIconContainer>
            )}

            {column.canResize && (
              <ResizeHandle
                {...column.getResizerProps({
                  onClick: (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation(),
                })}
              />
            )}
          </TableCell>
        ))}
      </TableRow>

      {displayTableBody ? (
        <TableBody {...getTableBodyProps()}>
          <FixedSizeList
            height={height}
            itemCount={rowCount}
            itemSize={rowHeight}
            width={totalColumnsWidth}
            outerElementType={VitualScrollbar}
          >
            {renderRow}
          </FixedSizeList>
        </TableBody>
      ) : (
        <EmptyTable {...props} height={height} />
      )}

      {displayFooter && (
        <BaseContainer>
          <TableFooterRow>
            {footerGroups[0].headers.map((column: any) => (
              <TableCell
                key={JSON.stringify(column)}
                {...column.getFooterProps(getCellCustomProps({ align: column?.align }))}
              >
                {column.render('Footer')}
              </TableCell>
            ))}
          </TableFooterRow>
        </BaseContainer>
      )}
    </Table>
  );

  if (!hasHeader) {
    return table;
  }

  return (
    <Flex gap="medium">
      <Flex flexDirection="row" alignItems="center" justifyContent="between">
        <Flex flexDirection="row" gap="medium">
          {title && <Typography variant="h5" color="primary.dark" text={title} />}
          {headerLeftComponent}
        </Flex>

        <Flex flexDirection="row" gap="medium">
          {inputSearchComponent ?? (
            <GlobalFilter
              // @ts-ignore
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
              placeholder={searchPlaceholder}
            />
          )}

          {headerRightComponent}

          {hasSpacingMenu ? (
            <Flex alignSelf="center">
              <Dropdown
                position="right"
                options={[
                  {
                    icon: <Icon name="menuBars" />,
                    title: 'Layout Compacto',
                    action: () => setRowHeight(RowHeight.compact),
                  },
                  {
                    icon: <Icon name="menuBars" />,
                    title: 'Layout Padrão',
                    action: () => setRowHeight(RowHeight.default),
                  },
                  {
                    icon: <Icon name="menuBars" />,
                    title: 'Layout Expandido',
                    action: () => setRowHeight(RowHeight.expansive),
                  },
                ]}
              >
                <Icon
                  size={5}
                  name="menuBars"
                  color="primary.action"
                  style={{ alignSelf: 'center', cursor: 'pointer' }}
                />
              </Dropdown>
            </Flex>
          ) : null}
        </Flex>
      </Flex>

      {table}
    </Flex>
  );
}
