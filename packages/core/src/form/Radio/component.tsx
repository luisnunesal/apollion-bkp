import React from 'react';

import { RadioInterface } from './interface';
import { RadioContainerStyle, RadioInputStyle, RadioStyle } from './style';

export const RadioComponent: React.FC<RadioInterface> = (props) => {
  const { id, disabled, label, variant, ...rest } = props;

  return (
    <RadioContainerStyle htmlFor={id} variant={variant} disabled={disabled}>
      <RadioInputStyle {...rest} type="radio" id={id} disabled={disabled} />

      <RadioStyle />

      {label}
    </RadioContainerStyle>
  );
};

RadioComponent.defaultProps = {
  label: null,
  variant: 'default',
};
