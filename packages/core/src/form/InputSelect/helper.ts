import { useCallback, useRef } from 'react';

import { OptionType, ValueType } from './interface';

import { useIsomorphicEffect, useToggle } from '../../hooks';
import { isEmptyArray, isObject, isString, LOGGER } from '../../utils';

export function getDefaultValue<T>(value?: any, options?: OptionType<T>[]): ValueType<OptionType<T>> | undefined {
  if (!value || isEmptyArray(options)) {
    return undefined;
  }

  if (isObject(value)) {
    return value;
  }

  if (isString(value)) {
    return options.find((opt) => opt.value === value);
  }

  if (Array.isArray(value)) {
    if ((value as []).every((v) => typeof v === 'string')) {
      return options.filter((opt) => (value as any[]).includes(opt.value));
    }

    if ((value as []).every(isObject)) {
      return value;
    }
  }

  return undefined;
}

type LoadOptionsCallback = (input: string) => Promise<OptionType<any>[]>;

export function useLoadOptions(cb: LoadOptionsCallback): [boolean, LoadOptionsCallback] {
  const callbackFn = useRef(cb);

  const { active, disable, enable } = useToggle();

  useIsomorphicEffect(() => {
    callbackFn.current = cb;
  });

  const callback = useCallback(async (input: string) => {
    try {
      enable();

      const result = await callbackFn.current(input);
      if (Array.isArray(result)) {
        return result;
      }
      throw new Error(`"LoadOptions" prop did not return the expected result`);
    } catch (e) {
      LOGGER.error(e.message);
    } finally {
      disable();
    }

    // this lint rule sucks
    return undefined;
  }, []);

  return [active, callback];
}
