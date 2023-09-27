import React, { useState } from 'react';
import {
  Button,
  Icon,
  Form,
  InputMask as InputMaskComponent,
  InputMaskInterface,
} from '@captalys-platform/core';

import { isValid, parse } from 'date-fns';
import * as Yup from 'yup';

import BrowserOnly from '@docusaurus/BrowserOnly';

export const InputMask = (props: InputMaskInterface) => {
  const [value, setValue] = useState('');

  return (
    <InputMaskComponent
      {...props}
      value={value}
      onChange={setValue}
      reset={() => setValue('')}
    />
  );
};

export const InputMaskDateExample = () => (
  <BrowserOnly>{() => <InputMaskDate />}</BrowserOnly>
);

const InputMaskDate = () => {
  return (
    <Form
      handleSubmit={(e) => alert(JSON.stringify(e, null, 2))}
      fields={{
        birthDate: {
          component: InputMaskComponent,
          label: 'Data de Nascimento',
          inputProps: {
            mask: '00/00/0000',
            placeholder: 'dia/mês/ano',
            clearable: true,
          },
          validation: Yup.mixed()
            .test({
              name: 'date',
              test: (d) => isValid(parse(d, 'dd/MM/yyyy', new Date())),
              message: 'Insira uma data válida',
            })
            .required('Required'),
        },
      }}
    >
      <Button
        mt="medium"
        text="Validar"
        size="small"
        icon={<Icon name="arrowRight" />}
        iconPosition="right"
      />
    </Form>
  );
};
