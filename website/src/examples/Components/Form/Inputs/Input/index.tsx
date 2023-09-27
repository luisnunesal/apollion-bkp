import {
  Form,
  Icon,
  Input as InputComponent,
  Button,
} from '@captalys-platform/core';
import * as Yup from 'yup';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useState } from 'react';

export const Input = (p: any) => {
  const [value, setValue] = useState(() => p.value);

  return (
    <BrowserOnly>
      {() => (
        <InputComponent
          {...p}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          reset={() => setValue('')}
        />
      )}
    </BrowserOnly>
  );
};

export const InputFormExample = () => (
  <BrowserOnly>{() => <InputForm />}</BrowserOnly>
);

export const InputForm = () => {
  const [type, setType] = useState('password');
  const toggleType = () => {
    setType((type) => (type === 'password' ? 'text' : 'password'));
  };

  return (
    <Form
      handleSubmit={(e) => window.alert(JSON.stringify(e, null, 2))}
      initialValues={{
        user: 'admin@admin.com',
        password: '12345',
      }}
      fields={{
        user: {
          component: InputComponent,
          label: 'Usuario',
          validation: Yup.string().required('Obrigatorio'),
          inputProps: {
            clearable: true,
          },
        },
        password: {
          component: InputComponent,
          label: 'Senha',
          validation: Yup.string().required('Obrigatorio'),
          inputProps: {
            type,
            icon: (
              <Icon
                size="medium"
                name={type === 'password' ? 'eye' : 'eyeSlash'}
                onClick={toggleType}
              />
            ),
          },
        },
      }}
    >
      <Button text="Entrar" />
    </Form>
  );
};
