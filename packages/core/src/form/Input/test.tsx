import React from 'react';
import userEvent from '@testing-library/user-event';

import { Input } from '.';

import { render, screen } from '../../__tests__/setup';
import { Icon } from '../../elements/Icon';

describe('Default Input for bases of other "input types"', () => {
  it('Should call onChange on user type', () => {
    const changeFn = jest.fn();
    const inputId = 'inputText';
    const newValue = 'lol > dota';

    render(<Input data-testid={inputId} onChange={changeFn} type="text" />);

    const input = screen.getByTestId(inputId);
    userEvent.type(input, newValue);

    expect(changeFn).toHaveBeenCalledTimes(newValue.length);
  });

  it('Should call reset function', () => {
    const resetFn = jest.fn();
    const changeFn = jest.fn();

    render(<Input clearable reset={resetFn} onChange={changeFn} value="SECRET" />);

    userEvent.click(screen.getByTestId('input-reset-button'));

    expect(resetFn).toHaveBeenCalledTimes(1);
    expect(changeFn).not.toHaveBeenCalled();
  });

  it('Should display custom icon', () => {
    const iconId = 'custom-icon';
    render(<Input icon={<Icon name="cog" data-testid={iconId} />} onChange={jest.fn()} />);

    expect(screen.getByTestId(iconId)).toBeDefined();
  });

  it('Snapshot should match variant="error"', () => {
    render(<Input variant="error" onChange={jest.fn()} />);

    expect(screen).toMatchSnapshot();
    expect(screen.getByTestId('input-icon-error')).toBeDefined();
  });

  it('Snapshot should match variant="success"', () => {
    render(<Input variant="success" onChange={jest.fn()} />);

    expect(screen).toMatchSnapshot();
    expect(screen.getByTestId('input-icon-success')).toBeDefined();
  });

  it('should render a placeholder', () => {
    const inputId = 'inputText';
    const placeholderText = 'Hi! I am a placeholder';
    render(<Input data-testid={inputId} placeholder={placeholderText} onChange={jest.fn()} />);

    const input = screen.getByTestId(inputId) as HTMLInputElement;
    expect(input.placeholder).toEqual(placeholderText);
  });

  it('Snapshot should match variant=default', () => {
    render(<Input variant="default" onChange={jest.fn()} />);

    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match variant=error', () => {
    render(<Input variant="error" onChange={jest.fn()} />);

    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match variant=success', () => {
    render(<Input variant="success" onChange={jest.fn()} />);

    expect(screen).toMatchSnapshot();
  });

  it('should match input is "disabled"', () => {
    render(<Input disabled />);
    expect(screen).toMatchSnapshot();
  });
});
