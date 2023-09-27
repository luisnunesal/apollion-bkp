import React, { useState } from 'react';

import { Flex, Form, InputDate, newField } from '@captalys-platform/core';

import { isValid, parse, format } from 'date-fns';
import * as Yup from 'yup';

export function InputDateExample() {
  const [value, setDate] = useState('2012-12-12');

  return (
    <Flex gap="small">
      <InputDate value={value} onChange={(e) => setDate(e.target.value)} />
      <pre>
        <code>{JSON.stringify({ value }, null, 2)}</code>
      </pre>
    </Flex>
  );
}

export function InputDateFormExample() {
  const initialDate = format(new Date(), 'yyyy-MM-dd');

  return (
    <Form
      handleSubmit={(v) => alert(JSON.stringify(v, null, 2))}
      initialValues={{
        birthDay: initialDate,
      }}
      fields={{
        birthDay: newField({
          label: 'Data de Nascimento',
          component: InputDate,
          validation: Yup.mixed()
            .test({
              name: 'date',
              test: (d) => isValid(parse(d, 'yyyy-MM-dd', new Date())),
              message: 'Insira uma data válida',
            })
            .required('Required'),
        }),
      }}
    />
  );
}
