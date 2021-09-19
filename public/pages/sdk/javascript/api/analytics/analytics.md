# Analytics

<p class="description">Analytics management.</p>

## Get many analytics

Returns array of analytics.

[API reference](/api#tag/Analytics/paths/~1analytics/get).

```javascript
const result = await sdk.analytics.getManyAnalytics(Body: { collection, organization, type, date }, Options: { parse: boolean });
// sdk.analytics.getManyAnalytics({ collection: 'assets', organization: '0x123...', type: 'day', date: '2020-07-24' }, { parse: true });

// result
{
  "response": [
    {
      "type ": "day",
      "action": "create",
      "object": "assets",
      "organization": "0x123...",
      "value": 4,
      "date": "2020-07-24",
      "created_at": 1234567890,
      "resolved": true
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Get one analytic

Returns an analytic.

[API reference](/api#tag/Analytics/paths/~1analytics~1analytic/get).

```javascript
const result = await sdk.analytics.getOneAnalytic({ collection, organization, type, date });
// sdk.analytics.getOneAnalytic({ collection: 'assets', organization: '0x123...', type: 'day', date: '2020-07-24' });

// result
{
  "response": {
     "type ": "day",
     "action": "create",
     "object": "assets",
     "organization": "0x123...",
     "value": 4,
     "date": "2020-07-24",
     "created_at": 1234567890,
     "resolved": true
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```
