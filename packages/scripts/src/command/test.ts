process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

process.on('unhandledRejection', (err) => {
  throw err;
});

require('../config/env');

import { execSync } from 'child_process';

import jestRunner from 'jest-cli';

const argv = process.argv.slice(2);

function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

// Watch unless on CI or explicitly running all tests
if (!process.env.CI && argv.indexOf('--watchAll') === -1 && argv.indexOf('--watchAll=false') === -1) {
  // https://github.com/facebook/create-react-app/issues/5210
  const hasSourceControl = isInGitRepository();
  argv.push(hasSourceControl ? '--watch' : '--watchAll');
}

jestRunner.run(argv);
