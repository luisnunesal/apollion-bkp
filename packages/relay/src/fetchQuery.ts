import {
  CacheConfig,
  Observable,
  QueryResponseCache,
  RequestParameters,
  UploadableMap,
  Variables,
} from 'relay-runtime';

import ExecuteEnvironment from './executeEnvironment';
import { fetchWithRetries } from './fetchWithRetries';
import {
  forceFetch,
  getBrowserLocation,
  getHeaders,
  getRequestBody,
  handleData,
  isMutation,
  isQuery,
  redirectUser,
} from './helpers';
import { Sink } from './relayArgsInterface';

export const createFetchFunction = (config) => {
  const cacheHandler = new QueryResponseCache({
    ttl: config.cacheTime,
    size: config.cacheSize,
  });

  const fetchRetries = fetchWithRetries(config);

  async function fetchFn(
    request: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables: UploadableMap,
    sink: Sink,
  ): Promise<void> {
    try {
      const queryID = String(request.text);

      if (config.useCache && isQuery(request) && !forceFetch(cacheConfig)) {
        const fromCache = cacheHandler.get(queryID, variables);

        if (fromCache) {
          sink.next(fromCache);
          sink.complete();
          return;
        }
      }

      if (config.useCache && isMutation(request)) {
        cacheHandler.clear();
      }

      const response = await fetchRetries({
        method: 'POST',
        headers: getHeaders(config, uploadables),
        body: getRequestBody(request, variables, uploadables),
      });

      handleData(response, sink, (data) => {
        if (config.useCache && isQuery(request)) {
          cacheHandler.set(queryID, variables, data);
        }

        if (sink.closed) return;

        if (isMutation(request) && data.errors) {
          sink.error(data.errors);
        }

        if (data.errors) {
          let errorCodes: number[] = [];
          if (Array.isArray(data.errors)) {
            errorCodes = data.errors.map(({ status_code: code }) => code);
          }

          const browserLocation = getBrowserLocation();

          if (errorCodes.some((n) => n === 401) && browserLocation !== config.loginRoute && config.redirectOnError) {
            config.StorageHandler.clear();
            redirectUser(browserLocation, config.loginRoute);
          }

          sink.error(data.errors);
        } else if (!data.data) {
          sink.error(data);
        } else {
          sink.next(data);
        }

        sink.complete();
      });
    } catch (error) {
      // DO NOT wipe de storage duo to timeout error
      if (ExecuteEnvironment.canUseDOM && !['AbortError', 'TimeOutError'].includes(error.name)) {
        config.StorageHandler.clear();
      }

      const browserLocation = getBrowserLocation();

      if (browserLocation !== config.loginRoute && config.redirectOnError) {
        redirectUser(browserLocation, config.loginRoute);
      }

      sink.error(error);
    }
  }

  return (request: RequestParameters, variables: Variables, cacheConfig: CacheConfig, uploadables: UploadableMap) =>
    Observable.create((sink) => {
      fetchFn(request, variables, cacheConfig, uploadables, sink);
    });
};
