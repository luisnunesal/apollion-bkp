import React, { forwardRef, Ref, useImperativeHandle, useMemo, useState } from 'react';
import DefaultSelect from 'react-select';
import AsyncSelect from 'react-select/async';
import { useTheme } from 'styled-components';

import { DropdownIndicator } from './dropdownIndicator';
import { getDefaultValue, useLoadOptions } from './helper';
import { InputSelectProps, InputSelectRef, OptionType, ValueType } from './interface';
import { createComponentStyle } from './style';

import { useLazyEffect } from '../../hooks';
import { toArray } from '../../utils';

function InputSelectComponent<T extends string | number | Record<string, unknown>>(
  props: InputSelectProps<T>,
  ref?: Ref<InputSelectRef>,
) {
  const {
    loadingPlaceholder,
    emptyMessage,
    isLoading,
    onChange,
    loadOptions,
    variant,
    style,
    readOnly,
    value,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState<ValueType<OptionType<T>>>(() => {
    const { options, defaultValue } = rest;

    const newValue = defaultValue || value;

    return getDefaultValue(newValue, options);
  });

  const onChangeValue = (valueToUpdate: ValueType<OptionType<T>>) => {
    setInputValue(valueToUpdate || []);

    if (onChange) {
      onChange(valueToUpdate ? toArray(valueToUpdate) : []);
    }
  };

  useLazyEffect(() => {
    setInputValue(value || []);
  }, [value]);

  useImperativeHandle(ref, () => ({
    setValue: (newValue: any) => {
      onChangeValue(getDefaultValue(newValue, rest.options));
    },
  }));

  const [isLoadingOptions, onLoadOptions] = useLoadOptions(loadOptions);

  const theme = useTheme();
  const componentStyle = useMemo(() => createComponentStyle(theme, variant, style), [theme, variant, style]);

  const customProps = {
    ref,
    ...rest,
    ...((isLoading || isLoadingOptions) && {
      components: { DropdownIndicator, LoadingIndicator: null },
      placeholder: loadingPlaceholder,
      isDisabled: true,
    }),
    closeMenuOnSelect: !rest.isMulti,
    styles: componentStyle,
    value: inputValue,
    noOptionsMessage: () => emptyMessage,
    onChange: onChangeValue,
    ...(readOnly && {
      isClearable: false,
      isSearchable: false,
      openMenuOnClick: false,
      menuIsOpen: false,
    }),
  } as any;

  if (loadOptions) {
    return <AsyncSelect {...customProps} cacheOptions defaultOptions loadOptions={onLoadOptions} />;
  }

  return <DefaultSelect {...customProps} />;
}

export const InputSelect = forwardRef(InputSelectComponent) as <T extends string | number | Record<string, unknown>>(
  // Eslint is complaining about "T" not been declared, but IT IS !!!
  // eslint-disable-next-line no-use-before-define
  props: InputSelectProps<T> & { ref?: Ref<InputSelectRef> },
) => React.ReactElement;

// @ts-ignore
InputSelect.defaultProps = {
  emptyMessage: 'Sem Opções',
  hideSelectedOptions: false,
  loadingPlaceholder: 'Carregando (aguarde)...',
  menuPlacement: 'bottom',
  placeholder: 'Selecione...',
  size: 'medium',
};
