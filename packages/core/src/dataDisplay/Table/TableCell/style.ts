import styled from 'styled-components';

import { TableCellInterface } from './interface';

import { BackgroundFactory } from '../../../factory/BackgroundFactory';
import { FontFactory } from '../../../factory/FontFactory';
import { getBorder } from '../shared';

export const TableCellStyle = styled.td<TableCellInterface>`
  ${getBorder};
  ${BackgroundFactory};
  ${FontFactory({ fontFamily: 'main' })};
`;
