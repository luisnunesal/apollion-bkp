import styled from 'styled-components';

import { TableHeaderCellInterface } from './interface';

import { BackgroundFactory } from '../../../factory/BackgroundFactory';
import { getBorder } from '../shared';

export const TableHeaderCellStyle = styled.th<TableHeaderCellInterface>`
  ${getBorder}
  ${BackgroundFactory}
`;
