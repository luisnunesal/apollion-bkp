import {
  Button,
  Checkbox,
  FieldGroup,
  Form,
  FormFieldsType,
  Input,
  InputMask,
  InputRange,
  InputSelect,
  TextArea,
  UploadCard,
} from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';
import * as Yup from 'yup';

export const FormExample = () => {
  const formFields: FormFieldsType = {
    name: {
      label: 'Nome',
      component: Input,
      validation: Yup.string().required('Required'),
      inputProps: {
        placeholder: 'Digite seu nome',
        clearable: true,
      },
    },
    email: {
      label: 'Email',
      component: Input,
      validation: Yup.string()
        .email('não é um email válido')
        .required('Required'),
      inputProps: {
        type: 'email',
        clearable: true,
        placeholder: 'seu.email@apollion.com',
      },
    },
    password: {
      label: 'Senha',
      component: Input,
      validation: Yup.string().required('Required'),
      inputProps: {
        type: 'password',
        clearable: true,
        placeholder: 'Digite sua senha',
      },
    },
    cellphone: {
      label: 'Celular',
      component: InputMask,
      validation: Yup.string().required('Required'),
      inputProps: {
        type: 'text',
        mask: '(00) 0 0000-0000',
        placeholder: '(xx) x xxxx-xxxx',
        clearable: true,
      },
    },
    comment: {
      label: 'Descrição',
      component: TextArea,
      validation: Yup.string().required('Required'),
      inputProps: {
        maxLength: 120,
      },
    },
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
    age: {
      label: 'Idade',
      component: Input,
      validation: Yup.number().required('Required'),
      inputProps: {
        type: 'number',
        placeholder: 'Idade',
        maxLength: 3,
      },
    },
    olderThan18: {
      label: 'Eu sou maior de 18 anos',
      component: Checkbox,
      validation: Yup.boolean().required('Required'),
      inputProps: {
        label: 'Eu sou maior de 18 anos',
      },
    },
    money: {
      label: 'Saldo Atual',
      component: InputRange,
      validation: Yup.number().required('Required'),
      inputProps: {
        min: 40,
        max: 99,
        step: 1,
        display: true,
      },
    },
    file: {
      label: 'Arquivo',
      component: UploadCard,
      validation: Yup.mixed().test(
        'hasFile',
        'Um arquivo é necesseário',
        (value) => Array.isArray(value)
      ),
      inputProps: {
        compact: true,
        text: 'upload',
        accept: '.png',
        onChange: (value) => console.log({ value }),
      },
    },
    async: {
      label: 'Async',
      component: InputSelect,
      validation: Yup.string().required('Required'),
      inputProps: {
        loadOptions: (inputValue) => {
          // return fetchQuery(Environment, graphQLQuery, variables)
          return fetch(
            `https://jsonplaceholder.typicode.com/todos?filter=${inputValue}`
          )
            .then((res) => res.json())
            .then((response) => {
              const options = response.map((item) => ({
                value: item.id,
                label: item.title,
              }));

              if (!inputValue) {
                return options;
              }

              return options.filter((item) => item.label.includes(inputValue));
            });
        },
      },
    },
    payment_device: {
      label: 'Selecione as operadoras com quem trabalha:',
      validation: Yup.string().required('Required'),
      component: FieldGroup,
      inputProps: {
        type: 'checkbox',
        columns: 2,
        gap: { column: 40, row: 15 },
        inputs: [
          { name: 'getnet', value: 'getnet', label: 'Getnet' },
          { name: 'rede', value: 'rede', label: 'Rede' },
          { name: 'bin', value: 'bin', label: 'Bin' },
          { name: 'cielo', value: 'cielo', label: 'Cielo' },
          { name: 'stone', value: 'stone', label: 'Stone' },
          { name: 'outros', value: 'outros', label: 'Outros' },
        ],
      },
    },
    usage_time: {
      label: 'Há quanto tempo você trabalha com elas?',
      validation: Yup.string().required('Required'),
      component: FieldGroup,
      inputProps: {
        type: 'radio',
        gap: 10,
        inputs: [
          { id: 'v1', value: '<6M', label: 'Menos de 6 meses' },
          { id: 'v2', value: '6M-1A', label: 'De 6 meses a 1 ano' },
          { id: 'v3', value: '>1A', label: 'Mais de 1 ano' },
        ],
      },
    },
  };

  const FormGrid = {
    medias: {
      xs: {
        columns: '1fr',
        rows: '10fr',
        areas: `
          "name"
          "email"
          "password"
          "cellphone"
          "comment"
          "gender"
          "age"
          "async"
          "file"
          "olderThan18"
          "money"
          "payment_device"
          "usage_time"
          "button"
        `,
        columnGap: 'micro',
        rowGap: 'micro',
      },
      sm: {
        columns: '2fr',
        rows: '10fr',
        areas: `
          "name name"
          "email email"
          "password password"
          "cellphone cellphone"
          "comment comment"
          "gender age"
          "async async"
          "olderThan18 ."
          "file file"
          "money money"
          "payment_device payment_device"
          "usage_time usage_time"
          "button button"
        `,
        columnGap: 'xs',
        rowGap: 'xs',
      },
    },
  };

  const initialValues = {
    email: '',
    name: 'Nome inicial',
    payment_device: ['getnet', 'stone'],
    usage_time: '6M-1A',
  };

  return (
    <BrowserOnly fallback={<div>Carregando ...</div>}>
      {() => (
        <Form
          fields={formFields}
          handleSubmit={console.log}
          // @ts-ignore
          medias={FormGrid.medias}
          initialValues={initialValues}
        />
      )}
    </BrowserOnly>
  );
};

