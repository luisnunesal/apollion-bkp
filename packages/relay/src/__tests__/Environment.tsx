import '@testing-library/jest-dom/extend-expect';

import { CreateRelayEnvironment } from '..';

describe('Relay Environment Constructor', () => {
  it('should throw an error about subscription endpoint', () => {
    expect.assertions(2);

    try {
      const { Environment } = new CreateRelayEnvironment({
        url: 'https://api-atlas.staging.captalysplatform.io/graphql/',
        useSubscription: true,
      });
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e).toHaveProperty(
        'message',
        '[useSubscription] If you choose to use WebSocket you must set a socket endpoint.',
      );
    }
  });

  it('should throw an error about not set an HTTP Fetch Endpoint', () => {
    try {
      // @ts-ignore
      const { Environment } = new CreateRelayEnvironment();
    } catch (e) {
      expect(e).toHaveProperty('message', "Cannot read property 'url' of undefined");
    }
  });
});
