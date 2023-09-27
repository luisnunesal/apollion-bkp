import 'jest-styled-components';

import React from 'react';
import userEvent from '@testing-library/user-event';

import { Field } from '.';

import { render, screen } from '../../__tests__/setup';

describe('Field', () => {
  const EmptyComponent = () => <></>;

  // ---- LABEL ---- //
  it('Should render with label', () => {
    render(<Field component={EmptyComponent} label="Input" name="Input" />);
    expect(screen.queryByLabelText('Input')).toBeDefined();
  });

  it('Should render with hideLabel={true}', () => {
    render(<Field component={EmptyComponent} label="Input" name="Input" hideLabel />);
    expect(screen.queryByLabelText('Input')).toBeNull();
  });

  it('Should render optionalText', () => {
    render(<Field component={EmptyComponent} optionalText="optional" />);

    expect(screen.queryByText('optional')).toBeDefined();
  });

  // ---- VARIANTS ---- //
  it('Snapshot should match variant="default"', () => {
    render(<Field component={EmptyComponent} name="Input" />);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match variant="error"', () => {
    render(<Field component={EmptyComponent} name="Input" error />);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match variant="success"', () => {
    render(<Field component={EmptyComponent} name="Input" success />);
    expect(screen).toMatchSnapshot();
  });

  // ---- HINTS ---- //
  it('Snapshot should match hintText="hint"', () => {
    render(<Field component={EmptyComponent} name="Input" hintText="hint" />);
    expect(screen.getAllByText('hint')).toBeDefined();
  });

  it('Snapshot should match hintSuccessText="success"', () => {
    render(<Field component={EmptyComponent} name="Input" success hintSuccessText="success" />);
    expect(screen.getAllByText('success')).toBeDefined();
  });

  it('Snapshot should match hinterrorText="error"', () => {
    render(<Field component={EmptyComponent} name="Input" error hintErrorText="error" />);
    expect(screen.getAllByText('error')).toBeDefined();
  });

  // ---- onChange ---- //
  it('Snapshot call onChange / setFieldValue', () => {
    const onChangeMockFn = jest.fn();
    const InputComponent = (props: any) => <input id={props.id} name={props.name} onChange={props.onChange} />;

    render(
      <Field
        component={InputComponent}
        name="Input"
        label="Input"
        hintText="hint"
        setFieldValue={onChangeMockFn}
        // inputProps={{ onChange: onChangeMockFn }}
      />,
    );

    const input = screen.getByLabelText('Input') as HTMLInputElement;
    userEvent.type(input, 'changed');

    expect(input.value).toBe('changed');
    expect(onChangeMockFn).toHaveBeenCalledTimes(7);
  });
});
