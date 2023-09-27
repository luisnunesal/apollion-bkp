const { peerDependencies } = require('./package.json');

module.exports = {
  extends: ['@captalys-platform/eslint-config-captalys-platform'],
  ignorePatterns: ['node_modules', 'lib'],
  rules: {
    'import/no-unresolved': ['error', { ignore: Object.keys(peerDependencies) }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/test.ts{,x}', 'src/__tests__/**'] }],
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-shadow': 'off',
    // TO DO VERIFY RULE BY RULE
    'jest/no-restricted-matchers': 'off',
    'jest/no-try-expect': 'off',
    'require-await': 'off',
    'no-console': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/display-name': 'off',
    'jest/no-disabled-tests': 'off',
    'jest/no-export': 'off',
  },
};
