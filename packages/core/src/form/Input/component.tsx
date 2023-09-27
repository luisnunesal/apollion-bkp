import React, { forwardRef } from 'react';

import { getIconComponent, inputTokens } from './helpers';
import { InputInterface, InputTokenProps } from './interface';
import { InputStyle, WrapperInputStyle } from './style';

export const InputComponent = forwardRef<HTMLInputElement, InputInterface>((props, ref) => {
  const { variant, iconPosition, disabled, width, size, style, ...rest } = props;

  const icon = getIconComponent(props);

  const tokenProps: InputTokenProps = {
    ...inputTokens[size],
    ...(icon && { [iconPosition === 'right' ? 'pr' : 'pl']: 'xl' }),
  };

  return (
    <WrapperInputStyle variant={variant} width={width}>
      <InputStyle
        iconPosition={iconPosition}
        disabled={disabled}
        variant={variant}
        {...tokenProps}
        {...rest}
        ref={ref}
      />
      {icon}
    </WrapperInputStyle>
  );
});

InputComponent.defaultProps = {
  value: '',
  variant: 'default',
  iconPosition: 'right',
  size: 'medium',
};
