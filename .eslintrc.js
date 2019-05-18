module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': [false],
    'react/prop-types': [false]
  },
  //   extends: ['airbnb', 'prettier', 'prettier/react'],
  //   plugins: ['prettier'],
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/standard',
    'prettier/react'
  ]
};
