import React, { useState, useCallback, useRef, useMemo } from 'react';
import {
  Button,
  Icon,
  Flex,
  IconButton,
  Notification,
  createTheme,
  useNotification,
  ApollionProvider,
} from '@captalys-platform/core';
import debounce from 'lodash.debounce';

export function ColorPicker(props: any) {
  const inputRef = useRef(null);

  const triggerComponent = React.cloneElement(props.children, {
    onClick: () => inputRef.current.click(),
  });

  return (
    <>
      {triggerComponent}

      <input
        hidden
        type="color"
        ref={inputRef}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </>
  );
}

export function ColorsCustomizerExample() {
  const [primary, setPrimary] = useState(() => '#c511e6');

  const changePrimary = useCallback(debounce(setPrimary, 250), []);

  const theme = useMemo(
    () =>
      createTheme({
        colors: {
          primary,
        },
      }),
    [primary]
  );

  return (
    <ApollionProvider theme={theme}>
      <Flex p="large" gap="medium" bgColor="grayscale.5" borderRadius="sm">
        <ColorPicker value={primary} onChange={changePrimary}>
          <Button
            icon={<Icon name="edit" />}
            text="Editar cor Primary"
            size="small"
          />
        </ColorPicker>

        <ExampleNotificationTrigger />

        <Flex flexDirection="row" gap="large" style={{ color: primary }}>
          <Icon name="alertInfo" size="large" />
          <Icon name="arrowCircleDown" size="large" />
          <Icon name="cog" size="large" />
          <Icon name="picture" size="large" />
        </Flex>

        <Notification
          title="Uma notificação"
          message={`Click em "Editar cor Primary" para alterar a cor`}
          action={<Button size="extraSmall" text="Desfazer" />}
        />
      </Flex>
    </ApollionProvider>
  );
}

function ExampleNotificationTrigger(props: any) {
  const { showNotification } = useNotification();

  const displayNOtification = () => {
    showNotification({
      title: 'Titulo',
      message: 'Cor customizada',
      autoClose: 10,
    });
  };

  return (
    <Flex flexDirection="row" gap="large" alignItems="center">
      <IconButton
        onClick={displayNOtification}
        icon={<Icon name="alertInfo" />}
        size="extraSmall"
      />
      <IconButton
        onClick={displayNOtification}
        icon={<Icon name="arrowCircleDown" />}
        size="small"
      />
      <IconButton
        onClick={displayNOtification}
        icon={<Icon name="cog" />}
        size="medium"
      />
      <IconButton
        onClick={displayNOtification}
        icon={<Icon name="picture" />}
        size="large"
      />
    </Flex>
  );
}
