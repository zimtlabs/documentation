# General

<p class="description">Data overall used in the SDK.</p>


## Generate object with meta

Returns signed object with meta.

Used for creating organization accounts, permissions..

### Arguments

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| Timstamp | Adds ISO 8601 timestamp | boolean | false | true

```javascript
const result = sdk.accounts.generateObjectWithMeta(true);

// result
{
    "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
    },
    "signature": "0xe633051fc76ae...",
}
```

## Generic SDK method arguments

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| Pagination | Pagination details | object | { } | { limit: 5, next: 'e1s23...' }
| Asset options | Additional asset options | object | { } | { info: true, parse: true }
| Query | Query object for search methods | object | { } | { query: { assets: [ { field: 'object.meta.created_by', operator: 'starts-with', value: '0x123' } ] }, limit: 5 }

### Pagination

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| limit | Amount of results to return | number | 30 | 5
| next | Next pagination cursor | string | none | eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0
| previous | Previous pagination cursor | string | none | eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0

### Asset options

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| info | Finds all info events for each asset and adds them under 'events' property | boolean | false | true
| parse | Finds latest info event for each asset, if any exists in 'events' property, and attaches it under 'info' property | boolean | false | true
| queryParams | Any additional query params to attach to the API url (all param keys and values will be URI encoded) | object | { } | { param: 'value' }

### Query

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| query | Query object with search filters | object | none | { assets: [ { field: 'object.meta.created_by', operator: 'starts-with', value: '0x123' } ] }
| limit | Amount of results to return | number | 30 | 5
| next | Next pagination cursor | string | none | eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0
| previous | Previous pagination cursor | string | none | eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0

### Query object

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| assets | For searching assets | array of Filters| none | [ { field: 'object.meta.created_by', operator: 'starts-with', value: '0x123' } ]
| events | For searching assets and/or events | array of Filters| none | [ { field: 'object.meta.created_by', operator: 'starts-with', value: '0x123' } ]
| documents | For searching documents | array of Filters| none | [ { field: 'object.meta.created_by', operator: 'starts-with', value: '0x123' } ]
| accounts | For searching accounts | array of Filters| none | [ { field: 'object.meta.created_by', operator: 'starts-with', value: '0x123' } ]
| organizations | For searching organizations | array of Filters| none | [ { field: 'object.meta.created_by', operator: 'starts-with', value: '0x123' } ]
| permissions | For searching permissions | array of Filters| none | [ { field: 'object.meta.created_by', operator: 'starts-with', value: '0x123' } ]


### Filter

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| field | Targeted object path / field | string | none | 'data.name'
| value | Value to filter on | any | none | 'Event'
| operator | Operator to use for evaluation | string | none | 'equal'

### Operator

Enum:
- equal
- not-equal
- equal-array
- not-equal-array
- greater-than
- greater-than-equal
- less-than
- less-than-equal
- inrange
- starts-with
- contains
