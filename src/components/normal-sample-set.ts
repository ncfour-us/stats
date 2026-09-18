// Copyright (c) 2026 Tim Hahn

import { ILogger } from '@ncfour-us/logging';
import { SampleSet } from './sample-set.js';
import { UniformSampleSet } from './uniform-sample-set.js';

/**
 * The options for instantiating a Normal distribution SampleSet.
 */
export interface NormalSampleSetOptions {

  /**
   * number of smaples to generate, default 1000
   */
  numSamples?: number;

  /**
   * optional mean value, default 0
   */
  mean?: number;

  /**
   * optional standard deviation value, default 1
   */
  stddev?: number;

  // dependencies
  /**
   * optional logger to use.
   */
  logger?: ILogger;
};

/**
 * Class to create a Normal distribution SampleSet
 * with values in the range (-infinity,infinity),
 * with default mean 0 and default standard deviation 1.
 */
export class NormalSampleSet extends SampleSet {

  /**
   * Create a new NormalSampleSet instance.
   *
   * @param options See {@link NormalSampleSetOptions}
   */
  constructor(options: NormalSampleSetOptions) {

    super({
      logger: options.logger,
    });

    // Create a Normal distribution using the Box-Muller transform method.
    //
    // For information on this method, refer to: https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform

    const U1 = new UniformSampleSet({
      numSamples: options.numSamples ?? 1000,
    });
    const U2 = new UniformSampleSet({
      numSamples: options.numSamples ?? 1000,
    });

    const u1 = U1.getValues() as number[];
    const u2 = U2.getValues() as number[];

    const z0 = u1.map( (u1Value, index) => {
      return Math.sqrt(-2.0*Math.log(u1Value))*Math.cos(2.0*Math.PI*u2[index]);
    });

    // const z1 = u1.map( (u1Value, index) => {
    //   return Math.sqrt(-2.0*Math.log(u1Value))*Math.sin(2.0*Math.PI*u2[index])
    // });
    const mean = options.mean ?? 0;
    const stddev = options.stddev ?? 1;

    this.addValues( z0.map((value) => mean + (value)*(stddev)) );

    this.logger?.trace(`NormalSampleSet.constructor: numSamples: ${this.getNumSamples()}`);

  }
}
