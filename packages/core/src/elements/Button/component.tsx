import React, { forwardRef } from 'react';

import { ButtonInterface } from './interface';
import { ButtonStyle } from './style';

import { Content } from '../../containers/Content';
import { BaseText } from '../Typography';

export const ButtonComponent = forwardRef<HTMLButtonElement, ButtonInterface>(
  ({ children, text, isLoading, icon, iconPosition, ...props }, ref) => (
    <ButtonStyle {...props} as="button" ref={ref}>
      <Content loading={isLoading} {...(iconPosition === 'right' ? { closer: icon } : { opener: icon })}>
        <BaseText fontWeight="bold" lineHeight="tight" fontFamily="main">
          {children || text}
        </BaseText>
      </Content>
    </ButtonStyle>
  ),
);

ButtonComponent.defaultProps = {
  color: 'primary',
  size: 'medium',
  variant: 'contained',
  icon: null,
  iconPosition: 'left',
  fullWidth: false,
};
