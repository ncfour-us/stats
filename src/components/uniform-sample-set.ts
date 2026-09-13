// Copyright (c) 2026 Tim Hahn

import { ILogger } from '@ncfour-us/logging';
import { SampleSet } from './sample-set.js';

export interface UniformSampleSetOptions {
  numSamples?: number;
  min?: number;
  max?: number;

  // dependencies
  logger?: ILogger;
};

export class UniformSampleSet extends SampleSet {

  constructor(options: UniformSampleSetOptions) {

    super({
      logger: options.logger,
    });

    this.addValues(Array.from({ length: options.numSamples ?? 1000 }, (_element, _index) => {
      const min = options.min ?? 0;
      const max = options.max ?? 1;

      const newVal = min + (max-min)*Math.random();

      return newVal;
    }));

    this.logger?.trace(`UniformSampleSet.constructor: numSamples: ${this.getNumSamples()}`);

  }
}
