export interface Sink {
  next(value: any): void;
  error(error: Error, isUncaughtThrownError?: boolean): void;
  complete(): void;
  readonly closed: boolean;
}

export interface RelayArgsInterface {
  /**
   * GraphQL server endpoint
   */
  url: string;

  /**
   * [OPTIONAL]
   * GraphQL server subscription endpoint
   */
  socket?: string;

  /**
   * [OPTIONAL]
   * [DEFAULT]: [1s, 2s, 3s, 5s, 8s, 13s, 21s]
   * In case of downtime, Relay Environment will try to reconnect
   * according to its values
   */
  retries?: number[];

  /**
   * [OPTIONAL]
   * [DEFAULT]: 15 minutes
   * Request timeout configuration
   */
  timeout?: number;

  /**
   * [OPTIONAL]
   * [DEFAULT]: false
   * Enable this in case you would like to use Subscriptions
   */
  useSubscription?: boolean;

  /**
   * [OPTIONAL]
   * [DEFAULT]: false
   * Enable this in case you would like to use JWT based
   * authentications
   */
  useAuthorization?: boolean;

  /**
   * [OPTIONAL]
   * [DEFAULT]: false
   * According to Relay team recomendations cache is disable by default.
   * Enable this in case you would like to use cacheMap() support
   */
  useCache?: boolean;

  /**
   * [OPTIONAL]
   * [DEFAULT]: One Minute (1000 * 60)
   * Time this Environment will hold information in cache
   */
  cacheTime?: number;

  /**
   * [OPTIONAL]
   * [DEFAULT]: 250
   * Max number of stored queries
   */
  cacheSize?: number;

  /**
   * [OPTIONAL]
   * [DEFAULT]: USER_SESSION_TOKEN
   * Alias SESSION prop on storage
   */
  sessionStorageProp?: string;

  /**
   * [OPTIONAL]
   * [DEFAULT]: USER_REFRESH_TOKEN
   * Alias REFRESH prop on storage
   */
  refreshStorageProp?: string;

  /**
   * [OPTIONAL]
   * [DEFAULT]: /<root>
   * Route to login
   */
  loginRoute?: string;

  /**
   * [OPTIONAL]
   * [DEFAULT]: false
   * Use Relay DEV Tools for debug
   */
  useDebug?: boolean;

  /**
   * [OPTIONAL]
   * [DEFAULT]: false
   * Retry if happens some error at environment
   */
  useRetries?: boolean;

  /**
   * [OPTIONAL]
   * [DEFAULT]: true
   * Redirect user to 'loginRoute' in case of unknown error
   */
  redirectOnError?: boolean;

  /**
   * [OPTIONAL]
   * [DEFAULT]: [504, 503, 521, 522, 524]
   * In case of error code includes in array. Retry request.
   * https://support.cloudflare.com/hc/pt-br/articles/115003011431-Solu%C3%A7%C3%A3o-de-problemas-de-erros-5XX-da-Cloudflare
   */
  retryWhen?: number[];

  /**
   * [OPTIONAL]
   * [DEFAULT]: localStorage
   * Client browser data strategy
   */
  storageType?: 'cookie' | 'localStorage';

  /**
   * [OPTIONAL]
   * [DEFAULT]: undefined
   * Partner that is going to be included
   */
  partner?: string;
}
