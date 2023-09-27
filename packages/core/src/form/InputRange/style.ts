import styled, { css } from 'styled-components';

import { BaseContainer, BaseContainerProps } from '../../containers';

const colors = css`
  --railColor: ${({ theme }) => theme.colors.primary.light};
  --trackColor: ${({ theme }) => theme.colors.primary.base};
  --thumbColor: ${({ theme }) => theme.colors.primary.action};
  --markColor: ${({ theme }) => theme.colors.primary.active};
`;

const disabledColors = css`
  pointer-events: none;

  --railColor: ${({ theme }) => theme.colors.neutral['10']};
  --trackColor: ${({ theme }) => theme.colors.neutral['30']};
  --thumbColor: ${({ theme }) => theme.colors.neutral['30']};
  --markColor: transparent;
`;

export const SliderContainer = styled(BaseContainer)<{ disabled?: boolean }>`
  --height: 6px;

  ${({ disabled }) => (disabled ? disabledColors : colors)};

  cursor: pointer;
  box-sizing: content-box;
  height: var(--height);
  padding: 1.5rem 0 2rem;
  width: 100%;
`;

export const SliderRail = styled(BaseContainer)`
  width: 100%;
  height: var(--height);
  background: var(--railColor);
  position: absolute;
  border-radius: calc(var(--height) / 2);
  box-shadow: 0px 0px 0px 1px var(--railColor);
`;

export const SliderTrack = styled(BaseContainer)`
  height: var(--height);
  box-shadow: 0px 0px 0px 1px var(--trackColor);

  background: var(--trackColor);
  border-radius: calc(var(--height) / 2);
  position: absolute;
  left: 0;
`;

export const SliderTrackGradient = styled(BaseContainer)`
  height: var(--height);
  background-image: linear-gradient(to right, #e12712, #ffbb00, #2cb567);
  background-repeat: no-repeat;
  border-radius: calc(var(--height) / 2);
  position: absolute;
  width: 100%;
  left: 0;
`;

export const SliderGradient = styled(BaseContainer)`
  height: var(--height);
  background-color: var(--railColor);
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
`;

export const SliderLabel = styled(BaseContainer).attrs<unknown, BaseContainerProps>((props) => ({
  bgColor: 'baseLight',
  color: 'primary.dark',
  borderRadius: 'xs',
  borderWidth: 'thin',
  p: 'micro',
  ...props,
}))`
  --borderColor: ${({ theme }) => theme.colors.neutral['40']};

  opacity: 0;
  transition: all 200ms linear;

  text-align: center;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing('large')};

  font-size: 12px;
  white-space: nowrap;

  border-color: var(--borderColor);

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid var(--borderColor);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    top: 105%;
    left: 50%;
    margin-left: -5px;
    margin-top: -1px;
  }
`;

const activeThumb = css`
  box-shadow: 0px 0px 0px 9px #00000033 !important;

  & ${SliderLabel} {
    opacity: 1;
  }
`;

export const SliderThumb = styled(BaseContainer)<{ active: boolean }>`
  --size: calc(var(--height) * 2.4);

  display: flex;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  margin-top: calc((var(--size) * -1 / 2) + var(--height) / 2);
  margin-left: calc(var(--size) * -1 / 2);

  position: absolute;
  background: var(--thumbColor);

  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: 0px 0px 0px 6px #00000033;

    ${SliderLabel} {
      opacity: 1;
    }
  }

  ${({ active }) => active && activeThumb}
`;

export const SliderMark = styled(BaseContainer).attrs<BaseContainerProps>((props) => ({
  borderRadius: 'circular',
  ...props,
}))<{ active: boolean }>`
  --size: calc(var(--height) * 0.8);

  position: absolute;
  margin: calc(var(--height) * 0.1);
  width: var(--size);
  height: var(--size);
  padding: 2px;
  margin-left: ${({ active }) => (active ? 'unset' : 'calc(var(--size) * -1)')};
  background: ${({ active }) => (active ? 'var(--thumbColor)' : 'var(--markColor)')};
`;

export const SliderMarkLabel = styled(BaseContainer)`
  position: absolute;
  margin-top: 1rem;
  transform: translateX(-50%);

  white-space: nowrap;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.main.base};
`;
