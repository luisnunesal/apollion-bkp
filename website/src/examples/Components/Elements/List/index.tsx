import {
  List,
  ApollionProvider,
  useNotification,
} from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

const content = [{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }];

export const SimpleListExample = () => {
  return <BrowserOnly>{() => <List content={content} />}</BrowserOnly>;
};

export const DefaultListExample = () => {
  return <BrowserOnly>{() => <List content={content} />}</BrowserOnly>;
};

export const MultipleListExample = () => {
  return <BrowserOnly>{() => <List multiple content={content} />}</BrowserOnly>;
};

export const LinkListExample = () => {
  return (
    <BrowserOnly>
      {() => (
        <List
          content={[
            { title: 'Button', to: '/docs/components-elements-button' },
            { title: 'Text', to: '/docs/components-elements-text' },
            { title: 'Form', to: '/docs/components-form-form' },
          ]}
        />
      )}
    </BrowserOnly>
  );
};

export const IconListExample = () => {
  return (
    <BrowserOnly>{() => <List showCheckIcon content={content} />}</BrowserOnly>
  );
};

export function ListExampleSelectCallback() {
  return <BrowserOnly>{() => <ExampleSelectCallback />}</BrowserOnly>;
}

function ExampleSelectCallback() {
  const { showNotification } = useNotification();

  return (
    <List
      onSelectItems={(items) => {
        const selected = items.filter((i) => i.isSelected);

        selected.length &&
          showNotification({
            autoClose: 10,
            variant: 'warning',
            message: selected.map((s) => s.title).join(', '),
          });
      }}
      content={[
        { title: 'Tenet' },
        { title: 'Interstellar' },
        { title: 'inception' },
      ]}
    />
  );
}
