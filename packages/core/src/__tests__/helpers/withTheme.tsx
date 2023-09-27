import React from 'react';
import { render } from '@testing-library/react';

import { ApollionProvider, Theme } from '../../themes';

export function withTheme(component: React.ReactElement, theme?: Theme) {
  return render(<ApollionProvider theme={theme}>{component}</ApollionProvider>);
}
