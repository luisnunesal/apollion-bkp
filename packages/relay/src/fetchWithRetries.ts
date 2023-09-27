import ExecutionEnvironment from './executeEnvironment';

export type InitWithRetries = {
  body?: BodyInit | null;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  method?: string;
  mode?: RequestMode;
};

export function fetchWithRetries(config) {
  /**
   * Makes a POST request to the server with the given data as the payload.
   * Automatic retries are done based on the values in `retryDelays`.
   */
  return async (init?: InitWithRetries | null): Promise<any> => {
    const fetchTimeout = config.timeout;
    const retryDelays = config.retries;

    let requestsAttempted = 0;
    let requestStartTime = 0;

    return new Promise((resolve, reject) => {
      const interfaceFunctions: {
        shouldRetry?: (n: number) => boolean;
        sendTimedRequest?: () => void;
        retryRequest?: () => void;
      } = {};

      /**
       * Sends a request to the server that will timeout after `fetchTimeout`.
       * If the request fails or times out a new request might be scheduled.
       */
      interfaceFunctions.sendTimedRequest = (): void => {
        requestsAttempted++;
        requestStartTime = Date.now();
        let isRequestAlive = true;
        const requestController = new AbortController();

        const requestTimeout = setTimeout(() => {
          isRequestAlive = false;
          requestController.abort();
          if (interfaceFunctions.shouldRetry(requestsAttempted)) {
            config.useDebug && console.log('fetchWithRetries: HTTP timeout, retrying.');
            interfaceFunctions.retryRequest();
          } else {
            const timeOutError = new Error(
              `fetchWithRetries(): Failed to get response from server, tried ${requestsAttempted} times.`,
            );

            timeOutError.name = 'TimeOutError';

            reject(timeOutError);
          }
        }, fetchTimeout);

        fetch(config.url, { ...init, signal: requestController.signal })
          .then(async (response) => {
            clearTimeout(requestTimeout);

            if (isRequestAlive) {
              // Got a response code that indicates success, resolve the promise.
              if (response.status >= 200 && response.status < 300) {
                resolve(response);
              } else if (
                interfaceFunctions.shouldRetry(requestsAttempted) &&
                config.retryWhen.includes(response.status)
              ) {
                // Fetch was not successful, retrying.
                config.useDebug && console.log('fetchWithRetries: HTTP error, retrying...');
                interfaceFunctions.retryRequest();
              } else {
                // Request was not successful, giving up.
                const error: any = new Error(
                  `fetchWithRetries(): Still no successful response after ${requestsAttempted} retries, giving up.`,
                );
                error.response = response;
                reject(error);
              }
            }
          })
          .catch((error) => {
            clearTimeout(requestTimeout);
            // Reject only if is not timeout
            if (error.name !== 'AbortError') {
              reject(error);
            }
          });
      };

      /**
       * Schedules another run of sendTimedRequest based on how much time has
       * passed between the time the last request was sent and now.
       */
      interfaceFunctions.retryRequest = (): void => {
        const retryDelay = retryDelays[requestsAttempted - 1];
        const retryStartTime = requestStartTime + retryDelay;
        // Schedule retry for a configured duration after last request started.
        setTimeout(interfaceFunctions.sendTimedRequest, retryStartTime - Date.now());
      };

      /**
       * Checks if another attempt should be done to send a request to the server.
       */
      interfaceFunctions.shouldRetry = (attempt: number): boolean =>
        ExecutionEnvironment.canUseDOM && config.useRetries && attempt <= retryDelays.length;

      interfaceFunctions.sendTimedRequest();
    });
  };
}
