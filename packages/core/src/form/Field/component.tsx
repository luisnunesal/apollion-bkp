import React from 'react';

import { FieldInterface, FieldVariants } from './interface';
import { FieldContainerStyle, HintTextStyle, LabelStyle, OptionalTextStyle } from './style';

import { Flex } from '../../containers/Flex';
import { isInputEvent } from '../../utils';

export const FieldComponent: React.FC<FieldInterface> = ({
  name,
  value,
  label,
  inputProps,
  hintText,
  hintErrorText,
  hintSuccessText,
  variant,
  setFieldValue,
  readOnly,
  ...props
}) => {
  const Component = props.component;
  const error = !!props.errors || props.error;
  const success = !!props.success;

  const isReadOnly = inputProps?.readOnly ?? readOnly;

  function onChange(e: React.ChangeEvent<any>) {
    if (readOnly) {
      // do nothing on readOnly
      return;
    }

    if (inputProps?.onChange) {
      inputProps.onChange(e);
    }

    if (setFieldValue) {
      let newValue = e;

      // is standard HTML | React.ChangeEvent
      if (isInputEvent(e)) {
        newValue = e.target.type === 'checkbox' || e.target.type === 'radio' ? e.target.checked : e.target.value;
      }

      setFieldValue(name, newValue);
    }
  }

  // reset the field with the initial value
  const resetField = () => {
    if (readOnly) {
      // do nothing on readOnly
    } else if (typeof inputProps.reset === 'function') {
      inputProps.reset();
    } else {
      setFieldValue(name, undefined);
    }
  };

  const errorText = typeof props.errors === 'string' ? props.errors : hintErrorText;
  const hint = (error && errorText) || (success && hintSuccessText) || hintText;

  const fieldVariant: FieldVariants = variant || (error && 'error') || (success && 'success') || 'default';

  const hideLabel = !label || props.hideLabel;

  const showOptionalText = isReadOnly || props.optionalText;

  const optionalText = isReadOnly ? props.readOnlyText : props.optionalText;

  const isDisabled = inputProps && inputProps.disabled;

  return (
    <FieldContainerStyle
      area={props.area}
      variant={fieldVariant}
      disabled={isDisabled}
      gap="micro"
      {...props.fieldProps}
    >
      <Flex flexDirection="row" justifyContent="between" isHidden={hideLabel}>
        <LabelStyle as="label" htmlFor={name} fontSize="xs" fontWeight="bold" lineHeight="regular">
          {label}
        </LabelStyle>

        {showOptionalText && <OptionalTextStyle>{optionalText}</OptionalTextStyle>}
      </Flex>

      <Component
        {...inputProps}
        id={name}
        name={name}
        value={value}
        variant={fieldVariant}
        readOnly={isReadOnly}
        onChange={onChange}
        reset={resetField}
      />

      <HintTextStyle hide={isDisabled || !hint}>{hint}</HintTextStyle>
    </FieldContainerStyle>
  );
};

FieldComponent.defaultProps = {
  readOnlyText: 'apenas leitura',
  hintErrorText: 'Something went wrong',
  hintSuccessText: 'Everything is alright',
};
