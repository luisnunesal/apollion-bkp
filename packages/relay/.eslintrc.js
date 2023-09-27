module.exports = {
  extends: ['@captalys-platform/eslint-config-captalys-platform'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.6',
    },
  },
  rules: {
    'import/no-unresolved': ['error', { ignore: ['@captalys-platform/core'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/test.ts{,x}', 'src/__tests__/**'] }],
    'jest/no-restricted-matchers': 'off',
    'jest/no-try-expect': 'off',
    'require-await': 'off',
    'no-console': 'off',
  },
  plugins: ['react'],
};
