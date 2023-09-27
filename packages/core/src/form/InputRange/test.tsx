import React from 'react';

import { InputRange } from '.';

import { render, screen } from '../../__tests__/setup';

describe('Default Input Range valid props', () => {
  it('Snapshot should match default', () => {
    render(<InputRange min={0} max={200} value={50} onChange={(value: number) => null} />);
    expect(screen).toMatchSnapshot();
  });
});
