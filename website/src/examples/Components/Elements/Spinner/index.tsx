import React, { useState } from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';

import { Icon, Input, Spinner } from '@captalys-platform/core';

export const SpinnerExample = () => {
  const [value, setValue] = useState('Ola mundo');

  return (
    <BrowserOnly>
      {() => (
        <Input
          value={value}
          size="compact"
          onChange={(e) => setValue(e.target.value)}
          icon={<Icon icon={<Spinner />} />}
        />
      )}
    </BrowserOnly>
  );
};
