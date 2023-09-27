import 'jest-styled-components';

import React from 'react';

import { Headline } from './component';

import { render, screen } from '../../__tests__/setup';

describe('Headline', () => {
  it('Should match snapshot', () => {
    render(<Headline variant="h1" text="Ola mundo cruel" />);
    expect(screen).toMatchSnapshot();
  });

  it('Should Change size and color on Desktop', () => {
    const { rerender } = render(<Headline variant="h5" text="brill" />);

    expect(screen.getByText('brill')).toHaveStyleRule('font-size', '20px');
    expect(screen.getByText('brill')).toHaveStyleRule('color', '#19586E');

    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 200 });
    window.dispatchEvent(new Event('resize'));
    // Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 200 });
    // window.dispatchEvent(new Event('resize'));

    rerender(<Headline variant="h5" text="brill" />);

    expect(screen.getByText('brill')).toHaveStyleRule('font-size', '24px', {
      media: '(min-width: 767px)',
    });

    expect(screen.getByText('brill')).toHaveStyleRule('color', '#134253', {
      media: '(min-width: 767px)',
    });
  });

  it('Should prioritize "children" over "text" props', () => {
    const children = 'CHILDREN';
    render(<Headline text="brill">{children}</Headline>);

    expect(screen.getByText(children).textContent).toEqual(children);
  });
});
