# Assets

<p class="description">Assets management.</p>

## Generate asset

Returns signed asset object.

Used for create asset method.

```javascript
const result = sdk.assets.generateAsset(body: { object, data, namespace, ownership });
// sdk.assets.generateAsset({
//     object: {
//         // Meta is not required
//         meta: {
//             // Valid ISO data, max 24h in the future
//             // Default is now
//             timestamp: '2020-02-10T19:16:13+02:00',
//         }
//     },
//     data: {
//         name: 'Asset name'
//     },
//     namespace: { app: true }
// });

// result
{
    "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13+02:00"
        },
        "signature": "0xe633051fc76ae...",
    },
    "data": {
        "name": "Asset name"
    },
    "namespace": {
        app: true
    }
}
```

## Create asset

Creates an asset.

[API reference](/api#tag/Assets/paths/~1assets/post).

```javascript
const result = await sdk.assets.create(Asset object);
sdk.assets.create(sdk.assets.generateAsset());

or

// sdk.assets.create({
//   "object": {
//       "meta": {
//         "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
//         "timestamp": "2020-02-10T19:16:13Z"
//     },
//     "signature": "0xe633051fc76ae..."
//   },
//   "data": {
//       "name": "Asset name"
//   }
// });

// result
{
  "proof": "0x0192cbd1c59b40ea97f7bc102a16c325a3066bb6b68c9c16bae447d8bb38565a66da29...",
  "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
  "receipt": {
    "object_hash": "0xc0d7efb7eaa769f83a8ce2d41466d603af6ad308b5a8053676c4034d0369aec5",
    "received_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E",
    "received_at": 1579278115,
    "organization": "0x123..."
  }
}
```

## Update asset

Updates an asset.

[API reference](/api#tag/Assets/paths/~1assets~1{asset_id}/put).

```javascript
const result = await sdk.assets.update(Asset ID, Asset data);
sdk.assets.update('0x123...', { data: { name: 'New name' } });

or

// sdk.assets.update('0x123...', {
//   "data": {
//       "name": "New name"
//   }
// });

// result
{
  "response": {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "signature": "0xe633051fc76ae...",
      "receipt": {
        "received_at": 1579278110
      },
      "data": {
          "name": "New name"
      }
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Get assets

Returns list of assets.

[API reference](/api#tag/Assets/paths/~1assets/get).

```javascript
const result = await sdk.assets.getMany(Pagination, Asset options);
// sdk.assets.getMany({ limit: 5, skip: 30 }, { info: true, parse: true ));

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "signature": "0xe633051fc76ae...",
      "receipt": {
        "received_at": 1579278110
      },
      "data": {
          "name": "Asset name"
      }
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  },
  "pagination": {
    "limit": 30,
    "skip": 30,
    "total": 120
  }
}
```

## Get empty assets

Returns list of assets with no events (empty assets).

[API reference](/api#tag/Assets/paths/~1assets~1empty/get).

```javascript
const result = await sdk.assets.getManyEmpty(Pagination);
// sdk.assets.getMany({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "signature": "0xe633051fc76ae...",
      "receipt": {
        "received_at": 1579278110
      }
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  },
  "pagination": {
    "limit": 30,
    "skip": 30,
    "total": 120
  }
}
```

## Search assets

Returns list of assets.

[API reference](/api#tag/Assets/paths/~1assets~1search/post).

```javascript
const result = await sdk.assets.search(Query, Asset options);
// sdk.assets.search(
//     {
//       query: {
//         assets: [
//           {
//             field: 'data.name',
//             operator: 'starts-with',
//             value: 'Asset',
//           },
//         ],
//       },
//       limit: 5
//     },
// );

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "data": {
          "name": "Asset name"
      },
      "signature": "0xe633051fc76ae...",
      "receipt": {
        "received_at": 1579278110
      }
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  },
  "pagination": {
    "limit": 30,
    "skip": 30,
    "total": 120
  }
}
```

## Search assets based on asset's events

Returns list of assets.

[API reference](/api#tag/Assets/paths/~1assets~1search~1events/post).

```javascript
const result = await sdk.assets.searchEvents(Query, Asset options);
// sdk.assets.searchEvents(
//     {
//       query: {
//         events: [
//           {
//             field: 'object.data.name',
//             operator: 'starts-with',
//             value: 'Event',
//           },
//         ],
//       },
//       limit: 5
//     },
// );

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "data": {
          "name": "Asset name"
      },
      "signature": "0xe633051fc76ae...",
      "receipt": {
        "received_at": 1579278110
      }
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  },
  "pagination": {
    "limit": 30,
    "skip": 30,
    "total": 120
  }
}
```

## Get asset

Returns an asset.

[API reference](/api#tag/Assets/paths/~1assets~1{asset_id}/get).

```javascript
const result = await sdk.assets.get(id, Asset options);
// sdk.assets.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951', { info: true });

// result
{
  "response": {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "signature": "0xe633051fc76ae...",
      "receipt": {
        "received_at": 1579278110
      },
      "data": {
          "name": "Asset name"
      }
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```
