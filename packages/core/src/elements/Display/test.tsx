import 'jest-styled-components';

import React from 'react';

import { Display } from './component';

import { render, screen } from '../../__tests__/setup';

describe('Typography', () => {
  it('Should match snapshot', () => {
    render(<Display variant="h1" text="Ola mundo cruel" />);
    expect(screen).toMatchSnapshot();
  });

  it('Should Change size and color on mobile', () => {
    const { rerender } = render(<Display variant="h2" text="brill" />);

    expect(screen.getByText('brill')).toHaveStyleRule('font-size', '52px');
    expect(screen.getByText('brill')).toHaveStyleRule('color', '#134253');

    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 200 });
    window.dispatchEvent(new Event('resize'));

    rerender(<Display variant="h2" text="brill" />);

    expect(screen.getByText('brill')).toHaveStyleRule('font-size', '28px', {
      media: '(max-width: 766.96px)',
    });
  });

  it('Should prioritize "children" over "text" props', () => {
    const children = 'CHILDREN';
    render(<Display text="brill">{children}</Display>);

    expect(screen.getByText(children).textContent).toEqual(children);
  });
});
