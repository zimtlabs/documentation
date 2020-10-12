# Defaults

<p class="description">Defaults management.</p>

## Create default

Creates a default.

[API reference](/api#tag/Defaults/paths/~1defaults/post).

```javascript
const result = await sdk.defaults.create(Default object);
// sdk.defaults.create({
//   "response": {
//     "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
//     "meta": {
//       "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
//     },
//     "data": {
//       "name": "Default strategy",
//       "type ": "notification",
//       "subtype": "strategy",
//       "active": true
//     },
//     "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e...",
//     "receipt": {
//       "received_at": 1579967810000
//     }
//   },
//   "meta": {
//     "code": 200,
//     "message": "Ok"
//   }
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

## Get defaults

Returns list of defaults.

[API reference](/api#tag/Defaults/paths/~1defaults/get).

```javascript
const result = await sdk.defaults.getMany(Pagination);
//sdk.defaults.getMany({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Default strategy",
        "type ": "notification",
        "subtype": "strategy",
        "active": true
      },
      "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e...",
      "receipt": {
        "received_at": 1579967810000
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

## Search defaults

Returns list of defaults.

[API reference](/api#tag/Defaults/paths/~1defaults~1search/post).

```javascript
const result = await sdk.defaults.search(Query);
//sdk.defaults.search(
//     {
//       query: {
//         defaults: [
//           {
//             field: 'data.name',
//             operator: 'starts-with',
//             value: 'Default',
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
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Default strategy",
        "type ": "notification",
        "subtype": "strategy",
        "active": true
      },
      "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e...",
      "receipt": {
        "received_at": 1579967810000
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

## Get default

Returns a default.

[API reference](/api#tag/Defaults/paths/~1defaults~1{id}/get).

```javascript
const result = await sdk.defaults.get(id);
//sdk.defaults.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "Default strategy",
      "type ": "notification",
      "subtype": "strategy",
      "active": true
    },
    "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e...",
    "receipt": {
      "received_at": 1579967810000
    }
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Update default

Updates a default.

[API reference](/api#tag/Defaults/paths/~1defaults~1{id}/put).

```javascript
const result = await sdk.defaults.update(default_id: string, default data);
//sdk.defaults.update(
//     '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951',
//     {
//         data: {
//             name: 'Default (edited)'
//         }
//     }
// );

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "Default strategy",
      "type ": "notification",
      "subtype": "strategy",
      "active": true
    },
    "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e...",
    "receipt": {
      "received_at": 1579967810000
    }
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Delete default

Deletes a default.

[API reference](/api#tag/Defaults/paths/~1defaults~1{id}/delete).

```javascript
const result = await sdk.defaults.delete(id);
//sdk.defaults.delete('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": "Removed",
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```
