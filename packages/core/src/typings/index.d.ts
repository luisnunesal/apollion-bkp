/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
/* eslint-enable import/no-extraneous-dependencies */
import 'styled-components';

import { Theme } from '../themes/ThemeProvider/interface';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
