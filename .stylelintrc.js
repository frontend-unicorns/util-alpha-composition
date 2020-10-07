module.exports = {
  extends: [
    '@code-quality/stylelint-styled-components-config',
    'stylelint-config-prettier',
  ],
  rules: {
    'selector-max-id': 1,
    'unit-blacklist': 'off',
  },
}
