import { ApollionProvider, Button, Flex, GlobalStyle, Typography, useNotification } from '@captalys-platform/core';
import React from 'react';

function App() {
  const { showNotification } = useNotification();

  return (
    <Flex gap="giant" p="giant">
      <Typography align="center" variant="h2" color="warning.dark">
        Ola, <Typography color="main">Mundo</Typography>
      </Typography>

      <Button
        data-testid="notify_button"
        text="Aperte Aqui"
        onClick={() => {
          showNotification({
            title: 'kkkkk',
            message: 'ERRRROOOUUUUUUUUU',
            autoClose: 10,
          });
        }}
      />
    </Flex>
  );
}

export function Root() {
  return (
    <ApollionProvider>
      <GlobalStyle />
      <App />
    </ApollionProvider>
  );
}
