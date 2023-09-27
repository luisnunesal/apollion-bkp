import React from 'react';
import { Route } from 'react-router-dom';

import { SideBarLayoutInterface } from './interface';
import { StyledGrid } from './style';

import { Flex } from '../../containers';
import { useMediaQuery } from '../../hooks';

export function SideBarLayout({ layoutComponents, ...routeProps }: SideBarLayoutInterface) {
  const { isMobile } = useMediaQuery();

  return (
    <Route
      {...routeProps}
      render={(componentProps) => (
        <StyledGrid>
          {!isMobile && <layoutComponents.sidebar />}
          <Flex area="content" width="100%" justifyContent={isMobile ? 'center' : undefined}>
            <layoutComponents.content {...componentProps} />
          </Flex>
        </StyledGrid>
      )}
    />
  );
}
