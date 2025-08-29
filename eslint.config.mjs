// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    ignorePatterns: ['webpack.config.js', 'node_modules', 'dist'],
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
]);
