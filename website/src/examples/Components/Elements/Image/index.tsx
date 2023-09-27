import React from 'react';

import { ImageLazy } from '@captalys-platform/core';

import BrowserOnly from '@docusaurus/BrowserOnly';

export const ImageLazyExample = (p: any) => {
  return <BrowserOnly>{() => <ImageLazy {...p} />}</BrowserOnly>;
};
