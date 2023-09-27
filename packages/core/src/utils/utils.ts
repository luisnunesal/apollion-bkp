import { createElement, useEffect } from 'react';

import { LOGGER } from './logger';

import { $window } from '../entities';

export function useDeprecated(name: string, message?: string) {
  useEffect(() => {
    const deprecatedName = `apl_deprecated_${name}` as any;

    if ($window && !$window[deprecatedName] && process.env.NODE_ENV === 'development') {
      LOGGER.warn(
        `%c ${name} %c is DEPRECATED you've been warned`,
        'background: red;font-size: 2rem; color: #fff',
        'font-size: 1.5rem; color:red',
      );
      // @ts-ignore
      $window[deprecatedName] = true;
    }
  }, []);
}

export function toPixel(prop?: number | string) {
  if (prop) {
    return typeof prop === 'string' ? prop : `${prop}px`;
  }

  return 0;
}

export function toArray(obj: any): any[] {
  if (Array.isArray(obj)) return obj;
  return [].concat(obj);
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(fn: any): fn is Function {
  return typeof fn === 'function';
}

export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object';
}

export function isObjectEmpty(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

export function isString(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object String]';
}

export function isEmptyArray(value?: any): boolean {
  return Array.isArray(value) && value.length === 0;
}

export function isInputEvent(value: any): boolean {
  return value && isObject(value) && isObject(value.target);
}

export function parseHtmlString(domString: string, element: string): HTMLCollection {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(domString, 'text/html');

  return htmlDoc.getElementsByTagName(element);
}

export function domToReact(nodes: HTMLCollection): React.ReactNode {
  const result = [];
  const { length } = nodes;

  for (let i = 0; i < length; i++) {
    const node = nodes[i] as HTMLElement;

    const props: any = {};

    if (node?.hasAttributes()) {
      Array.from(node?.attributes).forEach(({ name, value }) => {
        switch (name) {
          case 'class':
          case 'style':
            break;
          default: {
            props[name] = value;
          }
        }
      });
    }

    let children = null;

    if (node?.children && node?.children.length) {
      children = domToReact(node.children);
    } else if (node.hasChildNodes()) {
      const { textContent } = Array.from(node.childNodes).find((n) => n.nodeType === Node.TEXT_NODE) || {};

      if (textContent) {
        children = textContent;
      }
    }

    if (length) {
      props.key = i;
    }

    result.push(createElement(node.tagName, props, children));
  }

  return result.length > 1 ? result : result[0];
}
