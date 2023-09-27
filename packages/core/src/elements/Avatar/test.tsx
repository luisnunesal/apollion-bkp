import React from 'react';

import { Avatar } from '.';

import { render, screen } from '../../__tests__/setup';

describe('Avatar', () => {
  it('Should render Avatar with text content', () => {
    const label = 'ABC';

    render(<Avatar label={label} />);

    expect(screen.getByText(label)).toBeDefined();
  });

  it('Should render Avatar with Icon content', () => {
    render(<Avatar icon="user" />);

    expect(screen.getByTestId('avatar-icon')).toBeDefined();
  });

  it('Should render Avatar with Image content', () => {
    render(<Avatar imgSrc="http://picsum.photos/500?random=2" />);

    expect(screen.getByTestId('avatar-image')).toBeDefined();
  });

  it('Should prioritize Image over others label and Icon', () => {
    const label = 'ABC';

    render(<Avatar imgSrc="http://picsum.photos/500?random=2" icon="user" label={label} />);

    expect(screen.getByTestId('avatar-image')).toBeDefined();
    expect(screen.queryByTestId('avatar-icon')).toBeNull();
    expect(screen.queryByText(label)).toBeNull();
  });
});
