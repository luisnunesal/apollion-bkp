module.exports = {
  testMatch: ['**/__tests__/*.ts?(x)'],
  globalSetup: './jestSetup/setup',
  globalTeardown: './jestSetup/teardown',
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/', '/__generated__/'],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
};
