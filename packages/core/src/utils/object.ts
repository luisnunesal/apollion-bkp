import { isObject } from './utils';

export type ValueOf<T> = T[keyof T];

export function mapObjIndexed<T, V>(fn: (val: ValueOf<T>, key?: string, o?: T) => V, obj: T) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = fn((obj as any)[key], key, obj);

    return acc;
  }, {} as { [key: string]: V });
}

export function getValue(key: string | string[], obj: any, optionalKey?: string) {
  const keys = Array.isArray(key) ? key : key.split('.');

  const result = keys.reduce((prev, curr) => prev && prev[curr], obj);

  if (isObject(result) && optionalKey) {
    return result[optionalKey];
  }

  return result;
}

export function memoize<T extends (...args: any[]) => any>(fn: T) {
  let cache = {} as Record<string, any>;

  const memoizedFn = (...args: Parameters<typeof fn>) => {
    const key = args[0];

    if (cache[key] === undefined) {
      cache[key] = fn(...args);
    }

    return cache[key];
  };

  memoizedFn.clearCache = () => {
    cache = {};
  };

  return memoizedFn;
}
