module.exports = {
  plugins: [
    'react',
    'jsx-a11y',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
      'exact', // https://www.npmjs.com/package/prop-types-exact
      'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
    ],
  },

  rules: {
    'jsx-quotes': [1, 'prefer-double'],
    'react/jsx-fragments': [1, 'syntax'],
    'react/jsx-curly-newline': 0,
    'react/static-property-placement': 1,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-newline': 1,
    'react/no-access-state-in-setstate': 0,
    'react/jsx-filename-extension': [2, {
      extensions: ['.jsx', '.tsx'],
    }],
    'react/destructuring-assignment': 0,
    'react/no-string-refs': 0,
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
    'react/jsx-no-undef': 1,
    'react/quotes': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/prefer-stateless-function': 1,
    'react/prefer-es6-class': 1,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0,
    'react/forbid-prop-types': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-tag-spacing': [1, {
      beforeSelfClosing: 'always',
      closingSlash: 'never',
      afterOpening: 'never',
    }],
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-curly-spacing': 1,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent-props': [2, 'first'],
    'react/jsx-indent': [1, 2, { indentLogicalExpressions: true }],
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': [1, {
      maximum: 1,
      when: 'multiline',
    }],
    'react/jsx-no-duplicate-props': [2, {
      ignoreCase: false,
    }],
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
