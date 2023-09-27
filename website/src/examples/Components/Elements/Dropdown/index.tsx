import {
  Button,
  Dropdown,
  List,
  Icon,
  useNotification,
  ItemContent,
} from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

const contentList = [
  { title: 'Item 1', icon: <Icon name="clock" /> },
  { title: 'Item 2', icon: <Icon name="emojiStar" /> },
  { title: 'Item 3', icon: <Icon name="pen" /> },
];

export const DropdownListExample = () => {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <Dropdown
          full
          content={<List multiple color="primary" content={contentList} />}
        >
          <Button color="primary" text="Dropdown com Lista" />
        </Dropdown>
      )}
    </BrowserOnly>
  );
};

export const DropdownListHoverExample = () => {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <Dropdown
          full
          hoverable
          content={<List showCheckIcon color="primary" content={contentList} />}
        >
          <Button color="primary" text="Hover me :)" />
        </Dropdown>
      )}
    </BrowserOnly>
  );
};

export const DropdownExample = () => {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => <CustomTriggerDropdown />}
    </BrowserOnly>
  );
};

function CustomTriggerDropdown() {
  const { showNotification } = useNotification();

  const listItemAction = ({ title }: ItemContent) => {
    showNotification({
      title: 'Você Selecionou a Opção',
      // @ts-ignore
      message: title,
      autoClose: 5,
    });
  };

  return (
    <Dropdown
      full
      options={[
        {
          title: 'Item 1',
          icon: <Icon name="clock" />,
          action: listItemAction,
        },
        {
          title: 'Item 2',
          icon: <Icon name="emojiStar" />,
          action: listItemAction,
        },
      ]}
    >
      {({ isOpen, toggle }) => (
        <Button
          onClick={toggle}
          color="primary"
          size="small"
          text="Dropdown"
          iconPosition="right"
          icon={
            isOpen ? <Icon name="chevronDown" /> : <Icon name="chevronRight" />
          }
        />
      )}
    </Dropdown>
  );
}
