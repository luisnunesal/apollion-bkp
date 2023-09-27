import React from 'react';

import { CardInterface } from './interface';

import { BaseText } from '../../elements/Typography';
import { Flex } from '../Flex';

export const CardComponent: React.FC<CardInterface> = ({
  media,
  title,
  description,
  actionComponent,
  children,
  ...props
}) => {
  const titleElement =
    typeof title === 'string' ? (
      <BaseText as="h4" fontSize="small" fontWeight="bold" lineHeight="regular" color="neutral.180">
        {title}
      </BaseText>
    ) : (
      title
    );

  const descriptionElement =
    typeof description === 'string' ? (
      <BaseText as="p" fontSize="micro" lineHeight="wild" color="neutral.180">
        {description}
      </BaseText>
    ) : (
      description
    );

  return (
    <Flex
      display="inline-flex"
      borderRadius="md"
      borderWidth="thin"
      borderColor="neutral.30"
      overflow="hidden"
      {...props}
    >
      {media && <Flex area="media">{media}</Flex>}
      <Flex p="large" gap="large">
        <Flex area="content" gap="xs">
          <Flex area="title">{titleElement}</Flex>
          <Flex area="subtitle">
            {descriptionElement}
            {children}
          </Flex>
        </Flex>
        {actionComponent && (
          <Flex area="action" flex="fluid" mt="large">
            {actionComponent}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
