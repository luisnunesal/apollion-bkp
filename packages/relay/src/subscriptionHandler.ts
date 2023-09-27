import { Observable, RequestParameters, Variables } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';

export function setupSubscription(settings) {
  return (): any => {
    const subscriptionClient = new SubscriptionClient(settings.socket, { reconnect: true });

    return (request: RequestParameters, variables: Variables) => {
      const subscribeObservable = subscriptionClient.request({
        query: request.text,
        operationName: request.name,
        variables,
      });

      return Observable.from(subscribeObservable as any);
    };
  };
}
