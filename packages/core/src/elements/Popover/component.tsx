import React from 'react';

import { PopoverProp } from './interface';

import { BaseContainer, Flex } from '../../containers';
import { Tooltip } from '../Tooltip';
import { Typography } from '../Typography';

export const Popover: React.FC<PopoverProp> = ({ children, icon, title, description, ...props }) => {
  const color = props.inverted ? 'neutral.170' : 'grayscale.0';

  const content = (
    <BaseContainer p="xs">
      <Flex gap="medium" maxWidth={400} color={color}>
        <Flex flexDirection="row" alignItems="center" gap="medium">
          {icon}
          <Typography variant="h4" text={title} color={null} />
        </Flex>

        <Typography variant="p" text={description} color={null} />
      </Flex>
    </BaseContainer>
  );

  return (
    <Tooltip content={content} {...props}>
      {children}
    </Tooltip>
  );
};
