// Copyright (C) 2025 Tim Hahn

// Information on this config file: https://prettier.io/docs/configuration

import { type Config } from 'prettier';

const config: Config = {
  arrowParens: 'always',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  // jsxBracketSameLine: false,
  jsxSingleQuote: true,
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'consistent',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};

export default config;
