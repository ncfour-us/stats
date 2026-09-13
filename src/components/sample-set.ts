// Copyright (c) 2026 Tim Hahn

import { ILogger } from '@ncfour-us/logging';

export class SampleBucket {
  public min: number;
  public max: number;
  public count: number;

  constructor(min: number, max: number, count: number) {
    this.min = min;
    this.max = max;
    this.count = count;
  }
}

export type SampleSetValue = number | string;

export interface SampleSetOptions {
  initialValues?: SampleSetValue[];

  // dependencies
  logger?: ILogger;
};

export class SampleSet {
  // dependencies
  protected logger?: ILogger;

  // sample data
  private valuesNumeric: boolean;
  private values: number[];
  private dictionary: string[];

  // calculated items
  private recalculate: boolean; // sets whether or not re-calculation is needed
  private mean: number;
  private median: number;
  private mode: number;
  private variance: number;
  private stddev: number;
  private max: number;
  private min: number;
  private distribution: SampleBucket[];

  constructor(options: SampleSetOptions) {
    // dependencies
    this.logger = options.logger;

    // intialize information
    this.recalculate = true;
    this.mean = 0;
    this.median = 0;
    this.mode = 0;
    this.variance = 0;
    this.stddev = 0;
    this.min = 0;
    this.max = 0;
    this.distribution = [];

    // initialize values
    this.valuesNumeric = true;
    this.values = ([] as number[]);
    this.dictionary = ([] as string[]);
    if (options.initialValues) {
      this.setValues(options.initialValues);
    }

    this.logger?.trace(`SampleSet.constructor: numSamples: ${this.values.length}`);

  }

  public getValues(): SampleSetValue[] {
    let retVals: SampleSetValue[];
    if (this.valuesNumeric) {
      retVals = this.values.map((value) => value);
    } else {
      retVals = this.values.map((value) => this.dictionary[value]);
    }

    return retVals;
  }

  public getValue(index: number): SampleSetValue | undefined {
    let retVal: SampleSetValue;

    if (index < 0 || index >= this.values.length) {
      return undefined;
    }

    if (this.valuesNumeric) {
      retVal = this.values[index];
    } else {
      retVal = this.dictionary[this.values[index]];
    }

    return retVal;
  }

  public setValues(values: SampleSetValue[]) {
    this.values = [] as number[];
    this.dictionary = [] as string[];

    this.logger?.trace(`SampleSet.setValues: typeof value: ${typeof values[0]}`);

    if (values.length > 0 && typeof values[0] === 'string') {
      this.valuesNumeric = false;
    } else {
      this.valuesNumeric = true;
    }

    this.addValues(values);

    this.recalculate = true;
  }

  public addValues(values: SampleSetValue[] ) {
    if ( this.values.length > 0 &&
        ( typeof values[0] === 'string' && this.valuesNumeric ) ||
        ( typeof values[0] === 'number' && !this.valuesNumeric ) ) {
      // type mismatch on values being added - quietly IGNORE
      this.logger?.error(`SampleSet.addValues: type mismatch on values added, valuesNumeric: ${this.valuesNumeric}, values type: ${typeof values[0]}`);
      return;
    }

    if (values.length > 0 && typeof values[0] === 'string') {
      this.valuesNumeric = false;

      (values as string[]).forEach((value) => {
        const existingItemIndex = this.dictionary.findIndex((dictItem) => dictItem === value);
        if (existingItemIndex >= 0) {
          // item found in dictionary
          this.values.push(existingItemIndex);
        } else {
          // add to dictionary
          this.dictionary.push(value);
          this.values.push(this.dictionary.length-1);
        }
      });

      this.logger?.trace(`SampleSet.addValues: resulting dictionary: ${this.dictionary}`);
    } else {
      // number values
      this.valuesNumeric = true;
      this.values = (values as number[]).map((value) => value) as number[];
    }

    this.logger?.trace(`SampleSet.addValues: new numSamples: ${this.values.length}`);

    this.recalculate = true;
  }

  public addValue(value: SampleSetValue) {
    if ( this.values.length > 0 &&
        ( typeof value === 'string' && this.valuesNumeric ) ||
        ( typeof value === 'number' && !this.valuesNumeric ) ) {
      // type mismatch on values being added - quietly IGNORE
      this.logger?.error(`SampleSet.addValue: type mismatch on value added, valuesNumeric: ${this.valuesNumeric}, values type: ${typeof value}`);
      return;
    }

    if (typeof value === 'string') {
      const existingItemIndex = this.dictionary.findIndex((dictItem) => dictItem === value);
      if (existingItemIndex > 0) {
        // item found in dictionary
        this.values.push(existingItemIndex);
      } else {
        // add to dictionary
        this.dictionary.push(value);
        this.values.push(this.dictionary.length-1);
      }
    } else {
      this.values.push(value);
    }

    this.recalculate = true;
  }

  public getMean(): SampleSetValue {
    if (this.recalculate) {
      this.recalculateStats();
    }
    return this.valuesNumeric ? this.mean : this.dictionary[this.mean];
  }

  public getMedian(): SampleSetValue {
    if (this.recalculate) {
      this.recalculateStats();
    }
    return this.valuesNumeric ? this.median : this.dictionary[this.median];
  }

  public getMode(): SampleSetValue {
    if (this.recalculate) {
      this.recalculateStats();
    }
    return this.valuesNumeric ? this.mode : this.dictionary[this.mode];
  }

  public getMin(): SampleSetValue {
    if (this.recalculate) {
      this.recalculateStats();
    }
    return this.valuesNumeric ? this.min : this.dictionary[this.min];
  }

