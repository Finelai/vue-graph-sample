import eslint from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from "eslint-config-prettier";
import vueParser from "vue-eslint-parser";

export default [
  eslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["src/**/*.ts", "src/**/*.vue"],
    ignores: ["**/*.config.js"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: "module",
      },
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
      'vue/multi-word-component-names': 'off',
    },
  }
]
