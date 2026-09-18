// Copyright (c) 2026 Tim Hahn

import {
  TypeScriptESMProject,
  RepoBuildPackageModel,
  sampleReadmeProps,
  ExamplesFolder,
} from '@ncfour-us/projen-utils';
import { javascript } from 'projen';

const project = new TypeScriptESMProject({
  authorName: 'Tim Hahn',
  authorEmail: 'hahntj@gmail.com',

  defaultReleaseBranch: 'main',
  name: '@ncfour-us/stats',
  description: 'A set of basic statistics classes and utility functions',
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,

  repository: 'https://github.com/ncfour-us/stats.git',

  packageName: '@ncfour-us/stats',

  // set up the project with a LICENSE and copyright info
  license: 'MIT',
  copyrightOwner: 'Tim Hahn',
  copyrightPeriod: '2026',

  devDeps: ['@ncfour-us/projen-utils', 'typescript@^6', '@jest/globals'],
  deps: ['@ncfour-us/logging'],

  eslintFlatConfig: true,
  prettierFlatConfig: true,
  precommitConfig: true,
  pnpmWorkspace: true,

  repoBuildPackageModel: RepoBuildPackageModel.LOCAL_BUILD_PACKAGE,
  localPackageArchiveDir: '~/.tjh-packages',
  releaseToLocal: true,
  releaseToNpm: true,
  releaseToGithub: true,
  buildTagTask: true,

  docsIndex: true,
  apiDocumentation: true,
  apiEntryPoints: ['src/index.ts'],

  readme: sampleReadmeProps({
    namespace: '@ncfour-us',
    project: 'stats',
    author: 'Tim Hahn',
    authorEmail: 'hahntj@gmail.com',
    authorGithubUser: 'climbertjh',
    license: 'MIT',
  }),
});

// mark the entry points to the module
project.addFields({
  exports: {
    '.': './lib/index.js',
  },
});

new ExamplesFolder(project, {
  exampleTsFile: false,
});

project.synth();
