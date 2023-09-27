import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { Notification } from '.';

import { render } from '../../__tests__/setup';

describe('Default Input for bases of other "input types"', () => {
  it('Snapshot should match variant="primary"', () => {
    const input = render(
      <Notification type="block" title="Esse é um título" message="Essa é uma mensagem padrão" variant="primary" />,
    );
    expect(input.container.firstChild).toMatchSnapshot();
  });

  it('Snapshot should match variant="error"', () => {
    const input = render(
      <Notification type="block" title="Esse é um título" message="Essa é uma mensagem de erro" variant="danger" />,
    );
    expect(input.container.firstChild).toMatchSnapshot();
  });

  it('Snapshot should match variant="warning"', () => {
    const input = render(
      <Notification type="block" title="Esse é um título" message="Essa é uma mensagem de aviso" variant="warning" />,
    );
    expect(input.container.firstChild).toMatchSnapshot();
  });

  it('Snapshot should match variant="success"', () => {
    const input = render(
      <Notification
        type="block"
        title="Esse é um título"
        message="Essa é uma mensagem de successo"
        variant="success"
      />,
    );
    expect(input.container.firstChild).toMatchSnapshot();
  });

  it('should render a type block', () => {
    const result = render(
      <Notification title="Esse é um título" message="Essa é uma mensagem de successo" variant="success" />,
    );

    expect(result.getByTestId('notification-block')).toBeInTheDocument();
  });
});
