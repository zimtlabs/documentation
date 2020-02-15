# Assets

<p class="description">Assets management.</p>

## Get assets

Returns list of assets.

[API reference](/api#tag/Assets/paths/~1assets/get).

```javascript
const result = await sdk.assets.getMany(Pagination, Asset options);
// sdk.assets.getMany({ limit: 5, next: 'ea34...' }, { info: true, parse: true ));

// result
{
  "data": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "signature": "0xe633051fc76ae...",
      "receipt": {
        "received_at": 1579278115000
      },
      "info: { ... },
      "events": [
          { ... }
      ]
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  },
  "pagination": {
    "hasNext": true,
    "next": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0",
    "hasPrevious": true,
    "previous": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGI5In0"
  }
}
```

## Search assets

Returns list of assets.

[API reference](/api#tag/Assets/paths/~1assets~1search/post).

```javascript
const result = await sdk.assets.search(Query, Asset options);
// sdk.assets.getMany(
//     {
//       query: {
//         assets: [
//           {
//             field: 'object.meta.created_by',
//             operator: 'equal',
//             value: '0x8752F61635543a870826D9F4CA20a9D1F3934079',
//           },
//         ],
//       },
//       limit: 5
//     },
// );

// result
{
  "data": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "signature": "0xe633051fc76ae...",
      "receipt": {
        "received_at": 1579278115000
      }
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  },
  "pagination": {
    "hasNext": true,
    "next": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0",
    "hasPrevious": true,
    "previous": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGI5In0"
  }
}
```

## Get asset

Returns an asset.

[API reference](/api#tag/Assets/paths/~1assets~1{asset_id}/get).

```javascript
const result = await sdk.assets.get(id);
// sdk.assets.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "data": {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "signature": "0xe633051fc76ae...",
      "receipt": {
        "received_at": 1579278115000
      }
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Create asset

Creates an asset.

[API reference](/api#tag/Assets/paths/~1assets/post).

```javascript
const result = await sdk.assets.create(Asset object);
// sdk.assets.create({
//   "meta": {
//     "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
//     "timestamp": "2020-02-10T19:16:13Z"
//   },
//   "signature": "0xe633051fc76ae..."
// });

// result
{
  "proof": "0x0192cbd1c59b40ea97f7bc102a16c325a3066bb6b68c9c16bae447d8bb38565a66da29...",
  "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
  "receipt": {
    "object_hash": "0xc0d7efb7eaa769f83a8ce2d41466d603af6ad308b5a8053676c4034d0369aec5",
    "received_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E",
    "received_at": 1579278115000,
    "organization": "0x123..."
  }
}
```
