module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: ['airbnb-base'],
  plugins: [],
  rules: {
    semi: ['error', 'never'],
    'prefer-template': 0,
    'consistent-return': 0,
  },
}
