module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'linebreak-style': 0,
    'new-cap': 0,
    'no-underscore-dangle': 0,
  },
};
