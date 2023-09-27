/* eslint-disable @typescript-eslint/no-use-before-define */

import styled, { CSSObject } from 'styled-components';

import { FieldStyleProps } from './interface';
import { TypoFormVariantsProps } from './props';

import { Flex } from '../../containers';
import { BaseText, getTypographyCSS } from '../../elements/Typography';

const getFieldColor = ({ theme, disabled, variant }: FieldStyleProps): CSSObject => {
  let colorLabel = theme.colors.neutral['180'];
  let colorHint = theme.colors.neutral['180'];

  if (variant !== 'default') {
    const { base, dark } = variant === 'success' ? theme.colors.success : theme.colors.danger;
    colorLabel = dark;
    colorHint = base;
  }

  if (disabled) {
    colorLabel = theme.colors.grayscale['30'];
  }

  return {
    '--colorLabel': colorLabel,
    '--colorHint': colorHint,
  };
};

export const FieldContainerStyle = styled(Flex)<FieldStyleProps>`
  width: 100%;
  justify-content: center;
  ${getFieldColor};
`;

export const LabelStyle = styled(BaseText)`
  color: var(--color-label);
`;

export const OptionalTextStyle = styled(BaseText)`
  color: var(--color-label);
  ${getTypographyCSS(TypoFormVariantsProps.optionalText)}
`;

export const HintTextStyle = styled(BaseText)`
  color: var(--color-hint);

  &:empty {
    height: ${TypoFormVariantsProps.feedbackText.lineHeight};
  }

  ${getTypographyCSS(TypoFormVariantsProps.feedbackText)}
`;
