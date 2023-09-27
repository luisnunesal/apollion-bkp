import { PatchResolver } from 'fetch-multipart-graphql';
import { CacheConfig, RequestParameters, UploadableMap, Variables } from 'relay-runtime';

import executeEnvironment from './executeEnvironment';
import { Sink } from './relayArgsInterface';

export const isMutation = (request: RequestParameters): boolean => request.operationKind === 'mutation';
export const isQuery = (request: RequestParameters): boolean => request.operationKind === 'query';
export const forceFetch = (cacheConfig: CacheConfig): boolean => !!(cacheConfig && cacheConfig.force);

export const getParamsDelimiter = (): string => {
  if (!executeEnvironment.canUseDOM) return '';

  if (window.location.search.startsWith('?')) return '&';

  return '?';
};

export const getBrowserLocation = (): string => {
  if (!executeEnvironment.canUseDOM) return '';
  return window.location.pathname;
};

export const redirectUser = (url: string, redirectTo: string): void => {
  let redirect = url;

  /**
   * No reason to add 'redirect' parameter if both values are equal
   */
  if (url !== redirectTo) {
    redirect = `${redirectTo}${getParamsDelimiter()}redirect=${url}`;
  }

  window.location.href = redirect;
};

function getRequestBodyWithUploadables(request: RequestParameters, variables: Variables, uploadables: any) {
  const formData = new FormData();

  formData.append(
    'operations',
    JSON.stringify({
      query: request.text,
      variables,
      operationName: request.name,
    }),
  );

  const mapObject: Record<string, string[]> = {};
  for (let i = 0; i < uploadables.files.length; i++) {
    formData.append(`${i}`, uploadables.files[i]);
    mapObject[`${i}`] = [uploadables.path(i)];
  }
  formData.append('map', JSON.stringify(mapObject));

  return formData;
}

function getRequestBodyWithoutUplodables(request: RequestParameters, variables: Variables) {
  return JSON.stringify({
    name: request.name, // used by graphql mock on tests
    query: request.text, // GraphQL text from input
    variables,
  });
}

export function getRequestBody(
  request: RequestParameters,
  variables: Variables,
  uploadables?: UploadableMap,
): string | FormData {
  if (uploadables) {
    return getRequestBodyWithUploadables(request, variables, uploadables);
  }

  return getRequestBodyWithoutUplodables(request, variables);
}

export const getHeaders = (args, uploadables?: UploadableMap): HeadersInit => {
  const headers = new Headers();
  if (uploadables) {
    headers.append('Accept', '*/*');
  } else {
    headers.append('Accept', 'application/json');
    headers.append('Content-type', 'application/json');
  }

  if (args.useAuthorization) {
    const { sessionToken } = args.StorageHandler.getTokens();

    if (sessionToken && getBrowserLocation() !== args.loginRoute) {
      headers.append('Authorization', `Bearer ${sessionToken}`);
    }
  }

  if (args.partner) {
    headers.append('X-Partner', args.partner);
  }

  return headers;
};

// Copied from fetch-multipart-graphql library
export const handleData = (response: Response, sink: Sink, callback: (data) => void): void => {
  if (
    response.status < 300 &&
    response.headers &&
    response.headers.get('Content-Type') &&
    response.headers.get('Content-Type').indexOf('multipart/mixed') >= 0
  ) {
    // For the majority of browsers with support for ReadableStream and TextDecoder
    const reader = response.body.getReader();
    const textDecoder = new TextDecoder();
    const patchResolver: any = new PatchResolver({
      onResponse: (r) => sink.next(r),
    });

    reader.read().then(function sendNext({ value, done }) {
      if (!done) {
        let plaintext: string;
        try {
          plaintext = textDecoder.decode(value);
          // Read the header to get the Content-Length
          patchResolver.handleChunk(plaintext);
        } catch (err) {
          const parseError = err;
          parseError.response = response;
          parseError.statusCode = response.status;
          parseError.bodyText = plaintext;
          sink.error(parseError);
        }
        reader.read().then(sendNext);
      } else {
        sink.complete();
      }
    });
  } else if (
    response.headers &&
    response.headers.get('Content-Type') &&
    response.headers.get('Content-Type').indexOf('application/json') >= 0
  ) {
    response.json().then(callback);
  } else {
    response.text().then((text) => {
      sink.next([text]);
      sink.complete();
    });
  }
};

export const ONE_SECOND = 1000;
export const ONE_MINUTE = 1000 * 60;
