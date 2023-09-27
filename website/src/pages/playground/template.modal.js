import React, { useCallback, useMemo, useState } from 'react';
import { Button, Modal, Tabs } from '@captalys-platform/core';
import debounce from 'lodash.debounce';
// import Handlebars from 'handlebars';

import { getDomNode } from './util';

import { Editor } from '../../components/Playground';

const STORAGE_KEY = 'code@template-variables';

export function OpenTemplateModalButton() {
  const [index, changeIndex] = useState(0);
  const [templateString, setTemplateString] = useState('');
  const [compiledTemaplate, setCompiledTemplate] = useState('');

  const [variables, setVariables] = useState(
    () => (window && window.localStorage.getItem(STORAGE_KEY)) || ''
  );

  const templateCompiler = useMemo(
    () => Handlebars.compile(templateString),
    [templateString]
  );

  const debouncedCompiler = useCallback(
    debounce((variables) => {
      try {
        const valuesObj = JSON.parse(variables);
        const result = templateCompiler(valuesObj);
        console.log({ valuesObj, result });
        setCompiledTemplate(result);
      } catch (e) {
        console.log(e);
      }
    }, 500),
    [templateString]
  );

  const saveVariables = useCallback(
    debounce((variables) => {
      setVariables(variables);
      if (window) {
        window.localStorage.setItem(STORAGE_KEY, variables);
      }
    }, 1000),
    []
  );

  const onChangeVariables = (variables) => {
    debouncedCompiler(variables);
    saveVariables(variables);
  };

  // get template on when Modal Open
  const getTemplate = () => {
    const template = getDomNode();
    setTemplateString(template);
    setCompiledTemplate(template);
  };

  return (
    <Modal
      size="large"
      onModalOpen={getTemplate}
      trigger={({ open }) => (
        <Button onClick={open} text="Template" size="extraSmall" />
      )}
    >
      <Tabs
        minHeight="65vh"
        onChange={changeIndex}
        selectedIndex={index}
        tabs={[
          {
            tabTitle: 'Variaveis',
            content: (
              <Editor
                key="variables"
                language="json"
                defaultValue={variables}
                onChange={onChangeVariables}
              />
            ),
          },
          {
            tabTitle: 'Template',
            content: <Editor key="template" defaultValue={templateString} />,
          },
          {
            tabTitle: 'Preview',
            content: (
              <div dangerouslySetInnerHTML={{ __html: compiledTemaplate }} />
            ),
          },
        ]}
      />
    </Modal>
  );
}
