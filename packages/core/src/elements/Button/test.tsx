import 'jest-styled-components';

import React from 'react';

import { Button } from '.';

import { render, screen } from '../../__tests__/setup';
import { Icon } from '../Icon';

describe('Button', () => {
  // ---- CONTENT ---- //
  it('Should render with text="Hello World"', () => {
    const content = 'Children';

    render(<Button text={content} />);
    expect(screen.getByText(content)).toBeDefined();
  });

  it('Should render with children equals "Hello World"', () => {
    const content = 'Children';

    render(<Button>{content}</Button>);
    expect(screen.getByText(content)).toBeDefined();
  });

  it('Should prioritize children instead of text', () => {
    const content = 'Children';

    render(<Button text="Text">{content}</Button>);
    expect(screen.getByText(content)).toBeDefined();
  });

  // ---- COLORS ---- //
  it('Snapshot should match color="primary"', () => {
    render(<Button color="primary">Color - Primary</Button>);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match color="secondary"', () => {
    render(<Button color="secondary">Color - Secondary</Button>);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match color="tertiary"', () => {
    render(<Button color="tertiary">Color - Tertiary</Button>);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match color="success"', () => {
    render(<Button color="success">Color - Success</Button>);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match color="warning"', () => {
    render(<Button color="warning">Color - Warning</Button>);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match color="danger"', () => {
    render(<Button color="danger">Color - Danger</Button>);
    expect(screen).toMatchSnapshot();
  });

  // ---- VARIANTS ---- //
  it('Snapshot should match variant="contained"', () => {
    render(<Button variant="contained">Variant - Contained</Button>);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match variant="outlined"', () => {
    render(<Button variant="outlined">Variant - Outlined</Button>);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match variant="linked"', () => {
    render(<Button variant="linked">Variant - Linked</Button>);
    expect(screen).toMatchSnapshot();
  });

  // // ---- SIZES ---- //
  it('Snapshot should match size="medium"', () => {
    render(<Button size="medium">Size - Default</Button>);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match size="extraSmall"', () => {
    render(<Button size="extraSmall">Size - Extra Small</Button>);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match size="small"', () => {
    render(<Button size="small">Size - Small</Button>);
    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match size="large"', () => {
    render(<Button size="large">Size - Large</Button>);
    expect(screen).toMatchSnapshot();
  });

  // ---- ICONS ---- //
  it('Snapshot should match content + icon', () => {
    const iconID = 'customIcon';

    render(<Button icon={<Icon name="cog" data-testid={iconID} />}>Content + Icon</Button>);
    expect(screen.getByTestId(iconID)).toBeDefined();
    expect(screen).toMatchSnapshot();
  });

  it('Should display spinner', () => {
    const { rerender } = render(<Button>SuperContent</Button>);

    expect(screen.queryByTestId('content-spinner')).toBeNull();

    rerender(<Button isLoading>SuperContent</Button>);

    expect(screen.queryByTestId('content-spinner')).toBeDefined();
  });
});
