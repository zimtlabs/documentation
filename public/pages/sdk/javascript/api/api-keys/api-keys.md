# API keys

<p class="description">API keys management.</p>

## Create API key

Creates an API key.

[API reference](/api#tag/API-keys/paths/~1api-keys/post).

```javascript
const result = await sdk.apiKeys.create(API key object);
// sdk.apiKeys.create({
//   "object": {
//     "meta": {
//       "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
//     },
//     "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
//   },
//   "data": {
//     "name": "Developer key",
//     "description": "Developer API key",
//     "rules": {
//         "http_referrers": [
//             {
//                 "value": "website.com"
//             }
//         ]
//     }
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

## Get API keys

Returns list of API keys.

[API reference](/api#tag/API-keys/paths/~1api-keys/get).

```javascript
const result = await sdk.apiKeys.getMany(Pagination);
// sdk.apiKeys.getMany({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
      },
      "data": {
        "name": "Developer key",
        "description": "Developer API key",
        "rules": {
          "http_referrers": [
            {
              "value": "website.com"
            }
          ]
        },
        "keys": {
          "address": "0x4DC2f66Ea6f7Cd898342378e514cBDAD9dE5CC1B",
          "private_key": "0x14fbd74c7b5bed4109496f7df98a61ea11775edbac3bf203ac1f6cfc8daa999f"
        },
        "active": true
      },
      "receipt": {
        "received_at": 1579967810
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

## Get public API keys

Returns list of public API keys.

[API reference](/api#tag/API-keys/paths/~1api-keys~1public/get).

```javascript
const result = await sdk.apiKeys.getPublic(Pagination);
// sdk.apiKeys.getPublic({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
      },
      "data": {
        "name": "Developer key",
        "description": "Developer API key",
        "rules": {
          "http_referrers": [
            {
              "value": "website.com"
            }
          ]
        },
        "keys": {
          "address": "0x4DC2f66Ea6f7Cd898342378e514cBDAD9dE5CC1B",
          "private_key": "0x14fbd74c7b5bed4109496f7df98a61ea11775edbac3bf203ac1f6cfc8daa999f"
        },
        "active": true,
        "private": false
      },
      "receipt": {
        "received_at": 1579967810
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

## Search API keys

Returns list of API keys.

[API reference](/api#tag/API-keys/paths/~1api-keys~1search/post).

```javascript
const result = await sdk.apiKeys.search(Query);
// sdk.apiKeys.search(
//     {
//       query: {
//         apiKeys: [
//           {
//             field: 'data.name',
//             operator: 'starts-with',
//             value: 'Developer key',
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
      "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
      },
      "data": {
        "name": "Developer key",
        "description": "Developer API key",
        "rules": {
          "http_referrers": [
            {
              "value": "website.com"
            }
          ]
        },
        "keys": {
          "address": "0x4DC2f66Ea6f7Cd898342378e514cBDAD9dE5CC1B",
          "private_key": "0x14fbd74c7b5bed4109496f7df98a61ea11775edbac3bf203ac1f6cfc8daa999f"
        },
        "active": true
      },
      "receipt": {
        "received_at": 1579967810
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

## Get API key

Returns an API key.

[API reference](/api#tag/API-keys/paths/~1api-keys~1{id}/get).

```javascript
const result = await sdk.apiKeys.get(id);
// sdk.apiKeys.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
    },
    "data": {
        "name": "Developer key",
        "description": "Developer API key",
        "rules": {
            "http_referrers": [
            {
                "value": "website.com"
            }
            ]
        },
        "keys": {
            "address": "0x4DC2f66Ea6f7Cd898342378e514cBDAD9dE5CC1B",
            "private_key": "0x14fbd74c7b5bed4109496f7df98a61ea11775edbac3bf203ac1f6cfc8daa999f"
        },
        "active": true
    },
    "receipt": {
      "received_at": 1579967810
    }
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Update API key

Updates an API key.

[API reference](/api#tag/API-keys/paths/~1api-keys~1{id}/put).

```javascript
const result = await sdk.apiKeys.update(apiKey_id: string, API key data);
// sdk.apiKeys.update(
//     '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951',
//     {
//         data: {
//             active: false
//         }
//     }
// );

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
    },
    "data": {
      "name": "Developer key",
      "description": "Developer API key",
      "rules": {
        "http_referrers": [
          {
            "value": "website.com"
          }
        ]
      },
      "keys": {
        "address": "0x4DC2f66Ea6f7Cd898342378e514cBDAD9dE5CC1B",
        "private_key": "0x14fbd74c7b5bed4109496f7df98a61ea11775edbac3bf203ac1f6cfc8daa999f"
      },
      "active": false
    },
    "receipt": {
      "received_at": 1579967810
    }
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Delete API key

Deletes an API key.

[API reference](/api#tag/API-keys/paths/~1api-keys~1{id}/delete).

```javascript
const result = await sdk.apiKeys.delete(id);
//sdk.apiKeys.delete('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": "Removed",
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```
