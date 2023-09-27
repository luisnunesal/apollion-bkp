import { BorderInput } from './interface';

export const defaultInputBorder: BorderInput = {
  borderRadius: {
    straight: '0px',
    micro: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    large: '28px',
    circular: '100%',
  },
  borderWidth: {
    none: '0px',
    thin: '1px',
    regular: '2px',
    great: '4px',
    bold: '8px',
  },
  borderStyle: {
    solid: 'solid',
    dotted: 'dotted',
    dashed: 'dashed',
  },
};
