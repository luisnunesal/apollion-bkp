import '@testing-library/jest-dom/extend-expect';
import 'isomorphic-fetch';

import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { render, waitFor } from '@testing-library/react';

import { CreateRelayEnvironment } from '..';

const viewerQuery = graphql`
  query ViewerQuery {
    viewer {
      id
      username
      email
    }
  }
`;

const renderProp = ({ error, props }: any) => {
  if (error) {
    return <div data-testid="error">error</div>;
  }

  if (props) {
    return <div data-testid="loaded">{props?.viewer?.username}</div>;
  }

  return <div data-testid="loading">loading</div>;
};

describe('QueryRenderer', () => {
  it('Should render something', async () => {
    const { Environment } = new CreateRelayEnvironment({
      url: 'http://0.0.0.0:5000/graphql/',
      useDebug: true,
    });

    const { getByTestId } = render(
      <QueryRenderer
        // @ts-ignore
        environment={Environment}
        query={viewerQuery}
        render={renderProp}
      />,
    );

    expect(getByTestId('loading')).toBeInTheDocument();

    await waitFor(() => expect(getByTestId('loaded')).toHaveTextContent('akobrinsky'), { timeout: 1000 });
  });

  it('Should setup Env with Cookie Storage', async () => {
    const { Environment } = new CreateRelayEnvironment({
      url: 'http://0.0.0.0:5000/graphql/',
      useDebug: true,
      storageType: 'cookie',
    });

    const { getByTestId } = render(
      <QueryRenderer
        // @ts-ignore
        environment={Environment}
        query={viewerQuery}
        render={renderProp}
      />,
    );

    expect(getByTestId('loading')).toBeInTheDocument();

    await waitFor(() => expect(getByTestId('loaded')).toHaveTextContent('akobrinsky'), { timeout: 1000 });
  });

  it('Should retry', async () => {
    const { Environment } = new CreateRelayEnvironment({
      url: 'http://0.0.0.0:5000/graphql/fail',
      retryWhen: [500],
      timeout: 1000,
      useDebug: true,
      useRetries: true,
      retries: [1000, 1000, 1000],
    });

    const { getByTestId } = render(
      <QueryRenderer
        // @ts-ignore
        environment={Environment}
        query={viewerQuery}
        render={renderProp}
      />,
    );

    expect(getByTestId('loading')).toBeInTheDocument();

    await waitFor(() => expect(getByTestId('loaded')).toHaveTextContent('akobrinsky'), { timeout: 5000 });
  });
});
