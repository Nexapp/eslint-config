module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'object-curly-spacing': 0,
    '@typescript-eslint/object-curly-spacing': [1, 'always'],
    'space-infix-ops': 0,
    '@typescript-eslint/space-infix-ops': [1, { int32Hint: false }],
    '@typescript-eslint/member-delimiter-style': 1,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-function-return-type': [0, {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
    }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/require-await': 0,
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': [1, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      enums: 'always-multiline',
      generics: 'always-multiline',
      tuples: 'always-multiline',
    }],
    '@typescript-eslint/type-annotation-spacing': 1,
    '@typescript-eslint/consistent-type-imports': [1, {
      prefer: 'type-imports',
    }],
    'no-duplicate-imports': 0,
    '@typescript-eslint/no-duplicate-imports': [1],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/semi': 1,
    '@typescript-eslint/ban-types': [1, {
      types: {
        'React.StatelessComponent': {
          message: 'Please use React.FC instead.',
          fixWith: 'React.FC',
        },
        'React.FunctionComponent': {
          message: 'Please use React.FC instead.',
          fixWith: 'React.FC',
        },
      },
    }],
  },
};
