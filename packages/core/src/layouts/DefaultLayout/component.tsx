import React from 'react';
import { Route } from 'react-router-dom';

import { DefaultLayoutInterface } from './interface';
import { GridStyle } from './style';

import { Flex } from '../../containers/Flex';
import { useMediaQuery } from '../../hooks';

export const DefaultLayout = ({ layoutComponents, ...routeProps }: DefaultLayoutInterface) => {
  const { isMobile } = useMediaQuery();

  return (
    <Route
      {...routeProps}
      render={(componentProps) => (
        <GridStyle>
          <Flex area="content" width="100%" justifyContent={isMobile ? 'center' : undefined}>
            {layoutComponents && layoutComponents.content && <layoutComponents.content {...componentProps} />}
          </Flex>
        </GridStyle>
      )}
    />
  );
};
