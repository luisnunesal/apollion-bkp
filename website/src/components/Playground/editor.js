import React, { Suspense, lazy } from 'react';
import { Flex } from '@captalys-platform/core';
import styled from 'styled-components';
import useThemeContext from '@theme/hooks/useThemeContext';

const MonacoEditor = lazy(() => import('react-monaco-editor'));

const FlexContainer = styled(Flex)`
  & .react-monaco-editor-container {
    flex: 1;
  }
`;

export function Editor(props) {
  const { isDarkTheme } = useThemeContext();

  return (
    <Suspense fallback={<div>Loading</div>}>
      <FlexContainer absoluteFill>
        <MonacoEditor
          {...props}
          theme={isDarkTheme ? 'vs-dark' : 'vs-light'}
          options={{
            wordWrap: 'on',
            fontLigatures: true,
            smoothScrolling: true,
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </FlexContainer>
    </Suspense>
  );
}
