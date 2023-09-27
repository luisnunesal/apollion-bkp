import { TypographyVariantPropsInterface } from '../../elements/Typography';

export const TypoFormVariantsProps: TypographyVariantPropsInterface = {
  fieldsetText: {
    tag: 'span',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    lineHeight: '1em',
    fontSize: '1rem',
  },
  labelInputText: {
    tag: 'label',
    fontWeight: 'bold',
    lineHeight: '1em',
    fontSize: '0.75rem',
  },
  optionalText: {
    tag: 'span',
    fontStyle: 'italic',
    lineHeight: '1em',
    fontSize: '0.75rem',
  },
  inputTextInside: {
    tag: 'span',
    fontSize: '1rem',
    lineHeight: '1.25em',
  },
  feedbackText: {
    tag: 'span',
    lineHeight: '0.75em',
    fontSize: '0.75rem',
  },
};
