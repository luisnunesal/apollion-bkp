import fs from 'fs';
import path from 'path';

import { CustomConfigType } from './shared';

export function getEnviroment(paths) {
  const { NODE_ENV, ENV } = process.env;

  if (!NODE_ENV) {
    throw new Error('The NODE_ENV environment variable is required but was not specified.');
  }

  const dotenvFiles = [
    `${paths.dotenv}.${NODE_ENV}.local`,
    `${paths.dotenv}.${ENV}.local`,
    // Don't include `.env.local` for `test` environment
    // since normally you expect tests to produce the same
    // results for everyone
    NODE_ENV !== 'test' && `${paths.dotenv}.local`,
    `${paths.dotenv}.${NODE_ENV}`,
    `${paths.dotenv}.${ENV}`,
    paths.dotenv,
  ].filter(Boolean) as Array<string>;

  // Load environment variables from .env* files. Suppress warnings using silent
  // if this file is missing. dotenv will never modify any environment variables
  // that have already been set.  Variable expansion is supported in .env files.
  dotenvFiles.forEach((dotenvFile) => {
    if (fs.existsSync(dotenvFile)) {
      require('dotenv-expand')(
        require('dotenv').config({
          path: dotenvFile,
        }),
      );
    }
  });

  const appDirectory = fs.realpathSync(process.cwd());
  process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path.delimiter)
    .filter((folder) => folder && !path.isAbsolute(folder))
    .map((folder) => path.resolve(appDirectory, folder))
    .join(path.delimiter);
}

export default function getClientEnvironment(publicUrl: string, config: CustomConfigType) {
  // Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
  // injected into the application via DefinePlugin in webpack configuration.
  const REACT_APP = /^REACT_APP_/i;

  const raw = Object.keys(process.env)
    .filter((key) => REACT_APP.test(key))
    .reduce((env, key) => Object.assign(env, { [key]: process.env[key] }), {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      NODE_ENV: process.env.NODE_ENV || 'development',
      // Useful for resolving the correct path to static assets in `public`.
      // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
      // This should only be used as an escape hatch. Normally you would put
      // images into the `src` and `import` them in code to get their paths.
      PUBLIC_URL: publicUrl,
      // We support configuring the sockjs pathname during development.
      // These settings let a developer run multiple simultaneous projects.
      // They are used as the connection `hostname`, `pathname` and `port`
      // in webpackHotDevClient. They are used as the `sockHost`, `sockPath`
      // and `sockPort` options in webpack-dev-server.
      WDS_SOCKET_HOST: process.env.WDS_SOCKET_HOST,
      WDS_SOCKET_PATH: process.env.WDS_SOCKET_PATH,
      WDS_SOCKET_PORT: process.env.WDS_SOCKET_PORT,
      // Whether or not react-refresh is enabled.
      // react-refresh is not 100% stable at this time,
      // which is why it's disabled by default.
      // It is defined here so it is available in the webpackHotDevClient.
      FAST_REFRESH: !!config.useFastRefresh,
    });
  // Stringify all values so we can feed into webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => Object.assign(env, { [key]: JSON.stringify(raw[key]) }), {}),
  };

  return { raw, stringified };
}
