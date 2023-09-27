import React from 'react';

import { Text } from './component';

import { render, screen } from '../../__tests__/setup';

describe('Text', () => {
  it('Should match snapshot', () => {
    render(<Text variant="h1">Hello I am a Text</Text>);
    expect(screen).toMatchSnapshot();
  });

  it('Should render with children equals "Hello I am a Text"', () => {
    render(<Text variant="h1">Hello I am a Text</Text>);
    expect(screen.getByText('Hello I am a Text')).toBeDefined();
  });

  it('should render a correct variant', () => {
    const variantProp = 'h1';
    const content = 'TEXT';
    render(<Text variant={variantProp} text={content} />);

    expect(screen.getByText(content).localName).toEqual(variantProp);
  });
});
