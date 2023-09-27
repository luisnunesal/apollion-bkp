import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

import { InputMaskInterface } from './interface';

import { createMask } from '../../utils';
import { Input } from '../Input';

export function InputMaskComponent(props: InputMaskInterface) {
  const { mask, value: initialValue, onChange, ...rest } = props;

  const maskFormatter = useMemo(() => createMask(mask), [mask]);

  const [value, setValue] = useState(() => (initialValue ? maskFormatter(initialValue) : ''));

  const debouncedUpdateCallback = useCallback(debounce(onChange, 250), []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, validate?: boolean) => {
    const maskVale = maskFormatter(e.target.value ?? '');
    setValue(maskVale);
    debouncedUpdateCallback(maskVale);
  };

  const resetValues = () => {
    setValue('');
    debouncedUpdateCallback('');
  };

  return <Input {...rest} reset={resetValues} value={value} onChange={handleChange} />;
}
