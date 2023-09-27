import { CSSObject } from 'styled-components';

import { BorderFactoryProps, BorderRoundPropsType, BorderThemePropsType } from './interface';

const borderRoundPosition: Record<BorderRoundPropsType, string> = {
  round: 'x',
  roundBottom: '0 0 x x',
  roundTop: 'x x 0 0',
  roundRight: '0 x x 0',
  roundLeft: 'x 0 0 x',
  roundTopLeft: 'x 0 0 0',
  roundTopRight: '0 x 0 0',
  roundBottomLeft: '0 0 0 x',
  roundBottomRight: '0 0 x 0',
  roundTangentRight: '0 x 0 x',
  roundTangentLeft: 'x 0 x 0',
  sharpTopLeft: '0 x x x',
  sharpTopRight: 'x 0 x x',
  sharpBottomRight: 'x x 0 x',
  sharpBottomLeft: 'x x x 0',
};

export const borderKeys: Array<keyof BorderFactoryProps> = [
  ...(Object.keys(borderRoundPosition) as Array<BorderRoundPropsType>),
  'borderColor',
  'borderPosition',
  'borderRadius',
  'borderStyle',
  'borderWidth',
  'square',
];

export const BorderRoundSemantic = ({ theme, ...props }: BorderThemePropsType) => {
  if ('square' in props) {
    return null;
  }

  const prop = Object.keys(props).find((p) => p in borderRoundPosition) as BorderRoundPropsType;

  if (typeof prop === 'undefined') {
    return null;
  }

  const propValue = props[prop];

  const radiusValue = typeof propValue === 'number' ? theme.spacing(propValue) : theme.border.borderRadius[propValue];

  const borderValue = borderRoundPosition[prop].replace(/x/g, radiusValue);

  return (
    borderValue && {
      borderRadius: borderValue,
    }
  );
};

export const BorderSemantic = ({
  theme,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  borderPosition,
  square,
}: BorderThemePropsType) => {
  const border = {
    // apply border style when borderWidth is used
    borderStyle: borderWidth && theme.border.borderStyle[borderStyle || 'solid'],
    borderRadius: borderRadius && theme.border.borderRadius[borderRadius],
    borderWidth: borderWidth && theme.border.borderWidth[borderWidth],
    borderColor: borderColor && theme.colors(borderColor),
  };

  if (square) {
    border.borderRadius = undefined;
  }

  if (borderPosition) {
    return borderPositionStyle(borderPosition, border);
  }

  return border;
};

function borderPositionStyle(
  position: BorderThemePropsType['borderPosition'],
  props: Partial<Record<keyof BorderFactoryProps, any>>,
): CSSObject {
  const { borderColor, borderStyle, borderWidth, ...rest } = props;

  switch (position) {
    case 'top': {
      return {
        borderTopColor: borderColor,
        borderTopWidth: borderWidth,
        borderTopStyle: borderStyle,
        ...rest,
      };
    }

    case 'bottom': {
      return {
        borderBottomColor: borderColor,
        borderBottomWidth: borderWidth,
        borderBottomStyle: borderStyle,
        ...rest,
      };
    }

    case 'left': {
      return {
        borderLeftColor: borderColor,
        borderLeftWidth: borderWidth,
        borderLeftStyle: borderStyle,
        ...rest,
      };
    }

    case 'right': {
      return {
        borderRightColor: borderColor,
        borderRightWidth: borderWidth,
        borderRightStyle: borderStyle,
        ...rest,
      };
    }

    case 'horizontal':
      return {
        ...borderPositionStyle('left', props),
        ...borderPositionStyle('right', props),
      };

    case 'vertical':
      return {
        ...borderPositionStyle('top', props),
        ...borderPositionStyle('bottom', props),
      };

    default:
      return props;
  }
}

export const BorderFactory = (customProps: BorderFactoryProps) => (contextProps: BorderThemePropsType) => {
  const props = { ...customProps, ...contextProps };
  return { ...BorderSemantic(props), ...BorderRoundSemantic(props) };
};
