import React from 'react';

import { InputSelect } from './component';

import { cleanup, render } from '../../__tests__/setup';

const defaultOptions = [
  { label: 'option 1', value: 'value 1' },
  { label: 'option 2', value: 'value 2' },
];

describe.skip('Input Select', () => {
  afterEach(cleanup);

  it('pass a default value', () => {
    const defaultValue = { label: 'default label', value: 'default value' };

    const { container } = render(<InputSelect options={defaultOptions} defaultValue={defaultValue} />);

    const node = container.querySelector('.react-select__single-value');
    expect(node?.innerHTML).toEqual(defaultValue.label);
  });

  it('pass a value', () => {
    const value = { label: 'value label', value: 'value value' };

    const { container } = render(<InputSelect options={defaultOptions} value={value} />);

    const node = container.querySelector('.react-select__single-value');

    expect(node?.innerHTML).toEqual(value.label);
  });
});
