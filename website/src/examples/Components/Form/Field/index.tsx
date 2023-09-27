import React from 'react';
import { Button, Form, UploadCard } from '@captalys-platform/core';

import * as Yup from 'yup';
import BrowserOnly from '@docusaurus/BrowserOnly';

export function FieldFormExample() {
  return (
    <BrowserOnly>
      {() => (
        <Form
          handleSubmit={console.log}
          fields={{
            file: {
              label: 'Envie suas fotos (PNG)',
              optionalText: 'Obrigatorio - Não envie nudes',
              component: UploadCard,
              validation: Yup.mixed().test(
                'hasFile',
                'Pelo menos um arquivo deve ser enviado',
                (value) => Array.isArray(value)
              ),
              inputProps: {
                required: true,
                compact: true,
                text: 'upload',
                accept: '.png',
              },
            },
          }}
        >
          <Button size="small" text="Enviar" />
        </Form>
      )}
    </BrowserOnly>
  );
}
