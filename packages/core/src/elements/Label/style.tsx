import styled from 'styled-components';

import { LabelProps } from './interface';

import { BorderFactory, FontFactory, SpacingFactory } from '../../factory';
import { VariantColorsType } from '../../themes/Colors/interface';
import { Theme } from '../../themes/ThemeProvider/interface';
import { BaseText } from '../Typography';

function getColorVariant(variant: LabelProps['variant']): VariantColorsType {
  if (variant === 'default') {
    return 'primary';
  }

  if (variant === 'info') {
    return 'information';
  }

  return variant;
}

function getColor(theme: Theme, variant: LabelProps['variant']) {
  const colorVariant = getColorVariant(variant);

  return {
    backgroundColor: theme.colors[colorVariant]?.light,
    color: theme.colors[colorVariant]?.action,
  };
}

export const LabelStyle = styled(BaseText)<LabelProps>`
  display: inline;
  align-self: flex-start;

  ${FontFactory({ fontSize: 'micro', lineHeight: 'close' })}
  ${SpacingFactory({ px: 'small', py: 'xs' })}
  ${BorderFactory({ borderRadius: 'micro' })}
  ${({ theme, variant }) => getColor(theme, variant)}
`;
