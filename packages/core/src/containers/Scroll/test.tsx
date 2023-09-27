import React from 'react';

import { CustomScroll } from '.';

import { render, screen } from '../../__tests__/setup';

describe('CustomScroll', () => {
  it('render children without crashing', () => {
    const contentId = 'scroll-content';

    render(
      <CustomScroll height={100}>
        <div data-testid={contentId} />
      </CustomScroll>,
    );

    expect(screen.getByTestId(contentId)).toBeDefined();
  });
});
