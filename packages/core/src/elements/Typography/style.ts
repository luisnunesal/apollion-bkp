import styled, { CSSObject, ThemeProps } from 'styled-components';

import { TextInterface, TypographyInterface, TypographyVariantPropType } from './interface';
import { TypoVariantsProps } from './props';

import { ColorFactory, ContainerFactory, FontFactory, styled as _styled } from '../../factory';
import { Theme } from '../../themes/ThemeProvider/interface';

const TextProps = (props: TextInterface): CSSObject => ({
  visibility: props.hide ? 'hidden' : 'inherit',
  margin: 0,
});

export const BaseText = _styled('span')<TextInterface>(TextProps, ContainerFactory, FontFactory, ColorFactory);

export function getTypographyCSS(variantProp: TypographyVariantPropType) {
  return ({ theme }: ThemeProps<Theme>) => {
    const { tag, mobile, ...rest } = variantProp;

    return {
      ...rest,

      ...(!!mobile && {
        [`${theme.breakpoints.down('md')}`]: mobile,
      }),
    };
  };
}

export const TextStyle = styled(BaseText)<TypographyInterface>(
  (props) => getTypographyCSS(TypoVariantsProps[props.variant]),
  FontFactory,
);
