import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ApollionProvider } from '../../themes/ThemeProvider';

const RootProvider: React.FC = ({ children }) => <ApollionProvider>{children}</ApollionProvider>;

const customRender = (ui: any, options: RenderOptions = {}) =>
  // @ts-ignore
  render(ui, { wrapper: RootProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
