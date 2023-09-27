import styled, { CSSObject } from 'styled-components';

import { VariantPropsStyle } from './interface';

import { BaseContainer, Flex } from '../../containers';
import { BaseContainerProps } from '../../containers/Base';
import { Grid } from '../../containers/Grid';
import { IconButtonStyle, Typography } from '../../elements';
import { FlexFactory } from '../../factory';
import { WithTheme } from '../../themes/ThemeProvider/interface';

const activeStyle = ({ theme, readOnly, disabled, active }: WithTheme<VariantPropsStyle>): CSSObject => {
  if (readOnly || disabled) {
    return null;
  }

  const borderColor = theme.colors.primary.base;

  return {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: active ? borderColor : 'transparent',
    '&:hover': {
      borderColor,
    },
  };
};

const disabledStyle = ({ disabled, readOnly }: WithTheme<VariantPropsStyle>): CSSObject =>
  (disabled || readOnly) && {
    cursor: 'not-allowed',
    pointerEvents: 'none',
    userSelect: 'none',
  };

export const UploadCardContainer = styled(BaseContainer)<VariantPropsStyle>`
  ${activeStyle}
  ${disabledStyle}

  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    height: 300px;
    max-height: 300px;
  }
`;

export const OverlayContainer = styled(BaseContainer)`
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled(BaseContainer)`
  opacity: 0.95;
`;

export const FileItemContainer = styled(Grid)`
  & ${IconButtonStyle} {
    padding: 0;

    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
`;

export const UploadCardFiles = styled(Flex)`
  & ${FileItemContainer} {
    padding: ${({ theme }) => theme.spacing('xs')} 0;
  }

  & ${FileItemContainer} + & ${FileItemContainer} {
    margin-top: ${({ theme }) => theme.spacing('medium')};
  }
`;

export const FileItemName = styled(Typography)`
  flex: 1;
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileItemProgress = styled(BaseContainer).attrs<BaseContainerProps>((props) => ({
  borderRadius: 'micro',
  bgColor: 'neutral.20',
  ...props,
}))`
  --fillColor: ${({ theme }) => theme.colors.information.base};

  height: 4px;
  background-image: linear-gradient(var(--fillColor), var(--fillColor));
  background-repeat: no-repeat;
  background-size: 0%;
  transition: all 100ms linear;
`;

export const FileItemPreviewContainer = styled(BaseContainer).attrs<BaseContainerProps>((props) => ({
  borderRadius: 'micro',
  ...props,
}))`
  align-self: center;
  overflow: hidden;

  width: 2rem;
  height: 2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary.base};
`;

// COMPACT VARIANT

export const CompactContainer = styled(Grid)<VariantPropsStyle>`
  ${activeStyle}
  ${disabledStyle}
`;

export const CompactFileItemContainer = styled(Grid)`
  ${FlexFactory({ flex: 'fluid' })}
`;
