import React from 'react';

import { IconButton } from '.';

import { render, screen } from '../../__tests__/setup';
import { Icon } from '../Icon';

describe('IconButton', () => {
  it('Should display a spinner on isLoading', () => {
    const iconID = 'custom-icon';

    const { rerender } = render(<IconButton isLoading icon={<Icon name="cog" data-testid={iconID} />} />);

    expect(screen.queryByTestId(iconID)).toBeNull();

    expect(screen.getByTestId('icon-spinner')).toBeDefined();

    rerender(<IconButton icon={<Icon name="cog" data-testid={iconID} />} />);

    expect(screen.getByTestId(iconID)).toBeDefined();
  });

  it('Should display custom spinner on isLoading', () => {
    const spinnerId = 'custom-spinner';

    render(<IconButton isLoading loadingComponent={<span data-testid={spinnerId} />} icon={<Icon name="cog" />} />);

    expect(screen.getByTestId(spinnerId)).toBeDefined();
    expect(screen.queryByTestId('icon-spinner')).toBeNull();
  });

  it('Snapshot should match disabled', () => {
    render(<IconButton color="primary" disabled icon={<Icon name="cog" />} />);
    expect(screen).toMatchSnapshot();
  });

  // ---- COLORS ---- //
  it('Snapshot should match color="primary"', () => {
    render(<IconButton color="primary" icon={<Icon name="cog" />} />);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match color="secondary"', () => {
    const { container } = render(<IconButton color="secondary" icon={<Icon name="cog" />} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Snapshot should match color="tertiary"', () => {
    const { container } = render(<IconButton color="tertiary" icon={<Icon name="cog" />} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Snapshot should match color="success"', () => {
    const { container } = render(<IconButton color="success" icon={<Icon name="cog" />} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Snapshot should match color="warning"', () => {
    const { container } = render(<IconButton color="warning" icon={<Icon name="cog" />} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Snapshot should match color="danger"', () => {
    const { container } = render(<IconButton color="danger" icon={<Icon name="cog" />} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  // ---- VARIANTS ---- //
  it('Snapshot should match variant="contained"', () => {
    render(<IconButton variant="contained" icon={<Icon name="cog" />} />);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match variant="outlined"', () => {
    render(<IconButton variant="outlined" icon={<Icon name="cog" />} />);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match variant="linked"', () => {
    render(<IconButton variant="linked" icon={<Icon name="cog" />} />);
    expect(screen).toMatchSnapshot();
  });

  // ---- SIZES ---- //
  it('Snapshot should match size="medium"', () => {
    render(<IconButton size="medium" icon={<Icon name="cog" />} />);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match size="extraSmall"', () => {
    render(<IconButton size="extraSmall" icon={<Icon name="cog" />} />);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match size="small"', () => {
    render(<IconButton size="small" icon={<Icon name="cog" />} />);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match size="large"', () => {
    render(<IconButton size="large" icon={<Icon name="cog" />} />);
    expect(screen).toMatchSnapshot();
  });
});
