import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { Content } from '.';

import { render } from '../../__tests__/setup';

describe('Content Component', () => {
  it('Should prioritize children instead of content', () => {
    const { getByTestId, queryByText } = render(
      <Content content={<span data-testid="content-prop">content</span>}>
        <span data-testid="children">Children</span>
      </Content>,
    );

    expect(getByTestId('children')).toBeInTheDocument();
    expect(queryByText('content-prop')).toBeNull();
  });

  it('Should display opener & closer component', () => {
    const { getByTestId } = render(
      <Content
        opener={<span data-testid="opener-component" />}
        closer={<span data-testid="closer-component" />}
        content={<span />}
      />,
    );

    expect(getByTestId('opener-component')).toBeInTheDocument();
    expect(getByTestId('closer-component')).toBeInTheDocument();
  });

  it('Should toggle render <Spinner />', () => {
    const { queryByTestId } = render(<Content loading />);

    expect(queryByTestId('content-spinner')).toBeInTheDocument();
  });

  it('Should toggle render custom <Spinner />', () => {
    const { queryByTestId } = render(<Content loading loadingComponent={<span data-testid="custom-spinner" />} />);

    const customSpinner = queryByTestId('custom-spinner');

    expect(queryByTestId('content-spinner')).toBeNull();
    expect(customSpinner).toBeInTheDocument();
    expect(customSpinner.tagName.toLowerCase()).toEqual('span');
  });
});
