import styled, { css } from 'styled-components';

import { DisplayStyleProps, DisplayVariantStyleProps } from './interface';

import { ColorFactory, FontFactory } from '../../factory';
import { BaseText } from '../Typography/style';

const DisplayVariantStyle: DisplayVariantStyleProps = {
  h1: {
    fontSize: 'gargantua',
    mobile: {
      fontSize: 'xxl',
    },
  },
  h2: {
    fontSize: 'colossal',
    mobile: {
      fontSize: 'xl',
    },
  },
  h3: {
    fontSize: 'giant',
    mobile: {
      fontSize: 'large',
    },
  },
  h4: {
    fontSize: 'xxl',
    mobile: {
      fontSize: 'medium',
    },
  },
};

const getVariantStyle = ({ theme, variant }: DisplayStyleProps) => {
  const { mobile, ...styleTokens } = DisplayVariantStyle[variant];
  return css`
    ${FontFactory({
      fontFamily: 'main',
      fontSize: 'large',
      lineHeight: 'close',
      fontWeight: 'stronger',
      fontStyle: 'normal',
      textTransform: 'normal',
      letterSpacing: 'regular',
      ...styleTokens,
    })}
    ${theme.breakpoints.down('md')} {
      ${FontFactory(mobile)}
      ${ColorFactory({ color: mobile.color ?? 'neutral.180' })}
    }
  `;
};

export const DisplayStyle = styled(BaseText)<DisplayStyleProps>(
  ColorFactory({ color: 'neutral.180' }),
  getVariantStyle,
);
