/** @typedef {import('ts-jest/dist/types')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'jsdom',
  snapshotResolver: './src/__tests__/setup/snapshotResolver.js',
  testPathIgnorePatterns: ['/node_modules/', 'src/__tests__', 'cypress'],
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.test.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 40,
      lines: 60,
      statements: 60,
    },
  },
};
