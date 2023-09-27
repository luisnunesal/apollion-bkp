import React from 'react';

import { InputInterface, InputTokenProps } from './interface';

import { Icon } from '../../elements/Icon';
import { IconButton } from '../../elements/IconButton';

export const inputTokens: Record<InputInterface['size'], Partial<InputTokenProps>> = {
  expansive: {
    py: 'medium',
    fontSize: 'medium',
    borderRadius: 'xs',
    height: 54,
  },
  medium: {
    py: 'small',
    fontSize: 'medium',
    borderRadius: 'xs',
    height: 46,
  },
  compact: {
    py: 'xs',
    fontSize: 'small',
    borderRadius: 'xs',
    height: 38,
  },
  micro: {
    py: 'micro',
    fontSize: 'small',
    borderRadius: 'micro',
    height: 26,
  },
};

export function getIconComponent({ icon, variant, clearable, reset, value, readOnly }: InputInterface) {
  if (clearable && reset && value && !readOnly) {
    return (
      <IconButton
        p="micro"
        type="button"
        borderWidth="none"
        variant="linked"
        onClick={reset}
        data-testid="input-reset-button"
        icon={<Icon size="small" color="grayscale.0" name="times" />}
      />
    );
  }

  if (icon) {
    return icon;
  }

  if (variant === 'error') {
    return <Icon name="times" data-testid="input-icon-error" />;
  }

  if (variant === 'success') {
    return <Icon name="check" data-testid="input-icon-success" />;
  }

  return null;
}
