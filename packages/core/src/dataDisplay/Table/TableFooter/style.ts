import styled from 'styled-components';

import { TableFooterInterface } from './interface';

import { TableRowStyle } from '../TableRow/style';

export const TableFooterStyle = styled.tfoot<TableFooterInterface>`
  width: 100%;
  & > ${TableRowStyle} {
    background-color: ${({ theme }) => theme.colors.getColor(theme.colors.neutral['20'])};
  }
`;
