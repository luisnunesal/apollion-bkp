import React from 'react';
import userEvent from '@testing-library/user-event';

import { Modal } from '.';

import { render, screen } from '../../__tests__/setup';
import { Icon } from '../Icon';
import { BaseText } from '../Typography';

describe('Modal', () => {
  it('Should render children as content', () => {
    const content = 'CONTENT';
    const title = 'SUPER TITLE';
    const tagline = 'SOME TEXT';

    const onDismiss = jest.fn();

    const { rerender } = render(
      <Modal onDismiss={onDismiss}>
        <BaseText>{content}</BaseText>
      </Modal>,
    );

    expect(screen.queryByTestId('modal-container')).toBeNull();

    rerender(
      <Modal isOpen onDismiss={onDismiss} title={title} tagline={tagline}>
        <BaseText>{content}</BaseText>
      </Modal>,
    );

    expect(screen.getByTestId('modal-container')).toBeDefined();
    expect(screen.getByText(content)).toBeDefined();
    expect(screen.getByText(tagline)).toBeDefined();
    expect(screen.getByText(title)).toBeDefined();

    userEvent.click(screen.getByTestId('modal-close-button'));

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('Should render custom icon', () => {
    const iconId = 'custom-icon';

    render(
      <Modal isOpen icon={<Icon name="running" data-testid={iconId} />}>
        <span />
      </Modal>,
    );

    expect(screen.getByTestId(iconId)).toBeDefined();
  });

  it('Should call onConfirm function', () => {
    const confirm = jest.fn();

    render(
      <Modal isOpen onConfirm={confirm} confirmText="OK">
        <span />
      </Modal>,
    );

    userEvent.click(screen.getByText('OK'));

    expect(confirm).toHaveBeenCalledTimes(1);
  });

  it('Should open by clicking on trigger component', () => {
    render(
      <Modal trigger={<button type="button">ABRIR</button>}>
        <span />
      </Modal>,
    );

    expect(screen.queryByTestId('modal-container')).toBeNull();

    userEvent.click(screen.getByText('ABRIR'));

    expect(screen.getByTestId('modal-container')).toBeDefined();
  });

  // SNAPSHOTS
  it('Snapshot should match size="small"', () => {
    render(
      <Modal isOpen size="small">
        <span>CONTENT</span>
      </Modal>,
    );

    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match size="base"', () => {
    render(
      <Modal isOpen size="base">
        <span>CONTENT</span>
      </Modal>,
    );

    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match size="medium"', () => {
    render(
      <Modal isOpen size="medium">
        <span>CONTENT</span>
      </Modal>,
    );

    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match size="large"', () => {
    render(
      <Modal isOpen size="large">
        <span>CONTENT</span>
      </Modal>,
    );

    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match footer="expanded"', () => {
    render(
      <Modal isOpen footer="expanded">
        <span>CONTENT</span>
      </Modal>,
    );

    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match footer="right"', () => {
    render(
      <Modal isOpen footer="right">
        <span>CONTENT</span>
      </Modal>,
    );

    expect(screen).toMatchSnapshot();
  });

  it('Snapshot should match footer="full"', () => {
    render(
      <Modal isOpen footer="full">
        <span>CONTENT</span>
      </Modal>,
    );

    expect(screen).toMatchSnapshot();
  });
});
