import styled from 'styled-components';

import { HeadlineStyleProps, HeadlineVariant } from './interface';

import { apollion, ApollionProps } from '../../factory';

const HeadlineVariantStyle: Record<HeadlineVariant, ApollionProps> = {
  h1: {
    fontSize: 'xl',
    md_fontSize: 'colossal',
  },
  h2: {
    fontSize: 'large',
    md_fontSize: 'giant',
  },
  h3: {
    fontSize: 'large',
    fontStyle: 'italic',
    md_fontSize: 'xxl',
    md_fontStyle: 'normal',
  },
  h4: {
    fontSize: 'medium',
    md_fontSize: 'xl',
  },
  h5: {
    fontSize: 'medium',
    fontStyle: 'italic',
    color: 'neutral.170',
    md_fontSize: 'large',
    md_fontStyle: 'normal',
    md_color: 'neutral.180',
  },
  h6: {
    fontSize: 'small',
    textTransform: 'uppercase',
    color: 'neutral.170',
    md_fontSize: 'medium',
    md_textTransform: 'normal',
    md_color: 'neutral.180',
  },
};

export const HeadingStyle = styled(apollion.span).attrs<{ variant: HeadlineVariant }>(({ variant, ...props }) => {
  const variantProps = HeadlineVariantStyle[variant];
  return {
    fontFamily: 'main',
    fontWeight: 'bold',
    lineHeight: 'close',
    color: 'neutral.180',
    letterSpacing: 'regular',
    ...variantProps,
    ...props,
  };
})<HeadlineStyleProps>``;
