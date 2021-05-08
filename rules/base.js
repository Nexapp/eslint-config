module.exports = {
  env: {
    es6: true,
  },
  plugins: [
    'unused-imports',
    'import',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    indent: [1, 2, {
      ignoredNodes: ['JSXElement'],
      SwitchCase: 1,
    }],
    quotes: [1, 'single'],
    curly: [1, 'all'],
    'padded-blocks': [1, {
      classes: 'always',
      switches: 'never',
      blocks: 'never',
    }],
    'key-spacing': [1, { afterColon: true }],
    'keyword-spacing': [1, {
      before: true,
      after: true,
    }],
    'no-console': 1,
    'no-extra-parens': 0,
    'quote-props': [1, 'as-needed', {
      numbers: true,
    }],
    'no-multiple-empty-lines': [1, {
      max: 1,
      maxBOF: 0,
    }],
    'no-underscore-dangle': 0,
    'no-throw-literal': 1,
    'brace-style': [1, '1tbs', {
      allowSingleLine: false,
    }],
    'max-len': [1, 180, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-param-reassign': [1, {
      props: false,
    }],
    'eol-last': [1, 'always'],
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': [1, {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'no-multi-spaces': 1,
    'array-bracket-spacing': [1, 'never'],
    'computed-property-spacing': [1, 'never'],
    'comma-spacing': [1, { before: false, after: true }],
    'no-return-await': 0,
    'vars-on-top': 0,
    'func-names': 0,
    'arrow-body-style': 0,
    'prefer-template': 0,
    'no-return-assign': 0,
    'no-unused-assign': 0,
    'no-unused-expressions': 0,
    'new-cap': 0,
    'global-require': 0,
    'no-trailing-spaces': 1,
    'object-shorthand': [1, 'properties'],
    'operator-linebreak': 0,
    'sort-imports': 0,
    'no-undef': 0,
    'implicit-arrow-linebreak': 0,
    'no-extra-boolean-cast': 0,
    'no-confusing-arrow': 0,
    'arrow-spacing': 1,
    'prefer-destructuring': [1, {
      AssignmentExpression: {
        object: false,
      },
    }],
    'object-property-newline': [1, {
      allowAllPropertiesOnSameLine: true,
    }],
    'object-curly-newline': 0,
    'no-plusplus': 0,
    'no-empty-pattern': 0,
    'no-implicit-coercion': 0,
    'no-case-declarations': 0,
    'no-useless-escape': 0,

    'putout/keyword-spacing': 0,

    'unused-imports/no-unused-imports': 1,
    'unused-imports/no-unused-vars': [1, { argsIgnorePattern: '^_' }],

    'import/no-named-as-default': 0,
    'import/order': 0,
    'import/no-duplicates': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
  },
};
