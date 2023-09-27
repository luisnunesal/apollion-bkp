import React, { forwardRef } from 'react';

import { ContentProps } from './interface';

import { Spinner } from '../../elements/Spinner';
import { Flex } from '../Flex';

export const ContentComponent = forwardRef<HTMLDivElement, ContentProps>(
  ({ loading, opener, closer, content, contentGap, children, loadingComponent, ...props }, ref) => (
    <Flex flexDirection="row" justifyContent="center" alignItems="center" {...props} ref={ref}>
      <Flex flexDirection="row" flex="fluid" alignItems="center" gap={contentGap} isHidden={loading}>
        {opener}
        <Flex flex="fluid">{children || content}</Flex>
        {closer}
      </Flex>
      {loading && (loadingComponent ?? <Spinner data-testid="content-spinner" color="gray.0" position="absolute" />)}
    </Flex>
  ),
);

ContentComponent.defaultProps = {
  contentGap: 'xs',
  opener: null,
  closer: null,
};
