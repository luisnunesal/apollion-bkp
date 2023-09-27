import styled from 'styled-components';

import { BaseContainer } from '../Base';

export const Wrapper = styled(BaseContainer)`
  flex: 1;
  height: 100%;
  overflow: hidden;
`;

export const Inner = styled(BaseContainer)`
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const Track = styled(BaseContainer)`
  position: absolute;
  top: 0;
  right: 2px;
  cursor: pointer;
  user-select: none;
  width: 6px;
  min-height: 30px;
  max-height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.25s ease-in;
  z-index: 1;
`;

export const Container = styled(BaseContainer)`
  flex: 1;
  display: flex;
  overscroll-behavior: auto;
  overflow: hidden;

  &:hover ${Track} {
    opacity: 0.75;
  }
`;
