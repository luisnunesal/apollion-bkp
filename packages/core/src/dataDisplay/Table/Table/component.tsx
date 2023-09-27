import React, { useEffect, useState } from 'react';

import { TableInterface } from './interface';
import { TableStyle } from './style';

import { Flex } from '../../../containers/Flex';
import { Dropdown, Icon, Typography } from '../../../elements';
import { Input } from '../../../form/Input';
import { TableContext } from '../TableContext';
import { TableEmpty } from '../TableEmpty';
import { TablePagination } from '../TablePagination';

export const TableComponent = (props: TableInterface) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState<Array<number>>([]);
  const [rowSize, setRowSize] = useState<TableInterface['rowSize']>('Default');

  const childRef = React.createRef<HTMLElement>();

  useEffect(() => {
    const dataRows = Array.from(childRef.current.children);
    setData(dataRows);
  }, []);

  const ChildComponentWithRef = React.Children.map(props.children, (child, index) => {
    if (index === 1) {
      return React.cloneElement(child as React.ReactElement<any>, { ref: childRef });
    }
    return child;
  });

  const getFilterData = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const filter = data.map((filterItem, i) => {
        const tableRow = childRef.current.children[i] as HTMLElement;

        if (search === '') {
          tableRow.style.display = '';
        }
        if (!filterItem.innerText.toLowerCase().includes(search.toLowerCase())) {
          tableRow.style.display = 'none';
        }
        return filterItem;
      });
      setData(filter);
    }
  };

  const showEmptyTable = data.every((item) => item.style.display === 'none');

  const tableLength = data.length;

  const getSelected = (index: number, checked: boolean) => {
    if (checked) setSelected((oldSelected) => [...oldSelected, index]);
    if (!checked) setSelected(selected.filter((item) => item !== index));
  };

  const getAllSelected = (checkedAll: boolean) => {
    data.forEach((item, index) => {
      const inputs = item.children[0].querySelectorAll('input')[0];
      if (checkedAll) {
        inputs.checked = true;
        setSelected((oldSelected) => [...oldSelected, index]);
      }
      if (!checkedAll) {
        inputs.checked = false;
        setSelected([]);
      }
      return null;
    });

    return checkedAll;
  };

  const getAddLines = (columnNumber: number | string) => {
    const valuesOfColumn = data.map((item) => parseInt(item.children[columnNumber].innerText, 10));
    return valuesOfColumn.reduce((sum, acumulador) => sum + acumulador, 0);
  };

  const showTablePagination =
    props.initialPagination && props.finalPagination && props.totalPagination && props.linesPerPage;

  function getOverflow(param: string) {
    switch (param) {
      case 'normal':
        if (tableLength <= 1) return 'visible';
        if (props.stickyHeader) return 'scroll';
        if (props.columnSize) return 'scroll';
        break;
      case 'y':
        if (props.columnSize && !props.stickyHeader) return 'hidden';
        break;
      default:
        return 'visible';
    }

    return 'visible';
  }

  return (
    <Flex overflow={getOverflow('normal')} overflowY={getOverflow('y')} gap={4}>
      <Flex flexDirection="row" justifyContent="between" alignItems="center">
        {props.title && (
          <Typography color="primary" variant="h5" aria-hidden="true">
            {props.title}
          </Typography>
        )}
        <Flex flexDirection="row" justifyContent="end" alignItems="end" gap={2}>
          {props.searching && (
            <Flex width="230px">
              <Input
                placeholder="Pesquisar"
                type="text"
                value={search}
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => getFilterData(e)}
                width="230"
                icon={<Icon name="edit" />}
                role="search"
              />
            </Flex>
          )}
          {props.rowTypes && (
            <Dropdown
              options={[
                { icon: <Icon name="menuBars" />, title: 'Layout Condensado', action: () => setRowSize('Compact') },
                { icon: <Icon name="menuBars" />, title: 'Layout Padrão', action: () => setRowSize('Expansive') },
                { icon: <Icon name="menuBars" />, title: 'Layout Expandido', action: () => setRowSize('Default') },
              ]}
            >
              <Icon name="menuBars" color="primary" />
            </Dropdown>
          )}
          {props.share && (
            <Dropdown
              options={[
                {
                  icon: <Icon name="envelope" />,
                  title: 'Enviar por email',
                  action: props.share.email,
                },
                {
                  icon: <Icon name="shareAlt" />,
                  title: 'Compartilhar',
                  action: props.share.social,
                },
              ]}
            >
              <Icon name="ellipsisH" color="primary" />
            </Dropdown>
          )}
        </Flex>
      </Flex>
      {showTablePagination && (
        <TablePagination
          initialPagination={props.initialPagination}
          finalPagination={props.finalPagination}
          totalPagination={props.totalPagination}
          linesPerPage={props.linesPerPage}
        />
      )}
      <TableStyle
        stickyHeader={props.stickyHeader}
        striped={props.striped}
        rowSize={rowSize || props.rowSize}
        align={props.align}
        columnSize={props.columnSize}
        width={props.width}
        ellipsis={props.ellipsis}
        hoverable={props.hoverable}
        selected={selected}
        {...props}
      >
        <Typography variant="caption" aria-hidden="false" hidden>
          {props.title}
        </Typography>
        <TableContext.Provider
          value={{
            ellipsis: props.ellipsis,
            getSelected,
            getAllSelected,
            columnSum:
              props.columnSum !== undefined
                ? { index: props.columnSum, sum: getAddLines(props.columnSum) }
                : { index: undefined, sum: undefined },
          }}
        >
          {ChildComponentWithRef}
        </TableContext.Provider>
      </TableStyle>
      {showEmptyTable && <TableEmpty />}
    </Flex>
  );
};
