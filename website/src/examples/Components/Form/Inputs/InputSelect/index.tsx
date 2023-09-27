import React from 'react';
import {
  Button,
  Checkbox,
  Flex,
  Form,
  Input,
  InputSelect,
} from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import * as Yup from 'yup';

export function InputSelectExampleButton() {
  return (
    <BrowserOnly fallback={<div>Carregando ...</div>}>
      {() => (
        <Form
          // @ts-ignore
          autoComplete="nope"
          handleSubmit={(values) => alert(JSON.stringify(values))}
          fields={{
            gender: {
              label: 'Gênero',
              component: InputSelect,
              validation: Yup.string().required('Required'),
              inputProps: {
                placeholder: 'Selecione seu gênero',
                isSearchable: false,
                isClearable: true,
                options: [
                  { label: 'Masculino', value: 'M' },
                  { label: 'Feminino', value: 'F' },
                  { label: 'Outro', value: 'N/A' },
                ],
              },
            },
            person: {
              label: 'Tipo de pessoa',
              component: InputSelect,
              validation: Yup.boolean().required('Required'),
              inputProps: {
                placeholder: 'Tipo pessoa',
                loadingPlaceholder: 'Carregando...',
                isClearable: true,
                options: [
                  { value: 'PF', label: 'PF' },
                  { value: 'PJ', label: 'PJ' },
                ],
              },
            },
          }}
        >
          {({ gender, person }) => {
            const isDisabled = !person || !gender;

            return (
              <Button text="Avançar" type="submit" disabled={isDisabled} />
            );
          }}
        </Form>
      )}
    </BrowserOnly>
  );
}
