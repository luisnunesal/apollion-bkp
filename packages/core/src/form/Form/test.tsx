import React from 'react';
import { cleanup, fireEvent, render, wait } from '@testing-library/react';

import { newField } from './helpers';
import { FormFieldsType, FormInterface } from './interface';
import { Form } from '.';

import { ApollionProvider } from '../../themes/ThemeProvider';
import { Checkbox, Input, InputMask, InputSelect } from '..';

function createProps<Fields extends FormFieldsType>(props?: FormInterface<Fields>): FormInterface<Fields> {
  const fields: FormFieldsType = {
    name: newField({
      component: Input,
      label: 'Name',
      inputProps: {
        type: 'text',
        placeholder: 'name',
      },
    }),
  };

  return {
    handleSubmit: jest.fn(),
    fields,
    ...props,
  };
}

describe.skip('Input Select', () => {
  afterEach(cleanup);

  it('renders a simple text field', () => {
    const props = createProps();

    const { getByPlaceholderText } = render(<Form {...props} />);

    const inputNode = getByPlaceholderText('name');

    expect(inputNode).toBeTruthy();
  });

  it('submits a simple form and get the values back', async () => {
    const props = createProps();

    props.initialValues = {
      name: 'test value',
    };

    props.handleSubmit = (values) => {
      expect(values.name).toEqual(props.initialValues.name);
    };

    const { container } = render(<Form {...props} />);

    const formNode = container.querySelector('form');

    await wait(() => {
      fireEvent.submit(formNode);
    });
  });

  it('changes the value of input text', async () => {
    const props = createProps();
    const changeValue = 'value to be changed';

    props.handleSubmit = (values) => {
      expect(values.name).toEqual(changeValue);
    };

    const { container, getByPlaceholderText } = render(<Form {...props} />);

    const formNode = container.querySelector('form');
    const textInputNode = getByPlaceholderText(props.fields.name.inputProps.placeholder);

    fireEvent.change(textInputNode, {
      target: { value: changeValue },
    });

    await wait(() => {
      fireEvent.submit(formNode);
    });
  });

  it('should return all the submitted values correctly', async () => {
    const props = createProps();

    props.fields = {
      ...props.fields,
      email: newField({
        label: 'Email',
        component: Input,
        inputProps: {
          type: 'email',
          placeholder: 'your.email@apollion.com',
        },
      }),
      password: newField({
        label: 'Password',
        component: Input,
        inputProps: { type: 'password', placeholder: 'Type your password' },
      }),
      cellphone: newField({
        label: 'Cellphone',
        component: InputMask,
        inputProps: {
          placeholder: '(xx) x xxxx-xxxx',
          mask: '(00) 0 0000-0000',
        },
      }),
      gender: newField({
        label: 'Gender',
        component: InputSelect,
        inputProps: {
          options: [
            { label: 'Male', value: 'MALE' },
            { label: 'Female', value: 'FEMALE' },
            { label: 'Other', value: 'OTHER' },
          ],
          placeholder: 'Select your gender',
          isSearchable: false,
          isClearable: true,
        },
      }),
      age: newField({
        label: 'Age',
        component: Input,
        inputProps: { type: 'number', placeholder: 'Age', maxLength: 3 },
      }),
      olderThan18: newField({
        label: "I'm older than 18",
        hideLabel: true,
        component: Checkbox,
      }),
    };

    const indexOfOptionToBeTested = 1;

    const changeValues = {
      name: 'test',
      email: 'test@test.com',
      password: 'password test',
      cellphone: '11912341234',
      gender: props.fields.gender.inputProps.options[indexOfOptionToBeTested].value,
      age: '18',
      olderThan18: false,
    };

    props.handleSubmit = (values) => {
      const formatCellphone = (cellphone: string) => cellphone.replace(/\D/g, '');

      const expectedValues = {
        ...values,
        olderThan18: values.olderThan18 === '' ? false : values.olderThan18,
        cellphone: formatCellphone(values.cellphone as string),
      };

      expect(expectedValues).toEqual(changeValues);
    };

    const { container, getByPlaceholderText } = render(
      <ApollionProvider>
        <Form {...props} />
      </ApollionProvider>,
    );

    const nodes = {
      form: container.querySelector('form'),
      name: getByPlaceholderText(props.fields.name.inputProps.placeholder),
      email: getByPlaceholderText(props.fields.email.inputProps.placeholder),
      password: getByPlaceholderText(props.fields.password.inputProps.placeholder),
      cellphone: getByPlaceholderText(props.fields.cellphone.inputProps.placeholder),
      age: getByPlaceholderText(props.fields.age.inputProps.placeholder),
      olderThan18: container.querySelector('input[type=checkbox]'),
      // money: container.querySelector('input[type=range]'),
    };

    const dropdownNode = container.querySelector('div[class*=IndicatorsContainer]');

    fireEvent.keyDown(dropdownNode!, { keyCode: 40 });

    const firstOptionNode = container.querySelectorAll('div[class*=option]')[indexOfOptionToBeTested];

    fireEvent.click(firstOptionNode);

    fireEvent.change(nodes.name, {
      target: { value: changeValues.name },
    });

    fireEvent.change(nodes.email, {
      target: { value: changeValues.email },
    });

    fireEvent.change(nodes.password, {
      target: { value: changeValues.password },
    });

    fireEvent.change(nodes.cellphone, {
      target: { value: changeValues.cellphone },
    });

    changeValues.olderThan18 && fireEvent.click(nodes.olderThan18);

    fireEvent.change(nodes.age, {
      target: { value: changeValues.age },
    });

    await wait(() => {
      fireEvent.submit(nodes.form);
    });
  });
});