  public getMax(): SampleSetValue {
    if (this.recalculate) {
      this.recalculateStats();
    }
    return this.valuesNumeric ? this.max : this.dictionary[this.max];
  }

  public getVariance(): SampleSetValue {
    if (this.recalculate) {
      this.recalculateStats();
    }
    return this.variance;
  }

  public getStddev(): number {
    if (this.recalculate) {
      this.recalculateStats();
    }
    return this.stddev;
  }

  public isNumeric(): boolean {
    return this.valuesNumeric;
  }

  public getNumSamples(): number {
    return this.values.length;
  }

  private recalculateStats() {

    this.calcMean();
    this.calcVariance();
    this.calcFromSortedValues();

    this.recalculate = false;
  }

  private calcMean() {
    this.mean = this.values.reduce((sum, value) => sum+value, 0) / this.values.length;
    this.mean = this.valuesNumeric ? this.mean : Math.round(this.mean);
  }

  // Calculates the variance and standard deviation
  // NOTE - this function ASSUMES that the mean has already been recalculated
  private calcVariance() {
    this.variance = this.values.reduce((sum, value) => sum+((value-this.mean)*(value-this.mean)), 0) / this.values.length;
    this.stddev = Math.sqrt(this.variance);
  }

  // Calculates median, mode, and distribution
  private calcFromSortedValues() {
    // sort the values
    let sortedValues: number[];

    if ( this.valuesNumeric ) {
      // the default sort function is appropriate
      sortedValues = this.values.toSorted( (a, b) =>
        a < b ?
          -1 :
          a > b ?
            1 :
            0,
      );

      this.logger?.trace(`SampleSet.calcFromSortedValues: sortedValues: ${sortedValues}`);
    } else {
      // need to sort based on dictionary lookup
      sortedValues = this.values.toSorted( (a, b) =>
        this.dictionary[a] < this.dictionary[b] ?
          -1 :
          (this.dictionary[a] > this.dictionary[b] ?
            1 :
            0 ),
      );

      this.logger?.trace(`SampleSet.calcFromSortedValues: sortedValues: ${sortedValues.map((value) => this.dictionary[value])}`);
    }


    // get the median
    const midPointIndex = Math.trunc((this.values.length-1)/2);
    this.median = sortedValues[midPointIndex];
    this.logger?.trace(`SampleSet.calcFromSortedValues: midPointIndex: ${midPointIndex}`);

    // get the min and max values
    this.min = sortedValues[0];
    this.max = sortedValues[sortedValues.length-1];

    // create the distribution histogram/table
    this.distribution = [];
    if ( this.valuesNumeric ) {
      // in this case, create buckets of equal size which span the range [min, max)
      // and count the number of values in each range

      // Use the sqrt(numSamples) rule of thumb for calculating the number of buckets
      const numBuckets: number = Math.trunc(Math.sqrt(this.values.length)+1);
      const bucketSize: number = (this.max-this.min)/numBuckets;

      let currentMin: number = sortedValues[0];
      let currentMax: number = currentMin + bucketSize;
      if (currentMax === this.max) {
        // VERY unlikely - but just in case, add a very small amount so as not to have a
        // bucket of one with only the max value at the end.
        currentMax += 1e-10;
      }
      let count: number = 0;

      for (let i=0; i<sortedValues.length; i++) {
        if (sortedValues[i] >= currentMin && sortedValues[i] < currentMax) {
          count++;
        } else {
          this.distribution.push(new SampleBucket(currentMin, currentMax, count));
          currentMin += bucketSize;
          currentMax = currentMin+bucketSize;
          if (currentMax === this.max) {
            // VERY unlikely - but just in case, add a very small amount so as not to have a
            // bucket of one with only the max value at the end.
            currentMax += 1e-10;
          }
          count = 1;
        }

      }
      this.distribution.push(new SampleBucket(currentMin, currentMax, count));

      // numBuckets and distribution.length should match
      this.logger?.trace(`SampleSet.calcFromSortedValues: numeric data, numBuckets: ${numBuckets}, distribution.length: ${this.distribution.length}`);
    } else {
      // in this case, the number of buckets matches the number of strings in the SampleSet
      // which is the size of the dictionary

      let currentValue: number = sortedValues[0];
      let count: number = 0;

      for (let i=0; i<sortedValues.length; i++) {
        if (sortedValues[i] === currentValue) {
          count++;
        } else {
          this.distribution.push(new SampleBucket(currentValue, currentValue, count));
          currentValue = sortedValues[i];
          count = 1;
        }

      }
      this.distribution.push(new SampleBucket(currentValue, currentValue, count));

      // dictionary.length and distribution.length should match
      this.logger?.trace(`SampleSet.calcFromSortedValues: string data, dictionary.length: ${this.dictionary.length}, distribution.length: ${this.distribution.length}`);
      this.logger?.trace(`SampleSet.calcFromSortedValues: dictionary: ${this.dictionary}`);
    }

    this.logger?.trace(`SampleSet.calcFromSortedValues: numeric: ${this.valuesNumeric}, distribution details: ${JSON.stringify(this.distribution, null, 2)}`);

    // calculate the mode
    const maxDistributionBucketIndex = this.distribution.reduce(
      (curMaxIndex, bucket, index) => bucket.count > this.distribution[curMaxIndex].count ? index : curMaxIndex,
      0,
    );
    if ( this.valuesNumeric ) {
      this.mode = this.distribution[maxDistributionBucketIndex].min +
        (this.distribution[maxDistributionBucketIndex].max - this.distribution[maxDistributionBucketIndex].min)/2;
    } else {
      this.mode = this.distribution[maxDistributionBucketIndex].min;
    }

    this.logger?.trace(`SampleSet.calcFromSortedValues: mode: ${this.mode}`);

  }

}
