import React from 'react';
import {
  createTheme,
  ApollionProvider,
  Button,
  Flex,
} from '@captalys-platform/core';

export const CreateThemeExample = () => {
  return (
    <ApollionProvider
      theme={createTheme({
        colors: {
          baseDark: '#26292E',
          baseLight: '#FCFCFC',
          deepDark: '#000',
          deepLight: '#FFF',
          main: '#003750',
          opposite: '#003750',
          complementary: '#F6BA20',
          information: '#3399FF',
          success: '#2CB567',
          danger: '#E12712',
          warning: 'green',
          primary: '#32AFDC',
          secondary: '#2D81AA',
          tertiary: '#2CE571',
        },
      })}
    >
      <Button text="Enviar" color="warning" />
    </ApollionProvider>
  );
};
