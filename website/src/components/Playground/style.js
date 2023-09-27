import styled from 'styled-components';
import { LiveError } from 'react-live';

export const LiveWrapper = styled.main`
  position: relative;
  height: calc(100vh - var(--ifm-navbar-height));
  display: flex;
`;

export const EditorContainer = styled.div`
  width: 50%;
  position: relative;
`;

export const PreviewContainer = styled.div`
  flex: 1;
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
`;

export const StyledError = styled(LiveError)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  color: white;
  font-size: 0.75em;
  text-align: left;
  white-space: pre-wrap;
  font-family: monospace;

  width: 50%;

  padding: 0.5rem;
  background: rgb(255, 85, 85);
`;

export const ResizeHandle = styled.div`
  width: 12px;
  cursor: col-resize;
  position: absolute;
  right: -6px;
  bottom: 0;
  top: 0;

  z-index: 999;
`;
