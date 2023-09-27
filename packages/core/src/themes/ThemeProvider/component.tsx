import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ApollionProviderInterface } from './interface';
import { createTheme } from './props';

import { NotificationsProvider } from '../../containers/Notification/context';
import { BreakpointsProvider } from '../../utils/components/Breakpoints';

export const ApollionProvider: React.FC<ApollionProviderInterface> = ({ children, theme = createTheme() }) => (
  <ThemeProvider theme={theme}>
    <BreakpointsProvider>
      <NotificationsProvider>{children}</NotificationsProvider>
    </BreakpointsProvider>
  </ThemeProvider>
);
