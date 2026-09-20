[@ncfour-us/stats](../index.md) / SampleSet

# Class: SampleSet

Base class to represent samples of a random variable
in the stats package.

Other calculated distributions are based on this base
class.  However, instances of the base class can be
created as well, if a set of random values exists to
initialize the SampleSet.

## Extended by

- [`UniformSampleSet`](UniformSampleSet.md)
- [`NormalSampleSet`](NormalSampleSet.md)

## Constructors

### Constructor

> **new SampleSet**(`options`): `SampleSet`

Create a new SampleSet instance.

#### Parameters

##### options

[`SampleSetOptions`](../interfaces/SampleSetOptions.md)

See [SampleSetOptions](../interfaces/SampleSetOptions.md)

#### Returns

`SampleSet`

## Properties

### logger?

> `protected` `optional` **logger?**: `ILogger`

## Methods

### addValue()

> **addValue**(`value`): `void`

Add a single value to the SampleSet

#### Parameters

##### value

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

value to add to the SampleSet

#### Returns

`void`

***

### addValues()

> **addValues**(`values`): `void`

Add values to the SampleSet

#### Parameters

##### values

[`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

values to add to the SampleSet

#### Returns

`void`

***

### getDistribution()

> **getDistribution**(): [`SampleBucket`](SampleBucket.md)[]

Get the calculated distribution buckets for the SampleSet.

#### Returns

[`SampleBucket`](SampleBucket.md)[]

distribution - Array of SampleBuckets representing the distribution of the SampleSet

***

### getMax()

> **getMax**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

Get the maximum value of the SampleSet.  For string
values, this is ordered by string sorting rules.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

SampleSetValue - maximum value of the SampleSet

***

### getMean()

> **getMean**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

Get the mean value of the SampleSet.  For string
values, this is ordered by string sorting rules.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

SampleSetValue - mean value of the SampleSet

***

### getMedian()

> **getMedian**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

Get the median value of the SampleSet.  For string
values, this is ordered by string sorting rules.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

SampleSetValue - median value of the SampleSet

***

### getMin()

> **getMin**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

Get the minimum value of the SampleSet.  For string
values, this is ordered by string sorting rules.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

SampleSetValue - minimum value of the SampleSet

***

### getMode()

> **getMode**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

Get the mode value of the SampleSet.  For string
values, this is ordered by string sorting rules.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

SampleSetValue - mode value of the SampleSet

***

### getNumSamples()

> **getNumSamples**(): `number`

Get the number of values in the SampleSet

#### Returns

`number`

number of samples in the SampleSet

***

### getPercentiles()

> **getPercentiles**(): [`SampleSetPercentiles`](../interfaces/SampleSetPercentiles.md)

Get the percentiles values for the SampleSet.

#### Returns

[`SampleSetPercentiles`](../interfaces/SampleSetPercentiles.md)

sampleSetPercentiles - the 0, 25, 50, 75, and 100th percential values for the SampleSet.

***

### getStddev()

> **getStddev**(): `number`

Get the standard deviation value of the SampleSet.  For string
values, this is the standard deviation across the size of the
SampleSet [0,sampleSet.getNumSamples()-1].

#### Returns

`number`

number - Calculated standard deviation of the SampleSet

***

### getValue()

> **getValue**(`index`): [`SampleSetValue`](../type-aliases/SampleSetValue.md) \| `undefined`

get a specific value, by index, held in the SampleSet.

#### Parameters

##### index

`number`

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md) \| `undefined`

SampleSetValue

***

### getValues()

> **getValues**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

get the array of values held in the SampleSet.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

SampleSetValue[] - array of SampleSetValue

***

### getVariance()

> **getVariance**(): `number`

Get the variance value of the SampleSet.  For string
values, this is the variance across the size of the SampleSet [0,sampleSet.getNumSamples()-1].

#### Returns

`number`

number - Calculated variance of the SampleSet

***

### isNumeric()

> **isNumeric**(): `boolean`

Get the type of values in the SampleSet

#### Returns

`boolean`

true if numeric values, false if string values

***

### setValues()

> **setValues**(`values`): `void`

Replace the set of values held in the SampleSet

#### Parameters

##### values

[`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

#### Returns

`void`
