import React, { forwardRef } from 'react';

import { TextAreaInterface } from './interface';
import { TextAreaCounterStyle, TextAreaStyle } from './style';

import { InputSize, InputTokenProps, WrapperInputStyle } from '../Input';

const textAreaSizeFactorys = {
  expansive: {
    fontSize: 'medium',
    py: 'medium',
  },
  medium: {
    fontSize: 'medium',
    py: 'small',
  },
  compact: {
    fontSize: 'medium',
    py: 'xs',
  },
  micro: {
    py: 'micro',
    fontSize: 'small',
    borderRadius: 'micro',
  },
} as Record<InputSize, Partial<InputTokenProps>>;

export const TextAreaComponent: React.FC<TextAreaInterface> = forwardRef<HTMLTextAreaElement, TextAreaInterface>(
  ({ value, onChange, maxLengthHint, variant, resize, size, ...props }, ref) => (
    <WrapperInputStyle variant={variant}>
      <TextAreaStyle
        value={value}
        variant={variant}
        onChange={onChange}
        {...textAreaSizeFactorys[size]}
        {...props}
        ref={ref}
        style={{
          resize: resize ? 'both' : 'none',
        }}
      />

      {props.maxLength && (
        <TextAreaCounterStyle>
          {props.maxLength - ((value as string) || '').length} {maxLengthHint}
        </TextAreaCounterStyle>
      )}
    </WrapperInputStyle>
  ),
);

TextAreaComponent.defaultProps = {
  maxLength: null,
  maxLengthHint: 'characters left',
  resize: false,
  variant: 'default',
  size: 'medium',
};
