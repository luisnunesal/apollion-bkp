import React, { forwardRef } from 'react';
import { Hooks, useAsyncDebounce } from 'react-table';

import { DataTableProps, GlobalFilterProps, RegularProps } from './interface';
import { Checkbox, CheckboxCheckmark, CheckboxContainer, EmptyContainer, Resizer } from './style';

import { CustomScroll, Flex } from '../../containers';
import { Icon, Typography } from '../../elements';
import { Input } from '../../form';
import { isString } from '../../utils';

export const VitualScrollbar: React.FC = forwardRef<HTMLDivElement, RegularProps>(({ ...props }, ref) => (
  <CustomScroll {...props} style={{ ...props.style, width: undefined }} ref={ref} />
));

export const ResizeHandle: React.FC = forwardRef<HTMLDivElement, RegularProps>((props, ref) => (
  <Resizer {...props} ref={ref} />
));

export const getSortIcon = (num: number) => {
  switch (num) {
    case 1:
      return 'sortUp';
    case 2:
      return 'sortDown';
    default:
      return 'sort';
  }
};

const IndeterminateCheckbox = React.forwardRef<HTMLInputElement, RegularProps & { indeterminate?: boolean }>(
  ({ indeterminate, children, ...props }, ref) => {
    const defaultRef = React.useRef<HTMLInputElement>(null);
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      // @ts-ignore
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <CheckboxContainer as="label">
        {children}
        <Checkbox type="checkbox" ref={resolvedRef} {...props} />
        <CheckboxCheckmark />
      </CheckboxContainer>
    );
  },
);

export function useSelectableRow(selectableColumnTitle?: string | boolean, width?: number) {
  const hook = <T extends Record<string, unknown>>(hooks: Hooks<T>) => {
    hooks.visibleColumns.push((columns) => [
      {
        width,
        id: 'checkbox',
        Header: ({ getToggleAllRowsSelectedProps }: any) => (
          <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()}>
            {isString(selectableColumnTitle) ? selectableColumnTitle : undefined}
          </IndeterminateCheckbox>
        ),
        Cell: ({ row }: any) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
      },
      ...columns,
    ]);
  };

  // eslint-disable-next-line
  return selectableColumnTitle ? hook : () => {};
}

export const GlobalFilter: React.FC<GlobalFilterProps> = ({ globalFilter, setGlobalFilter, placeholder }) => {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((v) => {
    setGlobalFilter(v || undefined);
  }, 200);

  return (
    <Input
      clearable
      width="250px"
      size="compact"
      reset={() => {
        setValue('');
        onChange('');
      }}
      value={value || ''}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={placeholder}
      icon={<Icon name="search" />}
    />
  );
};

export const EmptyTable: React.FC<Partial<DataTableProps<any>>> = ({
  height,
  emptyIcon,
  emptyTitle,
  emptyDescription,
}) => (
  <EmptyContainer style={{ height }}>
    <Flex gap="medium" justifyContent="center" alignItems="center" width="80%" style={{ height }}>
      {emptyIcon}
      <Typography textAlign="center" variant="h5" text={emptyTitle} />
      {emptyDescription && <Typography textAlign="center" variant="p" text={emptyDescription} />}
    </Flex>
  </EmptyContainer>
);

EmptyTable.defaultProps = {
  emptyTitle: 'Nada foi encontrado',
};
