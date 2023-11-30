module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
      'airbnb',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['react', 'react-hooks'],
  env: {
      browser: true,
      es6: true,
      node: true,
  },
  rules: {
      'max-len': [
          'error',
          {
              code: 120,
              tabWidth: 2,
              ignoreComments: true,
              ignoreTrailingComments: true,
              ignoreString: true,
              ignoreUrls: true,
              ignoreTemplateLiterals: true,
              ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
          },
      ],
      'no-use-before-define': 'off',
      'linebreak-style': 'off',
      camelcase: 'warn',
      'max-classes-per-file': 'off',
      'class-methods-use-this': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': [
          'error',
          'ignorePackages',
          {
              js: 'never',
              ts: 'never',
              jsx: 'never',
              tsx: 'never',
          },
      ],
      'no-underscore-dangle': 0,

      // react
      'react/jsx-filename-extension': [2, { extentions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/require-default-props': 0,
      'react/jsx-props-no-spreading': 1,
      'react/jsx-users-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // typescript
      '@typescript-eslint/no-use-before-define': 2,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' },],
  },
  ignorePattern: ['generated/**/*tsx'],
  settings: {
      'import/resolver': {
          node: {
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
      },
  },
};