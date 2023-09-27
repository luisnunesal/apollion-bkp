import { installRelayDevTools } from 'relay-devtools';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import { createFetchFunction } from './fetchQuery';
import { ONE_MINUTE, ONE_SECOND } from './helpers';
import { RelayArgsInterface } from './relayArgsInterface';
import StorageClass from './storage';
import { setupSubscription } from './subscriptionHandler';

const kMountEnvironment = Symbol('mount-environment');
const kFeetchHandler = Symbol('handler-fetch');
const kSubscriptionHandler = Symbol('handler-subscription');

export default class RelayEnvironment implements RelayArgsInterface {
  url: string;

  socket?: string;

  retries?: number[];

  timeout?: number;

  useSubscription?: boolean;

  useAuthorization?: boolean;

  useCache?: boolean;

  cacheTime?: number;

  cacheSize?: number;

  sessionStorageProp?: string;

  refreshStorageProp?: string;

  loginRoute?: string;

  useDebug?: boolean;

  useRetries?: boolean;

  redirectOnError?: boolean;

  retryWhen?: number[];

  storageType: 'cookie' | 'localStorage';

  partner?: string;

  /**
   * Fetch Function
   */
  private [kFeetchHandler]?: any;

  /**
   * Subscription Function
   */
  private [kSubscriptionHandler]?: any;

  /**
   * Storage Handler
   * Use to save client data on browser
   * types:: localStorage, cookie
   */
  public StorageHandler: any;

  /**
   * Relay Environment
   */
  public Environment?: Environment;

  constructor(config: RelayArgsInterface) {
    this.url = config.url;
    this.socket = config.socket;
    this.storageType = config.storageType || 'localStorage';
    this.cacheSize = config.cacheSize || 250;
    this.cacheTime = config.cacheTime || ONE_MINUTE * 8;
    this.timeout = config.timeout || ONE_MINUTE * 15;
    this.sessionStorageProp = config.sessionStorageProp || 'USER_SESSION_TOKEN';
    this.refreshStorageProp = config.refreshStorageProp || 'USER_REFRESH_TOKEN';
    this.loginRoute = config.loginRoute || '/';
    this.useCache = config.useCache || false;
    this.useDebug = config.useDebug || false;
    this.useAuthorization = config.useAuthorization || false;
    this.useRetries = config.useRetries || false;
    this.useSubscription = config.useSubscription || false;
    this.redirectOnError = config.redirectOnError || true;
    this.retryWhen = config.retryWhen || [503, 504, 521, 522, 524];
    this.retries = config.retries || [
      ONE_SECOND,
      ONE_SECOND * 2,
      ONE_SECOND * 3,
      ONE_SECOND * 5,
      ONE_SECOND * 8,
      ONE_SECOND * 13,
      ONE_SECOND * 21,
      ONE_SECOND * 34,
    ];
    this.partner = config.partner || undefined;
    /**
     * Mandatory URL check
     */
    if (!this.url) {
      throw new Error('[HTTPFetchEndpoint] You must at least set url parameter.');
    }

    /**
     * Define client data strategy
     */
    this.StorageHandler = new StorageClass(this);

    /**
     * WebSocket settings check
     */
    if (this.useSubscription) {
      if (!this.socket) {
        throw new Error('[useSubscription] If you choose to use WebSocket you must set a socket endpoint.');
      }

      this[kSubscriptionHandler] = setupSubscription(this);
    }

    /**
     * Define Fetch Function
     */
    this[kFeetchHandler] = createFetchFunction(this);

    this[kMountEnvironment]();
  }

  /**
   * Build Up Environment
   */
  private [kMountEnvironment](): void {
    if (this.useDebug) {
      installRelayDevTools();
    }

    const network = Network.create(this[kFeetchHandler], this[kSubscriptionHandler] || null);
    const source = new RecordSource();
    const store = new Store(source);

    this.Environment = new Environment({ network, store });
  }
}
