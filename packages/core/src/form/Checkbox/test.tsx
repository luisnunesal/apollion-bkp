import 'jest-styled-components';

import React from 'react';

import { Checkbox } from '.';

import { fireEvent, render } from '../../__tests__/setup';

describe('Checkbox', () => {
  it('Should render', () => {
    const { queryByLabelText } = render(<Checkbox name="Input" label="Input" />);
    expect(queryByLabelText('Input')).toBeDefined();
  });

  it('Should render with disabled={true}', () => {
    const { getByLabelText, container } = render(<Checkbox name="Input" label="Input" disabled />);

    const input = getByLabelText('Input') as HTMLInputElement;
    fireEvent.click(container);

    expect(container.firstChild).toMatchSnapshot();
    expect(input.checked).toBe(false);
  });

  it('Should match the layout', () => {
    const { container } = render(<Checkbox name="Input" label="Input" />);

    fireEvent.click(container);
    expect(container.firstChild).toMatchSnapshot();
  });
});
