import 'jest-styled-components';

import React from 'react';

import { Skeleton } from '.';

import { render } from '../../__tests__/setup';
import { Rect } from '../../scenario';

describe('Skeleton', () => {
  it('Should render', () => {
    const { container } = render(
      <Skeleton width={200} height={200}>
        <Rect width="100%" />
      </Skeleton>,
    );

    expect(container).toBeDefined();
  });
});
