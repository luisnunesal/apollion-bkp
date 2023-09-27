const { peerDependencies } = require('./package.json');

module.exports = {
  extends: ['@captalys-platform/eslint-config-captalys-platform'],
  ignorePatterns: ['node_modules', 'lib', 'src/template'],
  rules: {
    'import/no-unresolved': ['error', { ignore: Object.keys(peerDependencies) }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/test.ts{,x}', 'src/__tests__/**'] }],
    'no-shadow': 'off',
    'import/first': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    'import/no-dynamic-require': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': 'off',
    'import/extensions': 'off',
    'jest/no-restricted-matchers': 'off',
    'jest/no-try-expect': 'off',
    'require-await': 'off',
    'no-console': 'off',
    'require-atomic-updates': 'off',
    'jest/no-jest-import': 'off',
  },
};
