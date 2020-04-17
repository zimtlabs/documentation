# Analytics

<p class="description">Analytics management.</p>

## Get collection count for time range

Returns total number of documents in the collection for time range.

[API reference](/api#tag/Analytics/paths/~1analytics~1count~1{collection}~1{start}~1{end}/get).

```javascript
const result = await sdk.analytics.countCollection(Collection, start, end);
// sdk.analytics.countCollection('assets', 1579967810000, 1571067810000);

// result
{
  "response": 24,
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Get collection count for time range per organization

Returns total number of documents in the collection for time range, per organization.

[API reference](/api#tag/Analytics/paths/~1analytics~1count~1{organization_id}~1{collection}~1{start}~1{end}/get).

```javascript
const result = await sdk.analytics.countCollectionForOrganization(Organization ID, collection, start, end);
// sdk.analytics.countCollectionForOrganization('0x123...', 'assets', 1579967810000, 1571067810000);

// result
{
  "response": 15,
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Get collection data points for time range

Returns array of data points with timestamp and count, for collection, for time range.

[API reference](/api#tag/Analytics/paths/~1analytics~1data-points~1{collection}~1{start}~1{end}~1{group_by}/get).

```javascript
const result = await sdk.analytics.countDataPoints(Collection, start, end);
// sdk.analytics.countDataPoints('assets', 1579967810000, 1571067810000);

// result
{
  "response": [
    {
      "timestamp": 1583948398,
      "count": 5
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Get collection data points for time range per organization

Returns array of data points with timestamp and count, for collection, for time range, created by the organization.

[API reference](/api#tag/Analytics/paths/~1analytics~1data-points~1{organization_id}~1{collection}~1{start}~1{end}~1{group_by}/get).

```javascript
const result = await sdk.analytics.countDataPointsForOrganization(Organization ID, collection, start, end);
// sdk.analytics.countDataPointsForOrganization('0x123...', 'assets', 1579967810000, 1571067810000);

// result
{
  "response": [
    {
      "timestamp": 1583948398,
      "count": 5
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```
