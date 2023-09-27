import React from 'react';

import { Icon } from '.';

import { render, screen } from '../../__tests__/setup';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => `<svg viewBox="0 0 16 4" data-testid="fetch-icon">
      <path d="M2 4a2 2 0 100-4 2 2 0 000 4zM8 4a2 2 0 100-4 2 2 0 000 4zM14 4a2 2 0 100-4 2 2 0 000 4z" />
    </svg>`,
  }),
);

afterAll(() => {
  // @ts-ignore
  fetch.mockClear();
});

const CustomIcon = (props: any) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z" />
  </svg>
);

describe('Icon', () => {
  it('Should render custom icon component', () => {
    const iconId = 'custom-icon';
    render(<Icon icon={<span data-destid={iconId} />} />);

    expect(screen.queryByTestId(iconId)).toBeDefined();
  });

  it('Should prioritize name prop over icon', () => {
    const customIconId = 'custom-icon';
    const nameIconId = 'name-icon';

    render(
      // @ts-ignore
      <Icon name="running" iconProps={{ 'data-testid': nameIconId }} icon={<span data-destid={customIconId} />} />,
    );

    expect(screen.getByTestId(nameIconId)).toBeDefined();
    expect(screen.queryByTestId(customIconId)).toBeNull();
  });

  it('Should render children as icon', () => {
    const iconId = 'icon-children';

    render(
      <Icon>
        <CustomIcon data-testid={iconId} />
      </Icon>,
    );

    expect(screen.getByTestId(iconId)).toBeDefined();
  });

  it('Should prioritize children prop over name', () => {
    const iconId = 'icon-children';

    render(
      <Icon name="check">
        <CustomIcon data-testid={iconId} />
      </Icon>,
    );

    expect(screen.getByTestId(iconId)).toBeDefined();
  });

  it('Should fetch icon from url', async () => {
    render(<Icon src="/icon" />);

    const svg = await screen.findByTestId('fetch-icon');
    expect(svg).toBeDefined();
  });
});
