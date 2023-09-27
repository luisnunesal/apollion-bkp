import {
  Button,
  Flex,
  Icon,
  Notification as NotificationComponent,
  useNotification,
} from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

export const Notification = (props) => (
  <BrowserOnly fallback={<div>Carregando ...</div>}>
    {() => <NotificationComponent {...props} />}
  </BrowserOnly>
);

export const NotificationAction = () => {
  return (
    <Notification
      closable
      type="block"
      variant="warning"
      icon={<Icon name="cog" />}
      title="I'm a Notification title :)"
      message="And I'm a text to complete notification XOXO"
      action={({ close }) => (
        <Button
          onClick={() => {
            console.log('Ola Mundo');
            close && close();
          }}
          size="small"
          text="Confirmar"
        />
      )}
    />
  );
};

export const NotificationExample = () => (
  <BrowserOnly fallback={<div>Carregando ...</div>}>
    {() => (
      <NotificationComponent
        type="block"
        title={"I'm a Notification title :)"}
        message={"And I'm a text to complete notification XOXO"}
        icon={<Icon name="user" />}
        autoClose={30}
        link={{
          text: 'Link',
          href: 'https://google.com.br',
        }}
      />
    )}
  </BrowserOnly>
);

export function ToastExample() {
  return (
    <BrowserOnly fallback={<div>Carregando ...</div>}>
      {() => <ToastTrigger />}
    </BrowserOnly>
  );
}

function ToastTrigger() {
  const { showNotification } = useNotification();

  return (
    <Flex flexDirection="row" gap={8} margin="2rem 0">
      <Button
        text="Success"
        color="success"
        onClick={() =>
          showNotification({
            title: 'Titulo',
            message: 'Ola Mundo',
            variant: 'success',
          })
        }
      />

      <Button
        text="Warning"
        color="warning"
        onClick={() =>
          showNotification({
            title: 'Titulo',
            message: 'Ola Mundo',
            variant: 'warning',
          })
        }
      />

      <Button
        text="Danger"
        color="danger"
        onClick={() =>
          showNotification({
            title: 'Titulo',
            message: 'Ola Mundo',
            variant: 'danger',
          })
        }
      />

      <Button
        text="Auto Close"
        onClick={() =>
          showNotification({
            title: 'Titulo',
            message: 'Ola Mundo',
            autoClose: 10,
          })
        }
      />
    </Flex>
  );
}
