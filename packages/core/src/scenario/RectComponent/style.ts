import styled from 'styled-components';

import { getColor } from '../../themes';

export const RectStyle = styled.rect`
  stroke: ${({ theme }) => getColor(theme.colors.neutral['20'])};
  fill: ${({ theme }) => getColor(theme.colors.neutral['5'])};
`;
