import { Icon, IconButton, Popover } from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { Fragment } from 'react';

export const PopoverExample = () => {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <Fragment>
          <Popover
            title="Popover example"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
            icon={<Icon name="upload" />}
          >
            <IconButton icon={<Icon name="playCircle" />} />
          </Popover>

          <Popover
            inverted
            title="Popover example"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
            icon={<Icon name="upload" />}
          >
            <IconButton icon={<Icon name="emojiAngry" />} />
          </Popover>
        </Fragment>
      )}
    </BrowserOnly>
  );
};
