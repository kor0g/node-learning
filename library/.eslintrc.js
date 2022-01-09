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
  plugins: ['import'],
  rules: {
    semi: ['error', 'never'],
    'consistent-return': 0,
  },
}
