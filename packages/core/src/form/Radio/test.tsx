import 'jest-styled-components';

import React from 'react';

import { Radio } from '.';

import { fireEvent, render } from '../../__tests__/setup';

describe.skip('Radio', () => {
  it('Should render with disabled={true}', () => {
    const { getByLabelText, container } = render(<Radio name="Input" label="Input" disabled />);

    const input = getByLabelText('Input') as HTMLInputElement;
    fireEvent.click(container);

    expect(container.firstChild).toMatchSnapshot();
    expect(input.checked).toBe(false);
  });

  it('Should match the layout', () => {
    const { container } = render(<Radio name="Input" label="Input" />);

    fireEvent.click(container);
    expect(container.firstChild).toMatchSnapshot();
  });
});
