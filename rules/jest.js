module.exports = {
  plugins: [
    'jest',
    'jest-formatting',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'jest/prefer-to-have-length': 1,
    'jest/prefer-to-contain': 1,
    'jest/prefer-to-be-null': 1,
    'jest/prefer-to-be-undefined': 1,
    'jest/valid-expect': 2,
    'jest/consistent-test-it': 2,
    'jest/no-jasmine-globals': 0,
  },
};
