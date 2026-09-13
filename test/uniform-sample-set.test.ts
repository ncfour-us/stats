// Copyright (c) 2026 Tim Hahn

import { describe, test, expect } from '@jest/globals';
import { Logger } from '@ncfour-us/logging';
import { UniformSampleSet } from '@ncfour-us/stats';

const logger = Logger.createLogger('simple', {
  level: 'trace',
  json: false,
  color: true,
});

describe('UniformSampleSet tests', () => {

  test('instantiate default works', () => {
    // Given - Arrange

    // When - Act
    const newSampleSet = new UniformSampleSet({
      logger: logger,
    });

    // Then - Assert
    expect(newSampleSet).toBeDefined();
    expect(newSampleSet.getNumSamples()).toBe(1000);
  });

  test('instantiate small set works', () => {
    // Given - Arrange

    // When - Act
    const newSampleSet = new UniformSampleSet({
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
    const newSampleSet = new UniformSampleSet({
      numSamples: 1000,
      min: -1,
      max: 1,
      logger: logger,
    });
    const numSamples = newSampleSet.getNumSamples();
    const mean = newSampleSet.getMean();

    // Then - Assert
    expect(numSamples).toBe(1000);
    expect(mean).toBeCloseTo(0, 1);
  });
});
