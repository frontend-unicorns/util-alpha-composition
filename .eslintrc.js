module.exports = {
  extends: [
    '@code-quality/eslint-config-react',
    '@code-quality/eslint-config-typescript',
    '@code-quality/eslint-config-jest',
    'prettier',
    'prettier/react',
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    'absolute-import/no-relative-path': 'off',
  },
}
