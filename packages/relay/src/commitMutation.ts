import { commitMutation as relayCommitMutation, MutationConfig, MutationParameters } from 'relay-runtime';
import { Environment } from 'relay-runtime/lib/store/RelayStoreTypes';

export const commitMutation = <T extends MutationParameters = MutationParameters>(
  environment: Environment,
  config: Omit<MutationConfig<T>, 'onCompleted' | 'onError'>,
): Promise<T['response']> =>
  new Promise<T['response']>((resolve, reject) => {
    relayCommitMutation(environment, {
      ...config,
      onError: reject,
      onCompleted: resolve,
    });
  });
