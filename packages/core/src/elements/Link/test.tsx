import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import { LinkComponent as Link } from './component';

import { render, screen } from '../../__tests__/setup';

// MOCKS
const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  // @ts-ignore
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Link', () => {
  // ---- SNAPSHOT ---- //
  it('Should match snapshot', () => {
    render(
      <Router>
        <Link href="#!" text="Hello World" />
      </Router>,
    );
    expect(screen).toMatchSnapshot();
  });

  // ---- CONTENT ---- //
  it('Should render with text="Hello World"', () => {
    render(
      <Router>
        <Link href="#!" text="Hello World" />
      </Router>,
    );
    expect(screen.getByText('Hello World')).toBeDefined();
  });

  it('Should render with children equals "Hello World"', () => {
    render(
      <Router>
        <Link href="#!">Hello World</Link>
      </Router>,
    );
    expect(screen.getByText('Hello World')).toBeDefined();
  });

  it('Should prioritize children instead of text', () => {
    render(
      <Router>
        <Link href="#!" text="Text">
          Children
        </Link>
      </Router>,
    );
    expect(screen.getByText('Children')).toBeDefined();
  });
});
