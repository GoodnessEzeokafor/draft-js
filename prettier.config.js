/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: false,
  jsxBracketSameLine: true,
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'flow',
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 80,
      },
    },
  ],
};
