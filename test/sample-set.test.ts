// Copyright (c) 2026 Tim Hahn

import { describe, test, expect } from '@jest/globals';
import { Logger } from '@ncfour-us/logging';
import { SampleBucket, SampleSet } from '@ncfour-us/stats';

const logger = Logger.createLogger('simple', {
  level: 'error',
  json: false,
  color: true,
});

describe('SampleBucket tests', () => {

  test('instantiate with 0s works', () => {
    // Given - Arrange

    // When - Act
    const newBucket: SampleBucket = new SampleBucket(0, 0, 0);

    // Then - Assert
    expect(newBucket.min).toBe(0);
    expect(newBucket.max).toBe(0);
    expect(newBucket.count).toBe(0);
  });

  test('instantiate with values works', () => {
    // Given - Arrange

    // When - Act
    const newBucket: SampleBucket = new SampleBucket(0.1, 12, 3);

    // Then - Assert
    expect(newBucket.min).toBeCloseTo(0.1);
    expect(newBucket.max).toBeCloseTo(12);
    expect(newBucket.count).toBe(3);
  });

});

describe('SampleSet tests', () => {

  test('instantiate empty works', () => {
    // Given - Arrange

    // When - Act
    const newSampleSet = new SampleSet({
      logger: logger,
    });

    // Then - Assert
    expect(newSampleSet).toBeDefined();
    expect(newSampleSet.getNumSamples()).toBe(0);
  });

  test('instantiate small numeric set works', () => {
    // Given - Arrange

    // When - Act
    const newSampleSet = new SampleSet({
      initialValues: [0, 2.3, -3.4, -1, 6, 12],
      logger: logger,
    });

    // Then - Assert
    expect(newSampleSet).toBeDefined();
    expect(newSampleSet.getNumSamples()).toBe(6);
  });

  test('instantiate small string set works', () => {
    // Given - Arrange

    // When - Act
    const newSampleSet = new SampleSet({
      initialValues: ['blue', 'red', 'red', 'green', 'yellow', 'blue'],
      logger: logger,
    });

    // Then - Assert
    expect(newSampleSet).toBeDefined();
    expect(newSampleSet.getNumSamples()).toBe(6);
  });

  test('median of small string set works', () => {
    // Given - Arrange
    const newSampleSet = new SampleSet({
      initialValues: ['blue', 'red', 'red', 'green', 'yellow', 'blue'],
      logger: logger,
    });

    // When - Act
    const median = newSampleSet.getMedian();

    // Then - Assert
    expect(median).toBe('green');
  });

  test('mode of small string set works', () => {
    // Given - Arrange
    const newSampleSet = new SampleSet({
      initialValues: ['blue', 'red', 'red', 'green', 'yellow', 'blue'],
      logger: logger,
    });

    // When - Act
    const mode = newSampleSet.getMode();

    // Then - Assert
    expect(mode).toBe('blue');
  });

  test('median of slightly different string set works', () => {
    // Given - Arrange
    const newSampleSet = new SampleSet({
      initialValues: ['blue', 'red', 'red', 'green', 'yellow', 'blue', 'red'],
      logger: logger,
    });

    // When - Act
    const median = newSampleSet.getMedian();

    // Then - Assert
    expect(median).toBe('red');
  });

  test('mode of slightly different string set works', () => {
    // Given - Arrange
    const newSampleSet = new SampleSet({
      initialValues: ['blue', 'red', 'red', 'green', 'yellow', 'blue', 'red'],
      logger: logger,
    });

    // When - Act
    const mode = newSampleSet.getMode();

    // Then - Assert
    expect(mode).toBe('red');
  });

  test('mean of small string set works', () => {
    // Given - Arrange
    const newSampleSet = new SampleSet({
      initialValues: ['blue', 'red', 'red', 'green', 'yellow', 'blue'],
      logger: logger,
    });

    // When - Act
    const mean = newSampleSet.getMean();

    // Then - Assert
    expect(mean).toBe('red');
  });

  test('median of small numeric set works', () => {
    // Given - Arrange
    const newSampleSet = new SampleSet({
      initialValues: [0, 2.3, -3.4, -1, 6, 12],
      logger: logger,
    });

    // When - Act
    const median = newSampleSet.getMedian();

    // Then - Assert
    expect(median).toBe(0);
  });

  test('mean of small numeric set works', () => {
    // Given - Arrange
    const newSampleSet = new SampleSet({
      initialValues: [0, 2.3, -3.4, -1, 6, 12],
      logger: logger,
    });

    // When - Act
    const mean = newSampleSet.getMean();

    // Then - Assert
    expect(mean).toBeCloseTo(2.65);
  });

  test('mode of small numeric set works', () => {
    // Given - Arrange
    const newSampleSet = new SampleSet({
      initialValues: [0, 2.3, -3.4, -1, 6, 12],
      logger: logger,
    });

    // When - Act
    const mode = newSampleSet.getMode();

    // Then - Assert
    expect(mode).toBeCloseTo(-0.833333);
  });

  test('add of string to small numeric set is IGNORED', () => {
    // Given - Arrange
    const newSampleSet = new SampleSet({
      initialValues: [0, 2.3, -3.4, -1, 6, 12],
      logger: logger,
    });

    // When - Act
    newSampleSet.addValue('green');
    const numSamples = newSampleSet.getNumSamples();

    // Then - Assert
    expect(numSamples).toBe(6);
  });

  test('add of number to small string set is IGNORED', () => {
    // Given - Arrange
    const newSampleSet = new SampleSet({
      initialValues: ['blue', 'red', 'red', 'green', 'yellow', 'blue'],
      logger: logger,
    });

    // When - Act
    newSampleSet.addValue(13);
    const numSamples = newSampleSet.getNumSamples();

    // Then - Assert
    expect(numSamples).toBe(6);
  });
});
