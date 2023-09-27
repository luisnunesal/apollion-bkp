import React from 'react';

import { ApollionProvider } from '@captalys-platform/core';

import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Root({ children }) {
  return (
    <BrowserOnly>
      {() => <ApollionProvider>{children}</ApollionProvider>}
    </BrowserOnly>
  );
}
