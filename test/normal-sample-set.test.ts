// Copyright (c) 2026 Tim Hahn

import { describe, test, expect } from '@jest/globals';
import { Logger } from '@ncfour-us/logging';
import { NormalSampleSet } from '@ncfour-us/stats';

const logger = Logger.createLogger('simple', {
  level: 'trace',
  json: false,
  color: true,
});

describe('NormalSampleSet tests', () => {

  test('instantiate default works', () => {
    // Given - Arrange

    // When - Act
    const newSampleSet = new NormalSampleSet({
      logger: logger,
    });

    // Then - Assert
    expect(newSampleSet).toBeDefined();
    expect(newSampleSet.getNumSamples()).toBe(1000);
  });

  test('instantiate small set works', () => {
    // Given - Arrange

    // When - Act
    const newSampleSet = new NormalSampleSet({
      numSamples: 100,
      logger: logger,
    });

    // Then - Assert
    expect(newSampleSet).toBeDefined();
    expect(newSampleSet.getNumSamples()).toBe(100);
  });

  test('instantiate with non-default min/max works', () => {
    // Given - Arrange

    // When - Act
    const newSampleSet = new NormalSampleSet({
      numSamples: 1000,
      mean: 5,
      stddev: 3,
      logger: logger,
    });
    const numSamples = newSampleSet.getNumSamples();
    const mean = newSampleSet.getMean();

    // Then - Assert
    expect(numSamples).toBe(1000);
    expect(mean).toBeCloseTo(5, 0);
  });
});
