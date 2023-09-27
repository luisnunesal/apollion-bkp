import styled, { css } from 'styled-components';

import { RangeInterface, ThumbInterface } from './interface';

import { BaseContainer, Flex } from '../../containers';
import { BaseContainerProps } from '../../containers/Base';
import { BorderFactory } from '../../factory';

export const WrapperStyle = styled(Flex)`
  position: relative;
`;

export const InputRangeSimpleStyle = styled.input.attrs<BaseContainerProps>((props) => ({
  type: 'range',
  borderRadius: 'straight',
  ...props,
}))`
  position: absolute;
  z-index: 2;
  height: 8px;
  width: 100%;
  pointer-events: none;
  opacity: 0;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    pointer-events: all;
    cursor: pointer;
    width: 35px;
    height: 35px;
    border: 0 none;
    background-color: red;
    -webkit-appearance: none;
  }
`;

export const SliderStyle = styled(Flex)`
  position: relative;
  z-index: 1;
  height: 8px;
`;

export const TrackStyle = styled(Flex).attrs<unknown, BaseContainerProps>((props) => ({
  borderRadius: 'micro',
  bgColor: 'primary.light',
  absoluteFill: true,
  ...props,
}))`
  z-index: 1;
  ${BorderFactory}
`;

export const RangeStyle = styled(Flex).attrs<BaseContainerProps>((props) => ({
  borderRadius: 'micro',
  bgColor: 'primary',
  ...props,
}))<RangeInterface>`
  position: absolute;
  z-index: 2;
  left: ${({ percentLeft }) => (percentLeft ? `${percentLeft}%` : '0%')};
  right: ${({ percentRight }) => (percentRight ? `${percentRight}%` : '0%')};
  top: 0;
  bottom: 0;
`;

export const ThumbStyle = styled(Flex).attrs<BaseContainerProps>((props) => ({
  borderRadius: 'circular',
  bgColor: 'primary',
  deep: 2,
  ...props,
}))<ThumbInterface>`
  position: absolute;
  z-index: 3;
  width: 18px;
  height: 18px;
  ${({ side, percent }) => {
    if (side === 'left') {
      return css`
        left: ${percent}%;
        transform: translate(-5px, -5px);
      `;
    }

    return css`
      right: ${percent}%;
      transform: translate(5px, -5px);
    `;
  }};
`;

export const TooltipMultipleStyle = styled(BaseContainer).attrs<BaseContainerProps>((props) => ({
  borderWidth: 'thin',
  borderStyle: 'solid',
  borderColor: 'n40',
  borderRadius: 'xs',
  bgColor: 'baseLight',
  ...props,
}))<any>`
  position: absolute;
  bottom: 30px;
  width: 84px;
  padding: ${({ theme }) => theme.spacing('micro')};
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.getColor(theme.colors.primary, 'dark')};
  font-size: 12px;
  display: block;
  position: absolute;
  ${({ position, percent }) => {
    if (position === 'left') {
      return css`
        left: ${percent}%;
        transform: translate(-50%, 50%);
      `;
    }
    return css`
      right: ${percent}%;
      transform: translate(50%, 50%);
    `;
  }};

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid ${({ theme }) => theme.colors.neutral['40']};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    top: 105%;
    left: 50%;
    margin-left: -5px;
    margin-top: -1px;
  }
`;
