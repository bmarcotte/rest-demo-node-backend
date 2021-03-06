module.exports = {
  'env': {
    'browser': false,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'no-console': [
      'error',
      { 'allow': [ 'warn', 'error' ] }
    ],
    'quotes': [
      'error',
      'single',
      { 'avoidEscape': true }
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
