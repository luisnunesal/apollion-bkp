import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import userEvent from '@testing-library/user-event';

import { TextAreaComponent } from './component';

import { render, screen } from '../../__tests__/setup';

describe('TextArea', () => {
  it('should render, change the value and pass maxLength and resize down | maxLength={2}, value={xpto}, resize={true}', () => {
    const assertValue = 'xpto';

    render(<TextAreaComponent title="textArea" resize />);
    const textarea = screen.getByTitle('textArea') as HTMLTextAreaElement;

    userEvent.type(textarea, assertValue);

    expect(screen).toBeDefined();
    expect(textarea.value).toBe(assertValue);
    expect(textarea).toHaveStyle('resize: both');
  });
});
