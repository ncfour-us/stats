[@ncfour-us/stats](../index.md) / UniformSampleSet

# Class: UniformSampleSet

Class to create a Uniform distribution SampleSet
with values in the range [0,1).

## Extends

- [`SampleSet`](SampleSet.md)

## Constructors

### Constructor

> **new UniformSampleSet**(`options`): `UniformSampleSet`

Create a new UniformSampleSet instance.

#### Parameters

##### options

[`UniformSampleSetOptions`](../interfaces/UniformSampleSetOptions.md)

See [UniformSampleSetOptions](../interfaces/UniformSampleSetOptions.md)

#### Returns

`UniformSampleSet`

#### Overrides

[`SampleSet`](SampleSet.md).[`constructor`](SampleSet.md#constructor)

## Properties

### logger?

> `protected` `optional` **logger?**: `ILogger`

#### Inherited from

[`SampleSet`](SampleSet.md).[`logger`](SampleSet.md#logger)

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

#### Inherited from

[`SampleSet`](SampleSet.md).[`addValue`](SampleSet.md#addvalue)

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

#### Inherited from

[`SampleSet`](SampleSet.md).[`addValues`](SampleSet.md#addvalues)

***

### getDistribution()

> **getDistribution**(): [`SampleBucket`](SampleBucket.md)[]

Get the calculated distribution buckets for the SampleSet.

#### Returns

[`SampleBucket`](SampleBucket.md)[]

distribution - Array of SampleBuckets representing the distribution of the SampleSet

#### Inherited from

[`SampleSet`](SampleSet.md).[`getDistribution`](SampleSet.md#getdistribution)

***

### getMax()

> **getMax**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

Get the maximum value of the SampleSet.  For string
values, this is ordered by string sorting rules.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

SampleSetValue - maximum value of the SampleSet

#### Inherited from

[`SampleSet`](SampleSet.md).[`getMax`](SampleSet.md#getmax)

***

### getMean()

> **getMean**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

Get the mean value of the SampleSet.  For string
values, this is ordered by string sorting rules.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

SampleSetValue - mean value of the SampleSet

#### Inherited from

[`SampleSet`](SampleSet.md).[`getMean`](SampleSet.md#getmean)

***

### getMedian()

> **getMedian**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

Get the median value of the SampleSet.  For string
values, this is ordered by string sorting rules.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

SampleSetValue - median value of the SampleSet

#### Inherited from

[`SampleSet`](SampleSet.md).[`getMedian`](SampleSet.md#getmedian)

***

### getMin()

> **getMin**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

Get the minimum value of the SampleSet.  For string
values, this is ordered by string sorting rules.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

SampleSetValue - minimum value of the SampleSet

#### Inherited from

[`SampleSet`](SampleSet.md).[`getMin`](SampleSet.md#getmin)

***

### getMode()

> **getMode**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

Get the mode value of the SampleSet.  For string
values, this is ordered by string sorting rules.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

SampleSetValue - mode value of the SampleSet

#### Inherited from

[`SampleSet`](SampleSet.md).[`getMode`](SampleSet.md#getmode)

***

### getNumSamples()

> **getNumSamples**(): `number`

Get the number of values in the SampleSet

#### Returns

`number`

number of samples in the SampleSet

#### Inherited from

[`SampleSet`](SampleSet.md).[`getNumSamples`](SampleSet.md#getnumsamples)

***

### getPercentiles()

> **getPercentiles**(): [`SampleSetPercentiles`](../interfaces/SampleSetPercentiles.md)

Get the percentiles values for the SampleSet.

#### Returns

[`SampleSetPercentiles`](../interfaces/SampleSetPercentiles.md)

sampleSetPercentiles - the 0, 25, 50, 75, and 100th percential values for the SampleSet.

#### Inherited from

[`SampleSet`](SampleSet.md).[`getPercentiles`](SampleSet.md#getpercentiles)

***

### getStddev()

> **getStddev**(): `number`

Get the standard deviation value of the SampleSet.  For string
values, this is the standard deviation across the size of the
SampleSet [0,sampleSet.getNumSamples()-1].

#### Returns

`number`

number - Calculated standard deviation of the SampleSet

#### Inherited from

[`SampleSet`](SampleSet.md).[`getStddev`](SampleSet.md#getstddev)

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

#### Inherited from

[`SampleSet`](SampleSet.md).[`getValue`](SampleSet.md#getvalue)

***

### getValues()

> **getValues**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

get the array of values held in the SampleSet.

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

SampleSetValue[] - array of SampleSetValue

#### Inherited from

[`SampleSet`](SampleSet.md).[`getValues`](SampleSet.md#getvalues)

***

### getVariance()

> **getVariance**(): `number`

Get the variance value of the SampleSet.  For string
values, this is the variance across the size of the SampleSet [0,sampleSet.getNumSamples()-1].

#### Returns

`number`

number - Calculated variance of the SampleSet

#### Inherited from

[`SampleSet`](SampleSet.md).[`getVariance`](SampleSet.md#getvariance)

***

### isNumeric()

> **isNumeric**(): `boolean`

Get the type of values in the SampleSet

#### Returns

`boolean`

true if numeric values, false if string values

#### Inherited from

[`SampleSet`](SampleSet.md).[`isNumeric`](SampleSet.md#isnumeric)

***

### setValues()

> **setValues**(`values`): `void`

Replace the set of values held in the SampleSet

#### Parameters

##### values

[`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

#### Returns

`void`

#### Inherited from

[`SampleSet`](SampleSet.md).[`setValues`](SampleSet.md#setvalues)
