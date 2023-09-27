/* eslint max-classes-per-file: ["error", 4], class-methods-use-this: "off" */

import cookie from 'js-cookie';

import { RelayArgsInterface } from './relayArgsInterface';

type TokenTypes = {
  sessionToken?: string;
  refreshToken?: string;
};

interface IClientDataStrategy {
  get(k: string): string | unknown;
  set(k: string, v: string): void;
  delete(k: string): void;
}

class DefaultStrategy implements IClientDataStrategy {
  protected strategy: any;

  get(k: string) {
    throw new Error('Must implement a "GET" method');
  }

  set(k: string, v: string) {
    throw new Error('Must implement a "SET" method');
  }

  delete(k: string) {
    throw new Error('Must implement a "DELETE" method');
  }
}

class LocalStorageStrategy extends DefaultStrategy {
  constructor() {
    super();
    this.strategy = localStorage;
  }

  get(k: string) {
    return this.strategy.getItem(k);
  }

  set(k: string, v: string) {
    this.strategy.setItem(k, v);
  }

  delete(k: string) {
    this.strategy.removeItem(k);
  }
}

class CookieStrategy extends DefaultStrategy {
  constructor() {
    super();
    this.strategy = cookie;
  }

  get(k: string) {
    return this.strategy.get(k);
  }

  set(k: string, v: string) {
    this.strategy.set(k, v);
  }

  delete(k: string) {
    this.strategy.remove(k);
  }
}

const kStorageHandler = Symbol('storage-handler');
const kPropSession = Symbol('prop-session');
const kPropRefresh = Symbol('prop-refresh');
export default class StorageClass {
  private [kStorageHandler]: any;

  private [kPropSession]: string;

  private [kPropRefresh]: string;

  constructor(strategy: RelayArgsInterface) {
    this[kPropSession] = strategy.sessionStorageProp;
    this[kPropRefresh] = strategy.refreshStorageProp;

    if (strategy.storageType === 'cookie') {
      this[kStorageHandler] = new CookieStrategy();
    } else {
      this[kStorageHandler] = new LocalStorageStrategy();
    }
  }

  /**
   * Recover tokens
   */
  public getTokens(): TokenTypes {
    return {
      refreshToken: this[kStorageHandler].get(this[kPropRefresh]),
      sessionToken: this[kStorageHandler].get(this[kPropSession]),
    };
  }

  /**
   * Set tokens
   */
  public setTokens(tokens: TokenTypes): void {
    this[kStorageHandler].set(this[kPropRefresh], tokens.refreshToken);
    this[kStorageHandler].set(this[kPropSession], tokens.sessionToken);
  }

  /**
   * Clear storage
   */
  public clear(): void {
    this[kStorageHandler].delete(this[kPropRefresh]);
    this[kStorageHandler].delete(this[kPropSession]);
  }

  /**
   * Check new tokens in headers
   * and compare with tokens in storage
   */
  public hasChangedSession({ sessionToken: newSessionToken }: TokenTypes): boolean {
    const { sessionToken: oldSessionToken } = this.getTokens();

    return newSessionToken !== oldSessionToken;
  }
}
