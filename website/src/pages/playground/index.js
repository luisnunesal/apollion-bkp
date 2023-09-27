import React from 'react';
import { LiveProvider, LivePreview } from 'react-live';
import * as Components from '@captalys-platform/core';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';

import { defaultCode } from './props';
import { OpenTemplateModalButton } from './template.modal';

import {
  Editor,
  LiveWrapper,
  ResizeHandle,
  EditorContainer,
  PreviewContainer,
  StyledError,
  useResize,
} from '../../components/Playground';

import { ColorPicker } from '../../examples/Colors';

const saveCode = debounce((code) => {
  window && window.localStorage.setItem('code', code);
}, 1000);

const Playground = () => {
  const [splitNode, containerNode] = useResize();

  const [code, setCode] = React.useState(() => {
    return (window && window.localStorage.getItem('code')) || defaultCode;
  });

  const onChangeCode = React.useCallback((code) => {
    setCode(code);
    saveCode(code);
  }, []);

  const editor = React.useRef();

  const resetCode = React.useCallback(() => {
    setCode(defaultCode);

    if (editor.current) {
      const model =
        editor.current && editor.current.getModel && editor.current.getModel();

      model && model.setValue && model.setValue(defaultCode);
    }
  }, []);

  const [primary, setPrimary] = React.useState(() => '#32AFDC');

  const changePrimary = React.useCallback(debounce(setPrimary, 250), []);

  const theme = React.useMemo(
    () =>
      Components.createTheme({
        colors: {
          primary,
        },
      }),
    [primary]
  );

  return (
    <LiveProvider noInline code={code} scope={{ ...Components, styled }}>
      <LiveWrapper>
        <EditorContainer ref={containerNode}>
          <Editor
            language="javascript"
            defaultValue={code}
            onChange={onChangeCode}
            editorDidMount={(e) => (editor.current = e)}
          />
          <ResizeHandle ref={splitNode} />
        </EditorContainer>

        <PreviewContainer>
          <Components.ApollionProvider theme={theme}>
            <Components.Flex flexDirection="row" gap="small" mb="small">
              <Components.Button
                text="Reset"
                size="extraSmall"
                variant="outlined"
                onClick={resetCode}
              />

              <ColorPicker onChange={changePrimary}>
                <Components.Button
                  text="Color Picker"
                  size="extraSmall"
                  variant="outlined"
                  color="warning"
                  icon={<Components.Icon name="pen" />}
                />
              </ColorPicker>

              <OpenTemplateModalButton />
            </Components.Flex>
            <LivePreview id="preview-container" />
          </Components.ApollionProvider>
        </PreviewContainer>
      </LiveWrapper>

      <StyledError />
    </LiveProvider>
  );
};

export default () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Layout noFooter={true}>
      <Head>
        <title>Apollion Playground</title>
      </Head>

      <Playground />
    </Layout>
  );
};
