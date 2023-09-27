import React, { ChangeEvent, forwardRef, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';

import { formatCurrency, getInitialCurrencyValue } from './helper';
import { InputCurrencyInterface } from './interface';

import { Input } from '../Input';

export const InputCurrency = forwardRef<HTMLInputElement, InputCurrencyInterface>(
  ({ onChange, value, decimal, thousand, prefix, ...props }, ref) => {
    const [currencyValue, setCurrencyValue] = useState(() =>
      value ? getInitialCurrencyValue(value, { decimal, thousand, prefix }) : '',
    );

    const debouncedUpdateCallback = useCallback(debounce(onChange, 250), []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, validate?: boolean) => {
      const currencyMask = formatCurrency(e.target.value ?? '', { validate, decimal, thousand, prefix });
      setCurrencyValue(currencyMask);
      debouncedUpdateCallback(currencyMask);
    };

    const resetValues = () => {
      setCurrencyValue('');
      debouncedUpdateCallback('');
    };

    const newValue = prefix ? `${prefix} ${currencyValue}` : currencyValue;

    return (
      <Input
        {...props}
        ref={ref}
        reset={resetValues}
        value={newValue}
        onChange={handleChange}
        onBlur={(e) => handleChange(e, true)}
      />
    );
  },
);

InputCurrency.defaultProps = {
  decimal: ',',
  thousand: '.',
  prefix: 'R$',
};
