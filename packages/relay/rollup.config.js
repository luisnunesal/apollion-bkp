/* eslint-disable import/no-extraneous-dependencies */

import pkg from './package.json';

import config from '../../config/rollup.config';

const dependencies = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

const outputFile = [
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

export default config({
  outputFile,
  dependencies,
});
