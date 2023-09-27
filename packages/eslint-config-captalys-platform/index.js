module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'jest', 'simple-import-sort', 'sonarjs'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  ignorePatterns: ['src/__generated__', 'node_modules', 'lib', 'build'],
  rules: {
    /**
     * @description rules of eslint official
     */
    'import/prefer-default-export': 'off', // Allow single Named-export
    'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }], // https://eslint.org/docs/rules/no-unused-expressions

    /**
     * @description rules of @typescript-eslint
     */
    '@typescript-eslint/prefer-interface': 'off', // also want to use "type"
    '@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': ['warn'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    /**
     * @description rules of eslint-plugin-react
     */
    'react/prop-types': 'off', // Is this incompatible with TS props type?
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],

    /**
     * @description Forbid the import of external modules that are not declared in the package.json's dependencies
     * @exception .spec | .test
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
      },
    ],

    /**
     * @description rules of eslint-plugin-react-hooks
     */
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    /**
     * OTHERS
     */
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-fallthrough': 'off',

    /**
     * SonarJS
     */
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/cognitive-complexity': 'warn',

    /**
     * IMPORTS
     */
    'import/first': 'error',
    'sort-imports': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Node.js builtins.
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
};
