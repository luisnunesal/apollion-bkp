import { CSSObject } from 'styled-components';

import { SpacingFactoryProps, SpacingKeysTypes, SpacingThemeProps } from './interface';

import { memoize } from '../../utils';

const propertiesAlias: Record<string, string> = {
  m: 'margin',
  p: 'padding',
};

const directionsAlias: Record<string, string | string[]> = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
};

const getSpacingProperty = memoize((prop: string) => {
  const [a, b] = prop.split('');
  const property = propertiesAlias[a];
  const direction = directionsAlias[b] || '';
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});

export const spacingKeys: SpacingKeysTypes[] = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
];

export const SpacingFactory =
  (customProps: SpacingFactoryProps) =>
  ({ theme, ...innerProps }: SpacingThemeProps) => {
    const props = { ...customProps, ...innerProps };

    const cssProperties = {} as CSSObject;

    Object.keys(props).forEach((prop) => {
      if (spacingKeys.indexOf(prop as SpacingKeysTypes) !== -1) {
        const propValue = props[prop as SpacingKeysTypes];

        if (!propValue) {
          return;
        }

        const propertyValue = theme.spacing(propValue);
        const properties = getSpacingProperty(prop) as Array<any>;

        properties.forEach((property) => {
          cssProperties[property] = propertyValue;
        });
      }
    });

    return cssProperties;
  };
