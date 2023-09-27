/* eslint-disable no-nested-ternary */
// @ts-nocheck

// import { Styles as ReactSelectStyles } from 'react-select';

import { Theme } from '../../themes/ThemeProvider';
import { memoize } from '../../utils';
import { FieldVariants } from '../Field';

const inputSizeProps = memoize((size: string, theme: Theme) => {
  switch (size) {
    case 'expansive':
      return {
        padding: theme.spacing('medium', 'small'),
        fontSize: theme.font.fontSize.medium,
        borderRadius: theme.border.borderRadius.xs,
        height: 54,
      };

    case 'compact':
      return {
        padding: theme.spacing('zero', 'small'),
        fontSize: theme.font.fontSize.small,
        borderRadius: theme.border.borderRadius.xs,
        height: 38,
      };

    case 'micro':
      return {
        padding: theme.spacing('zero', 'small'),
        fontSize: theme.font.fontSize.small,
        borderRadius: theme.border.borderRadius.micro,
        height: 26,
      };

    case 'medium':
    default:
      return {
        padding: theme.spacing('xs', 'small'),
        fontSize: theme.font.fontSize.medium,
        borderRadius: theme.border.borderRadius.xs,
        height: 46,
      };
  }
});

export function createComponentStyle(theme: Theme, variant: FieldVariants, outerStyles: React.CSSProperties = {}) {
  const { defaultBorderColor, dark } = (() => {
    switch (variant) {
      case 'error': {
        return {
          dark: theme.colors.danger.dark,
          defaultBorderColor: theme.colors.danger.base,
        };
      }
      case 'success': {
        return {
          dark: theme.colors.success.dark,
          defaultBorderColor: theme.colors.success.base,
        };
      }
      default: {
        return {
          dark: theme.colors.primary.dark,
          defaultBorderColor: theme.colors.neutral['40'],
        };
      }
    }
  })();

  const defaultColor = theme.colors.neutral['100'];

  // focus
  const focusedColor = theme.colors.neutral['20'];

  // Disabled
  const disabledColor = theme.colors.neutral['50'];
  const disabledBackground = theme.colors.neutral['10'];

  // multi
  const multiBackground = theme.colors.neutral['10'];
  const multiValueColor = theme.colors.neutral['150'];
  const multiCloseColor = theme.colors.neutral['150'];

  const compactSpacing = theme.spacing('small');
  const tinySpacing = theme.spacing('micro');

  return {
    container: (style, state) => ({
      ...style,
      width: state.selectProps.width,
      ...outerStyles,
      fontFamily: theme.font.fontFamily.main,
    }),
    control: (style, { isDisabled, selectProps }) => {
      const borderColor = isDisabled ? 'transparent' : defaultBorderColor;

      const sizeProp = inputSizeProps(selectProps.size, theme);

      return {
        ...style,
        ...sizeProp,
        borderColor,
        borderWidth: 1,
        minHeight: undefined,
        background: isDisabled ? disabledBackground : '#fff',
        boxShadow: theme.depth('level-one-minus'),
        '&:hover, &:focus': {
          boxShadow: 'none',
          borderColor,
        },
      };
    },
    valueContainer: (style, { isMulti }) => {
      const margin = isMulti ? `calc(${tinySpacing} * -1) 0` : 0;

      return {
        ...style,
        margin,
        padding: 0,
        lineHeight: 1,
      };
    },
    input: (style) => ({ ...style, padding: 0, margin: 0, fontSize: '1rem' }),
    singleValue: (style) => ({ ...style, color: dark }),
    multiValue: (style) => ({
      ...style,
      margin: tinySpacing,
      fontSize: '0.75rem',
      background: multiBackground,
      '& svg': {
        color: multiCloseColor,
        strokeWidth: 1,
      },
      '& > div:first-of-type': {
        color: multiValueColor,
      },
    }),
    multiValueLabel: (style) => ({
      ...style,
      padding: theme.spacing(0, 'micro'),
    }),
    multiValueRemove: (style) => ({
      ...style,
      background: focusedColor,
      cursor: 'pointer',

      '&:hover': {
        background: disabledBackground,
      },
    }),
    placeholder: (style, { isDisabled }) => ({
      ...style,
      color: isDisabled ? disabledColor : dark,
    }),
    indicatorsContainer: (style, { isDisabled }) => ({
      ...style,
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'center',
      '& > div': {
        paddingTop: 0,
        paddingBottom: 0,
      },
      '& svg': {
        color: isDisabled ? disabledColor : defaultColor,
        fontSize: 'inherit',
        width: '1em',
        height: '1em',
      },
    }),
    indicatorSeparator: (style, { isDisabled }) => ({
      ...style,
      margin: 0,
      height: '1rem',
      alignSelf: 'center',
      borderColor: isDisabled ? disabledColor : defaultColor,
      backgroundColor: isDisabled ? disabledColor : defaultColor,
    }),
    menu: (style) => ({
      ...style,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: theme.depth('level-three'),
      marginTop: tinySpacing,
      padding: 0,
    }),
    menuList: (style) => ({
      ...style,
      borderRadius: 8,
      border: '1px solid #fff',
      padding: 0,
      '& div:not(:first-of-type)': {
        borderTop: '1px solid #fff',
      },
    }),
    option: (style, state) => {
      let backgroundColor = theme.colors.baseLight;

      if (state.isSelected) {
        backgroundColor = theme.colors.neutral['5'];
      }

      if (state.isFocused) {
        backgroundColor = theme.colors.neutral['20'];
      }

      return {
        ...style,
        color: theme.colors.primary.dark,
        backgroundColor,
        cursor: 'pointer',
        textAlign: 'left',
        padding: compactSpacing,
        lineHeight: '1.2rem',
        '&:active': {
          color: theme.colors.baseLight,
          backgroundColor: theme.colors.primary.base,
        },
      };
    },
    clearIndicator: (style) => ({
      ...style,
      cursor: 'pointer',
    }),
    dropdownIndicator: (style) => ({
      ...style,
      cursor: 'pointer',
      paddingRight: 0,
    }),
  };
}
