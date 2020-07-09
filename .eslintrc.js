module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
    'react-hooks/rules-of-hooks': 'error',
    'no-console': 'warn',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-autofocus': 0,
    'no-prototype-builtins': 0,
    'no-useless-escape': 0,
  },
  plugins: ['react', 'import', 'jsx-a11y', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    // Module resolver
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['pages', './pages'],
          ['assets', './public/assets'],
        ],
        extensions: ['.js', '.json', 'png', 'svg'],
      },
    },
  },
};
