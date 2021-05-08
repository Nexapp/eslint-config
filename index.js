module.exports = {
  extends: [
    './rules/base',
    './rules/react',
    './rules/typescript',
  ].map(require.resolve),
  rules: {},
};
