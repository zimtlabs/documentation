# General

<p class="description">Data overall used in the SDK.</p>


## Ready

Fetches Hub token and returns true on success, or returns true if token already exists.

This token is used to authenticate all requests SDK makes to ZIMT Hub.

```javascript
const isReady = await sdk.ready();

console.log(isReady) // true or false
```

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
| Pagination | Pagination details | object | { } | { limit: 5, skip: 30,  sortAscending: false, total: true }
| Asset options | Additional asset options | object | { } | { info: true, parse: true }
| Query | Query object for search methods | object | { } | { query: { assets: [ { field: 'object.meta.created_by', operator: 'starts-with', value: '0x123' } ] }, limit: 5 }

### Pagination

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| limit | Amount of results to return | number | 30 | 5
| skip | Number of results to skip | number | 0 | 30
| sortAscending | Sort results | boolean | false | true
| total | Total results count | boolean | false | true

### Asset options

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| queryParams | Any additional query params to attach to the API url (all param keys and values will be URI encoded) | object | { } | { param: 'value' }

### Query

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| query | Query object with search filters | object | none | { assets: [ { field: 'object.meta.created_by', operator: 'starts-with', value: '0x123' } ] }
| limit | Amount of results to return | number | 30 | 5
| skip | Number of results to skip | number | 0 | 30

### Query object

Allowed collections for quering:

assets, events, documents, organizations, accounts, teams, permissions, apiKeys, apps, organizationApps, services, hooks, plans, defaults, logs, bundles, strategies


### Filter

| Name | Description | Type | Default | Example
|:-----|:------------|:-----|:--------|:-------
| field | Targeted object path / field | string | none | 'data.name'
| value | Value to filter on | any | none | 'Event'
| operator | Operator to use for evaluation | string | none | 'equal'

### Operator

Enum:

equal, not-equal, greater-than, greater-than-equal, less-than, less-than-equal, array-some, array-all, starts-with, contains
