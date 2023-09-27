import React from 'react';

import { InputRangeMultiple } from '.';

import { render, screen } from '../../__tests__/setup';

describe('Default Input Range valid props', () => {
  it('Snapshot should match default', () => {
    render(<InputRangeMultiple min="0" max="100" leftValue="25" rightValue="75" />);
    expect(screen).toMatchSnapshot();
  });
});
