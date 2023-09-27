import styled, { css } from 'styled-components';

import { TableAlign, TableAlignTargetColumns, TableInterface } from './interface';

import { DefaultFlexStyle } from '../../../containers/Flex/style';
import { TextStyle } from '../../../elements/Typography/style';
import { BackgroundFactory, BorderFactory } from '../../../factory';
import { TableBodyStyle } from '../TableBody';
import { TableCellStyle } from '../TableCell';
import { TableCheckboxCellStyle } from '../TableCheckboxCell';
import { TableHeaderCellStyle } from '../TableHeaderCell';
import { TableRowStyle } from '../TableRow';

function getSizeStyle(rowSize: TableInterface['rowSize']) {
  switch (rowSize) {
    case 'Compact':
      return css`
        & ${TableHeaderCellStyle} {
          padding: ${({ theme }) => theme.spacing('micro')};
        }
        & ${TableCellStyle}, ${TableCheckboxCellStyle} {
          padding: ${({ theme }) => theme.spacing('micro')};
        }
      `;
    case 'Expansive':
      return css`
        & ${TableHeaderCellStyle} {
          padding: ${({ theme }) => theme.spacing('large')};
        }
        & ${TableCellStyle}, ${TableCheckboxCellStyle} {
          padding: ${({ theme }) => theme.spacing('large')};
        }
      `;

    default:
      return css`
        & ${TableHeaderCellStyle} {
          padding: ${({ theme }) => theme.spacing('medium')};
        }
        & ${TableCellStyle}, ${TableCheckboxCellStyle} {
          padding: ${({ theme }) => theme.spacing('medium')};
        }
      `;
  }
}

function getAlignDirection(direction: TableAlign) {
  switch (direction) {
    case 'left':
      return 'flex-start';

    case 'right':
      return 'flex-end';

    default:
      return 'center';
  }
}

function getAlignStyle(align: TableAlign | TableAlignTargetColumns) {
  if (typeof align === 'object') {
    const aligns = align.reduce((cssString, alignItem: TableAlignTargetColumns['direction' & 'target']) => {
      const childCss = `
          & ${TableCellStyle}, ${TableCheckboxCellStyle}, ${TableHeaderCellStyle} {
        &:nth-child(${alignItem.target}) {
            ${DefaultFlexStyle} {
              text-align: ${alignItem.direction};
              align-items: ${getAlignDirection(alignItem.direction)}
            }
          }
        }
      `;

      return `${cssString} ${childCss}`;
    }, '');

    return css`
      & ${TableCellStyle}, ${TableCheckboxCellStyle}, ${TableHeaderCellStyle} {
        ${DefaultFlexStyle} {
          text-align: center;
          align-items: ${getAlignDirection('center')};
        }
      }

      ${aligns}
    `;
  }
  if (align !== undefined) {
    return css`
      & ${TableCellStyle}, ${TableCheckboxCellStyle}, ${TableHeaderCellStyle} {
        ${DefaultFlexStyle} {
          text-align: ${align};
          align-items: ${getAlignDirection(align)};
        }
      }
    `;
  }
  return css`
    & ${TableCellStyle}, ${TableCheckboxCellStyle}, ${TableHeaderCellStyle} {
      ${DefaultFlexStyle} {
        text-align: center;
        align-items: center;
      }
    }
  `;
}

function getColumnSizeStyle(columnSize: TableInterface['columnSize']) {
  if (columnSize === undefined) return css``;

  const sizes = columnSize.map((columnSizeItem, index) => {
    if (columnSizeItem !== '') {
      if (columnSizeItem.type === undefined) {
        return `
            &:nth-child(${index + 1}) {
             width: ${columnSizeItem.width}px;
            }
          `;
      }
      return `
            &:nth-child(${index + 1}) {
             ${columnSizeItem.type}-width: ${columnSizeItem.width}px;
            }
          `;
    }
    return columnSizeItem;
  });
  return css`
    & ${TableCellStyle}, ${TableCheckboxCellStyle}, ${TableHeaderCellStyle} {
      ${sizes}
    }
  `;
}

function getEllipsisStyle() {
  return css`
    & ${TableCellStyle}, ${TableCheckboxCellStyle}, ${TableHeaderCellStyle} {
      & ${TextStyle} {
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `;
}

function getSelectedStyle(selected: TableInterface['selected']) {
  return selected.map(
    (item) =>
      css`
        & ${TableRowStyle} {
          &:nth-child(${item + 1}) {
            ${BackgroundFactory({ bgColor: 'neutral.10' })};
          }
        }
      `,
  );
}

export const TableStyle = styled.table<TableInterface>`
  position: relative;
  border-collapse: collapse;
  display: table;

  ${({ width }) => (width ? `width: ${width}` : 'width:100%')};

  ${({ stickyHeader }) =>
    stickyHeader &&
    `
      & ${TableHeaderCellStyle} {
        position: sticky;
        top: 0;
      }
  `}

  ${({ striped, theme }) =>
    striped &&
    css`
      ${TableBodyStyle} {
        & ${TableRowStyle} {
          &:nth-child(odd) {
            ${BackgroundFactory({ bgColor: 'neutral.5' })};
          }
        }
        & ${TableCellStyle}, ${TableCheckboxCellStyle} {
          ${BorderFactory({ borderWidth: 'none' })};
        }
      }
      & ${TableHeaderCellStyle} {
        z-index: 10;
      }
    `}

   ${({ hoverable, theme }) =>
    hoverable &&
    `
   & ${TableRowStyle}{
     &:hover{
       & ${TableCellStyle}, ${TableCheckboxCellStyle}{
        &:first-child{
          border-left: 1px solid ${theme.colors.getColor(theme.colors.primary, 'base')};
        }
         border-bottom: 1px solid ${theme.colors.getColor(theme.colors.neutral['40'])};
       }}}
     }
   `};

  ${({ selected }) => getSelectedStyle(selected)}

  ${({ ellipsis }) => (ellipsis ? getEllipsisStyle() : '')}

  ${({ columnSize }) => getColumnSizeStyle(columnSize)}

  ${({ align }) => getAlignStyle(align)}

  ${({ rowSize }) => getSizeStyle(rowSize)}

  ${({ theme }) => theme.breakpoints.down('sm')} {
    overflow-x: scroll;
  }
`;
