import styled from 'styled-components';

import { BaseContainer } from '../../containers';
import { BaseContainerProps } from '../../containers/Base';

export const TableCell = styled(BaseContainer)(({ theme }) => ({
  margin: 0,
  padding: '0 0.5rem',
  lineHeight: 1,
  color: theme.colors.neutral['180'],
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}));

export const TableRow = styled(BaseContainer)`
  display: flex;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
`;

export const TableFooterRow = styled(TableRow).attrs<BaseContainerProps>((props) => ({
  bgColor: 'neutral.10',
  ...props,
}))``;

export const TableBody = styled(BaseContainer)`
  & ${TableRow}:hover {
    border-bottom-color: ${({ theme }) => theme.colors.neutral['60']} !important;
    border-left-color: ${({ theme }) => theme.colors.primary.base} !important;
  }
`;

export const Table = styled(BaseContainer)`
  border-spacing: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.neutral['40']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral['40']};

  &[data-border='true'] ${TableRow} {
    border-right: 1px solid ${({ theme }) => theme.colors.neutral['40']};
    border-left-color: ${({ theme }) => theme.colors.neutral['40']};
    border-bottom-color: ${({ theme }) => theme.colors.neutral['40']};
  }

  &[data-border='true'] ${TableCell}:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.neutral['40']};
  }

  &[data-default='true'] ${TableRow} {
    border-bottom-color: ${({ theme }) => theme.colors.neutral['10']};
  }

  & > ${TableRow} > ${TableCell} {
    font-weight: 600;
    align-items: flex-end;
    padding-bottom: ${({ theme }) => theme.spacing('xs')};
    padding-right: ${({ theme }) => theme.spacing('large')};
    color: ${({ theme }) => theme.colors.neutral['170']};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    & > ${TableRow} > ${TableCell} {
      padding-right: ${({ theme }) => theme.spacing('xs')};
    }
  }
`;

export const SortIconContainer = styled(BaseContainer)`
  position: absolute;
  right: 5px;
  bottom: 5px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const Resizer = styled(BaseContainer)`
  cursor: col-resize;
  display: inline-block;
  width: 10px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(50%);
  z-index: 1;
  touch-action: none;
`;

export const CheckboxCheckmark = styled(BaseContainer)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  width: 'var(--size)',
  height: 'var(--size)',
  border: '2px solid var(--border-color)',
  borderRadius: theme.spacing('micro'),

  '&:after': {
    content: "''",
    position: 'absolute',
    display: 'none',
  },
}));

export const Checkbox = styled.input`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:indeterminate ~ ${CheckboxCheckmark}, &:checked ~ ${CheckboxCheckmark} {
    background-color: var(--checked-color);
    border-color: var(--checked-color);
  }

  &:checked ~ ${CheckboxCheckmark}:after {
    display: block;
    left: 4px;
    top: 0px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  &:indeterminate ~ ${CheckboxCheckmark}:after {
    display: block;

    left: 3px;
    top: 5px;
    width: 9px;
    height: 4px;
    background-color: white;
  }

  &:indeterminate:hover {
    cursor: wait;
  }
`;

export const CheckboxContainer = styled(BaseContainer)(({ theme }) => ({
  '--checked-color': theme.colors.information.base,
  '--border-color': theme.colors.neutral['60'],
  '--size': '18px',

  width: 'var(--size)',
  height: 'var(--size)',

  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  paddingLeft: 'calc(var(--size) * 1.5)',
}));

export const EmptyContainer = styled(BaseContainer).attrs<BaseContainerProps>((props) => ({
  bgColor: 'neutral.5',
  ...props,
}))(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: theme.colors.neutral['180'],
}));
