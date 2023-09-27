import React from 'react';

import { CheckboxInterface } from './interface';
import { CheckboxContainerStyle, CheckboxInputStyle, CheckboxStyle } from './style';

import { Icon } from '../../elements/Icon';
import { BaseText } from '../../elements/Typography';

export const CheckboxComponent: React.FC<CheckboxInterface> = (props) => {
  const { label, ...rest } = props;

  return (
    <CheckboxContainerStyle variant={props.variant} disabled={props.disabled}>
      <CheckboxInputStyle {...rest} type="checkbox" hidden />

      <CheckboxStyle>
        <Icon name="check" size="small" />
      </CheckboxStyle>

      {typeof label === 'string' ? <BaseText color={null}>{label}</BaseText> : label}
    </CheckboxContainerStyle>
  );
};

CheckboxComponent.defaultProps = {
  label: null,
  variant: 'default',
};
