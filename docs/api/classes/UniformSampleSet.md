[@ncfour-us/stats](../index.md) / UniformSampleSet

# Class: UniformSampleSet

## Extends

- [`SampleSet`](SampleSet.md)

## Constructors

### Constructor

> **new UniformSampleSet**(`options`): `UniformSampleSet`

#### Parameters

##### options

[`UniformSampleSetOptions`](../interfaces/UniformSampleSetOptions.md)

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

#### Parameters

##### value

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Returns

`void`

#### Inherited from

[`SampleSet`](SampleSet.md).[`addValue`](SampleSet.md#addvalue)

***

### addValues()

> **addValues**(`values`): `void`

#### Parameters

##### values

[`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

#### Returns

`void`

#### Inherited from

[`SampleSet`](SampleSet.md).[`addValues`](SampleSet.md#addvalues)

***

### getMax()

> **getMax**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Inherited from

[`SampleSet`](SampleSet.md).[`getMax`](SampleSet.md#getmax)

***

### getMean()

> **getMean**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Inherited from

[`SampleSet`](SampleSet.md).[`getMean`](SampleSet.md#getmean)

***

### getMedian()

> **getMedian**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Inherited from

[`SampleSet`](SampleSet.md).[`getMedian`](SampleSet.md#getmedian)

***

### getMin()

> **getMin**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Inherited from

[`SampleSet`](SampleSet.md).[`getMin`](SampleSet.md#getmin)

***

### getMode()

> **getMode**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Inherited from

[`SampleSet`](SampleSet.md).[`getMode`](SampleSet.md#getmode)

***

### getNumSamples()

> **getNumSamples**(): `number`

#### Returns

`number`

#### Inherited from

[`SampleSet`](SampleSet.md).[`getNumSamples`](SampleSet.md#getnumsamples)

***

### getStddev()

> **getStddev**(): `number`

#### Returns

`number`

#### Inherited from

[`SampleSet`](SampleSet.md).[`getStddev`](SampleSet.md#getstddev)

***

### getValue()

> **getValue**(`index`): [`SampleSetValue`](../type-aliases/SampleSetValue.md) \| `undefined`

#### Parameters

##### index

`number`

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md) \| `undefined`

#### Inherited from

[`SampleSet`](SampleSet.md).[`getValue`](SampleSet.md#getvalue)

***

### getValues()

> **getValues**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

#### Inherited from

[`SampleSet`](SampleSet.md).[`getValues`](SampleSet.md#getvalues)

***

### getVariance()

> **getVariance**(): [`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Returns

[`SampleSetValue`](../type-aliases/SampleSetValue.md)

#### Inherited from

[`SampleSet`](SampleSet.md).[`getVariance`](SampleSet.md#getvariance)

***

### isNumeric()

> **isNumeric**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`SampleSet`](SampleSet.md).[`isNumeric`](SampleSet.md#isnumeric)

***

### setValues()

> **setValues**(`values`): `void`

#### Parameters

##### values

[`SampleSetValue`](../type-aliases/SampleSetValue.md)[]

#### Returns

`void`

#### Inherited from

[`SampleSet`](SampleSet.md).[`setValues`](SampleSet.md#setvalues)