export function BasicFormExample() {
  return (
    <BrowserOnly fallback={<div>Carregando ...</div>}>
      {() => (
        <Form
          // @ts-ignore
          autoComplete="nope"
          handleSubmit={(values) => alert(JSON.stringify(values))}
          fields={{
            email: {
              label: 'Email',
              component: Input,
              validation: Yup.string()
                .email("isn't a valid email")
                .required('Required'),
              inputProps: {
                type: 'email',
                placeholder: 'your.email@apollion.com',
                autoComplete: 'off',
              },
            },
            password: {
              label: 'Password',
              component: Input,
              validation: Yup.string().required('Required'),
              inputProps: {
                type: 'password',
                placeholder: 'Type your password',
              },
            },
            olderThan18: {
              label: 'Terms of Service',
              component: Checkbox,
              validation: Yup.boolean().required('Required'),
              inputProps: {
                label: 'Aceito qualquer coisa',
              },
            },
          }}
        >
          {({ olderThan18, ...values }) => {
            const isDisabled = !olderThan18;

            return <Button text="Custom" type="submit" disabled={isDisabled} />;
          }}
        </Form>
      )}
    </BrowserOnly>
  );
}

export function DynamicFormExample() {
  return (
    <BrowserOnly fallback={<div>Carregando ...</div>}>
      {() => (
        <Form
          handleSubmit={(values) => alert(JSON.stringify(values))}
          conditionalFields={{
            email: ({ input_options }) =>
              Array.isArray(input_options) && input_options.includes('email'),
            password: ({ input_options }) =>
              Array.isArray(input_options) &&
              input_options.includes('password'),
            cellphone: ({ input_options }) =>
              Array.isArray(input_options) &&
              input_options.includes('cellphone'),
            gender: ({ input_options }) =>
              Array.isArray(input_options) && input_options.includes('gender'),
            upload: ({ input_options }) =>
              Array.isArray(input_options) && input_options.includes('upload'),
            range: ({ input_options }) =>
              Array.isArray(input_options) && input_options.includes('range'),
            comment: ({ input_options }) =>
              Array.isArray(input_options) && input_options.includes('comment'),
          }}
          fields={{
            input_options: {
              label: 'Selecione as operadoras com quem trabalha:',
              validation: Yup.string().required('Required'),
              component: FieldGroup,
              inputProps: {
                type: 'checkbox',
                columns: 3,
                gap: { column: 40, row: 15 },
                inputs: [
                  { name: 'email', value: 'email', label: 'E-Mail' },
                  { name: 'password', value: 'password', label: 'Password' },
                  {
                    name: 'cellphone',
                    value: 'cellphone',
                    label: 'Cellphone',
                  },
                  { name: 'gender', value: 'gender', label: 'Gender' },
                  { name: 'upload', value: 'upload', label: 'Upload' },
                  { name: 'range', value: 'range', label: 'Range' },
                  { name: 'comment', value: 'comment', label: 'Comment' },
                ],
              },
            },
            email: {
              label: 'Email',
              component: Input,
              validation: Yup.string()
                .email("isn't a valid email")
                .required('Required'),
              inputProps: {
                type: 'email',
                placeholder: 'your.email@apollion.com',
                autoComplete: 'off',
              },
            },
            password: {
              label: 'Password',
              component: Input,
              validation: Yup.string().required('Required'),
              inputProps: {
                type: 'password',
                placeholder: 'Type your password',
              },
            },
            cellphone: {
              label: 'Celular',
              component: InputMask,
              validation: Yup.string().required('Required'),
              inputProps: {
                type: 'text',
                mask: '(00) 0 0000-0000',
                placeholder: '(xx) x xxxx-xxxx',
                clearable: true,
              },
            },
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
            range: {
              label: 'Current Balance',
              component: InputRange,
              validation: Yup.number().required('Required'),
              inputProps: {
                min: 40,
                max: 99,
                step: 1,
                display: true,
              },
            },
            upload: {
              label: 'File',
              component: UploadCard,
              validation: Yup.mixed().test(
                'hasFile',
                'A file is required',
                (value) => Array.isArray(value)
              ),
              inputProps: {
                compact: true,
                text: 'upload',
                accept: '.png',
                onChange: (value) => console.log({ value }),
              },
            },
            comment: {
              label: 'Descrição',
              component: TextArea,
              validation: Yup.string().required('Required'),
              inputProps: {
                maxLength: 120,
              },
            },
            olderThan18: {
              label: 'Terms of Service',
              component: Checkbox,
              validation: Yup.boolean().required('Required'),
              inputProps: {
                label: 'Aceito qualquer coisa',
              },
            },
          }}
        >
          {({ olderThan18, ...values }) => {
            const isDisabled = !olderThan18;
            return <Button text="Custom" type="submit" disabled={isDisabled} />;
          }}
        </Form>
      )}
    </BrowserOnly>
  );
}
