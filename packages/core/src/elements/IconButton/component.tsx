import React, { forwardRef } from 'react';

import { IconButtonInterface } from './interface';
import { IconButtonStyle } from './style';

import { Spinner } from '../Spinner';

export const IconButtonComponent = forwardRef<HTMLButtonElement, IconButtonInterface>((props, ref) => {
  const { isLoading, loadingComponent, icon } = props;

  return (
    <IconButtonStyle {...props} as="button" ref={ref}>
      {isLoading ? loadingComponent ?? <Spinner data-testid="icon-spinner" /> : icon}
    </IconButtonStyle>
  );
});

IconButtonComponent.defaultProps = {
  color: 'primary',
  size: 'medium',
  variant: 'contained',
  icon: null,
};
