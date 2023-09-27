import React, { forwardRef } from 'react';

import { LinkButtonInterface, LinkInterface } from './interface';
import { LinkButtonStyle, LinkStyle } from './style';

import { BaseText } from '../Typography';

const getRoute = ({ href, to }: LinkInterface): LinkInterface['to'] => (href ? { pathname: href } : to);

const LinkButtonComponent = forwardRef<HTMLAnchorElement, LinkButtonInterface>(({ text, children, ...props }, ref) => {
  const toRoute = getRoute(props);

  return (
    <LinkButtonStyle {...props} to={toRoute} ref={ref}>
      <BaseText fontWeight="bold" lineHeight="tight">
        {children || text}
      </BaseText>
    </LinkButtonStyle>
  );
});

LinkButtonComponent.defaultProps = {
  variant: 'contained',
  color: 'primary',
};

export const LinkComponent = forwardRef<HTMLAnchorElement, LinkInterface>(({ text, children, ...props }, ref) => {
  const toRoute = getRoute(props);

  return (
    <LinkStyle {...props} to={toRoute} ref={ref}>
      {children || text}
    </LinkStyle>
  );
}) as React.ForwardRefExoticComponent<LinkInterface & React.RefAttributes<HTMLAnchorElement>> & {
  Button: typeof LinkButtonComponent;
};

LinkComponent.Button = LinkButtonComponent;

LinkComponent.defaultProps = {
  color: 'primary',
};
