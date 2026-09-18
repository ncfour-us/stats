// Copyright (c) 2026 Tim Hahn

import { ILogger } from '@ncfour-us/logging';
import { SampleSet } from './sample-set.js';

/**
 * The options for instantiating a Uniform distribution SampleSet.
 */
export interface UniformSampleSetOptions {

  /**
   * number of smaples to generate, default 1000
   */
  numSamples?: number;

  /**
   * optional minimum value, default 0
   */
  min?: number;

  /**
   * optional maximum value, default 1
   */
  max?: number;

  // dependencies
  /**
   * optional logger to use.
   */
  logger?: ILogger;
};

/**
 * Class to create a Uniform distribution SampleSet
 * with values in the range [0,1).
 */
export class UniformSampleSet extends SampleSet {

  /**
   * Create a new UniformSampleSet instance.
   *
   * @param options See {@link UniformSampleSetOptions}
   */
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
