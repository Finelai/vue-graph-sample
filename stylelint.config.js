export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss'],
  ignoreFiles: ['node_modules/**', 'src/assets/styles/reset.scss'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {},
    },
  ],
  rules: {
    'selector-class-pattern': null,
  },
};
