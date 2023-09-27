import { CSSObject } from 'styled-components';

import {
  AlignSelf,
  Flex,
  FlexAlignItems,
  FlexDirection,
  FlexFactoryProps,
  FlexJustify,
  FlexOrder,
  FlexThemeProps,
  FlexWrap,
} from './interface';

export const flexKeys: Array<keyof FlexFactoryProps> = [
  'flex',
  'gap',
  'flexDirection',
  'flexBasis',
  'justifyContent',
  'alignItems',
  'wrap',
  'alignSelf',
  'grow',
  'shrink',
  'order',
  'justifySelf',
];

const flexMap: Record<Flex, string> = {
  auto: '1 1 auto',
  fluid: '1 1 0%',
  initial: '0 1 auto',
  none: 'none',
};

const flexJustify: Record<FlexJustify, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

const flexAlignItems: Record<FlexAlignItems, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

const flexWrapMap: Record<FlexWrap, CSSObject['flexWrap']> = {
  wrap: 'wrap',
  nowrap: 'nowrap',
  reverse: 'wrap-reverse',
};

const alignSelfMap: Record<AlignSelf, string> = {
  start: 'flex-start',
  end: 'flex-end',
  auto: 'auto',
  center: 'center',
  stretch: 'stretch',
};

const flexOrderMap = (order: FlexOrder) => {
  if (typeof order === 'string') {
    return { first: -999, last: 999 }[order];
  }

  return order;
};

const gapFn = (dir: FlexDirection, spacing: any): CSSObject => {
  const isReverse = dir === 'column-reverse' || dir === 'row-reverse';

  const normalValue = isReverse ? 0 : spacing;
  const reverseValue = isReverse ? spacing : 0;

  switch (dir) {
    case 'row':
    case 'row-reverse':
      return {
        '&& > * + *': {
          marginRight: reverseValue,
          marginLeft: normalValue,
        },
      };

    // "column" | "column-reverse"
    default:
      return {
        '&& > * + *': {
          marginTop: normalValue,
          marginBottom: reverseValue,
        },
      };
  }
};

export const FlexFactory =
  (customProps: FlexFactoryProps) =>
  ({ theme, ...contextProps }: FlexThemeProps): CSSObject => {
    const {
      flex,
      flexDirection,
      flexBasis,
      gap,
      justifyContent,
      alignItems,
      wrap,
      justifySelf,
      alignSelf,
      grow,
      shrink,
      order,
    } = {
      ...customProps,
      ...contextProps,
    };

    const gapValue = gap && gapFn(flexDirection, theme.spacing(gap));

    return {
      ...gapValue,
      ...(flex && { flex: flexMap[flex] }),
      ...(justifyContent && { justifyContent: flexJustify[justifyContent] }),
      ...(alignItems && { alignItems: flexAlignItems[alignItems] }),
      ...(alignSelf && { alignSelf: alignSelfMap[alignSelf] }),
      ...(wrap && { flexWrap: flexWrapMap[wrap] }),
      ...(order && { order: flexOrderMap(order) }),
      ...(shrink && { flexShrink: 1 }),
      ...(grow && { flexGrow: 1 }),

      flexBasis,
      flexDirection,
      justifySelf,
    };
  };
