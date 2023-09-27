import { css } from 'styled-components';

import { Theme } from '../../themes/ThemeProvider';

export const getBorder = ({ theme }: { theme: Theme }) => css`
  border-top: 1px solid ${theme.colors.neutral['10']};
  border-bottom: 1px solid ${theme.colors.neutral['10']};
  border-right: none;
  border-left: none;
`;
