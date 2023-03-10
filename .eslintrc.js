module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': [
      'error',
      'windows',
    ],
    'class-methods-use-this': 'off',
  },
  'import/no-extraneous-dependencies': ['error', {
    devDependencies: false,
    optionalDependencies: false,
    peerDependencies: false,
  }],

};
