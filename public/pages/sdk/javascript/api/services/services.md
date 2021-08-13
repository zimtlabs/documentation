# Services

<p class="description">Services management.</p>

## Create service

Creates a service.

[API reference](/api#tag/Services/paths/~1services/post).

```javascript
const result = await sdk.services.create(Service object);
// sdk.services.create({
//   "object": {
//     "meta": {
//       "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
//     },
//     "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
//   },
//   "data": {
//     "name": "Service 1",
//     "url": {
//       "rest": "http://server.com"
//     },
//     "active": true,
//     "private": false
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

## Get services

Returns list of services.

[API reference](/api#tag/Services/paths/~1services/get).

```javascript
const result = await sdk.services.getMany(Pagination);
//sdk.services.getMany({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
        "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
        "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
        "object": {
            "meta": {
                "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
                "timestamp": "2020-02-10T19:16:13Z"
            },
            "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
        },
        "data": {
            "name": "Service 1",
            "url": {
                "rest": "http://server.com"
            },
            "active": true,
            "private": false
        },
        "receipt": {
            "received_at": 1579967810
        },
        "proof_locations": [
            {
                "type": "bundle",
                "bundle": {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
                },
                "strategy": {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                    "name": "Default all global"
                }
            }
        ]
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

## Get public services

Returns list of public services.

[API reference](/api#tag/Services/paths/~1services~1public/get).

```javascript
const result = await sdk.services.getPublic(Pagination);
//sdk.services.getPublic({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
        "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
        "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
        "object": {
            "meta": {
                "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
                "timestamp": "2020-02-10T19:16:13Z"
            },
            "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
        },
        "data": {
            "name": "Service 1",
            "url": {
                "rest": "http://server.com"
            },
            "active": true,
            "private": false
        },
        "receipt": {
            "received_at": 1579967810
        },
        "proof_locations": [
            {
                "type": "bundle",
                "bundle": {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
                },
                "strategy": {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                    "name": "Default all global"
                }
            }
        ]
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

## Search services

Returns list of services.

[API reference](/api#tag/Services/paths/~1services~1search/post).

```javascript
const result = await sdk.services.search(Query);
//sdk.services.search(
//     {
//       query: {
//         services: [
//           {
//             field: 'data.name',
//             operator: 'starts-with',
//             value: 'Service 1',
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
        "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
        "object": {
            "meta": {
                "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
                "timestamp": "2020-02-10T19:16:13Z"
            },
            "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
        },
        "data": {
            "name": "Service 1",
            "url": {
                "rest": "http://server.com"
            },
            "active": true,
            "private": false
        },
        "receipt": {
            "received_at": 1579967810
        },
        "proof_locations": [
            {
                "type": "bundle",
                "bundle": {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
                },
                "strategy": {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                    "name": "Default all global"
                }
            }
        ]
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

## Get service

Returns a service.

[API reference](/api#tag/Services/paths/~1services~1{id}/get).

```javascript
const result = await sdk.services.get(id);
//sdk.services.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
    "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
    },
    "data": {
        "name": "Service 1",
        "url": {
            "rest": "http://server.com"
        },
        "active": true,
        "private": false
    },
    "receipt": {
        "received_at": 1579967810
    },
    "proof_locations": [
        {
            "type": "bundle",
            "bundle": {
                "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
            },
            "strategy": {
                "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                "name": "Default all global"
            }
        }
    ]
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Update service

Updates a service.

[API reference](/api#tag/Services/paths/~1services~1{id}/put).

```javascript
const result = await sdk.services.update(service_id: string, Service data);
//sdk.services.update(
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
    "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
    "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
    },
    "data": {
        "name": "Service 1",
        "url": {
            "rest": "http://server.com"
        },
        "active": false,
        "private": false
    },
    "receipt": {
        "received_at": 1579967810
    },
    "proof_locations": [
        {
            "type": "bundle",
            "bundle": {
                "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
            },
            "strategy": {
                "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                "name": "Default all global"
            }
        }
    ]
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Delete service

Deletes a service.

[API reference](/api#tag/Services/paths/~1services~1{id}/delete).

```javascript
const result = await sdk.services.delete(id);
//sdk.services.delete('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": "Removed",
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```
