import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Root } from './App';

test('renders the button', () => {
  const { getByTestId } = render(<Root />);

  expect(getByTestId('notify_button')).toHaveTextContent('Aperte Aqui');
});
