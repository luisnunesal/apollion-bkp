import { TypographyVariantPropsInterface } from './interface';

export const TypoVariantsProps: TypographyVariantPropsInterface = {
  default: {
    tag: 'span',
  },
  h1: {
    tag: 'h1',
    lineHeight: '1.5em',
    fontSize: '2.488rem',
    fontWeight: 'bolder',
    mobile: {
      fontSize: '2.074rem',
      letterSpacing: '0.0025em',
    },
  },
  h2: {
    tag: 'h2',
    lineHeight: '1.5em',
    fontWeight: 'bolder',
    fontSize: '2.074rem',
    letterSpacing: '0.0025em',
    mobile: {
      fontSize: '1.728rem',
    },
  },
  h3: {
    tag: 'h3',
    lineHeight: '1.5em',
    fontSize: '1.728rem',
    fontWeight: 'bolder',
    mobile: {
      fontSize: '1.44rem',
    },
  },
  h4: {
    tag: 'h4',
    lineHeight: '1.5em',
    fontSize: '1.44rem',
    letterSpacing: '0.0025em',
    fontWeight: 'bolder',
    mobile: {
      fontSize: '1.2rem',
      letterSpacing: '0.0015em',
    },
  },
  h5: {
    tag: 'h5',
    lineHeight: '1.5em',
    fontSize: '1.2rem',
    letterSpacing: '0.0015em',
    fontWeight: 'bolder',
    mobile: {
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  },
  h6: {
    tag: 'h6',
    lineHeight: '1.5em',
    fontSize: '1rem',
    letterSpacing: '0.0015em',
    fontWeight: 'bolder',
  },
  p: {
    tag: 'p',
    lineHeight: '1.5em',
    fontSize: '1rem',
  },
  lead: {
    tag: 'p',
    lineHeight: '1.5em',
    fontSize: '1.44rem',
  },
  meta: {
    tag: 'p',
    lineHeight: '1.5em',
    fontSize: '0.75rem',
  },
  blockquote: {
    tag: 'blockquote',
    lineHeight: '1.5em',
    fontSize: '1.25rem',
  },
  caption: {
    tag: 'caption',
    lineHeight: '1.5em',
    marginBottom: '1.05rem',
    fontSize: '1.25rem',
    letterSpacing: '0.0015em',
    fontWeight: 'bolder',
  },
};
