# Strategies

<p class="description">Strategies management.</p>

## Generate strategy

Returns signed strategy object.

Used for create strategy method.

```javascript
const result = sdk.strategies.generateStrategy(body: { body, data });
// sdk.strategies.generateStrategy({
//     object: {
//         // Meta is not required
//         meta: {
//             // Valid ISO data, max 24h in the future
//             // Default is now
//             timestamp: '2020-02-10T19:16:13+02:00',
//         },
//         data: {
//             name: 'Strategy request',
//             description: 'Asd',
//             version: '1.4.1',
//             interval: 1000,
//             bundle: {
//                 objects: [
//                     'assets',
//                     'events',
//                     'documents',
//                     'strategies',
//                     'logs'
//                 ],
//                 all: false,
//                 filters: {
//                     assets: [
//                         {
//                             field: 'data.type',
//                             operator: 'starts-with',
//                             value: 'zimt.'
//                         }
//                     ]
//                 }
//             },
//             proof: {
//                 storage: [
//                     {
//                         id: '0x123',
//                         type: 'cloud',
//                         provider: 'aws',
//                         name: 'S3 proof storage',
//                         environment: 'test',
//                         location: {
//                             url: 'https://google.com'
//                         },
//                         access: {
//                             access_key: '123',
//                             secret_key: '123'
//                         },
//                         properties: {
//                             asd: '123'
//                         }
//                     }
//                 ]
//             },
//             properties: {
//                 asd: '123'
//             }
//         },
//     },
//     data: {
//         active: true
//     }
// });

// result
{
  "object": {
    "meta": {
      "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
      "timestamp": "2020-02-10T19:16:13Z",
      "data_hash": "0x123..."
    },
    "signature": "0xe633051fc76ae...",
    "data": {
      "name": "Strategy request",
      "description": "Asd",
      "version": "1.4.1",
      "interval": 1000,
      "bundle": {
        "objects": [
          "assets",
          "events",
          "documents",
          "strategies",
          "logs"
        ],
        "all": false,
        "filters": {
          "assets": [
            {
              "field": "data.type",
              "operator": "starts-with",
              "value": "zimt."
            }
          ]
       }
    },
    "proof": {
        "storage": [
          {
            "id": "0x123",
            "type ": "cloud",
            "provider": "aws",
            "name": "S3 proof storage",
            "environment": "test",
            "location": {
              "url": "https://google.com"
            },
            "access": {
              "access_key": "123",
              "secret_key": "123"
            },
            "properties": {
              "asd": 123
            }
          }
       ]
    },
    "properties": {
        "asd": 123
      }
    }
  },
  "data": {
    "active": true,
    "private": false,
    "default": true,
    "all": false,
    "plans": [
      {
        "id": "0x123...",
        "name": "premium"
      }
    ],
    "dedicated": false
  }
}
```

## Create strategy

Creates a strategy.

[API reference](/api#tag/Strategies/paths/~1strategies/post).

```javascript
const result = await sdk.strategies.create(Strategy object);
sdk.strategies.create(sdk.strategies.generateStrategy());

or

// sdk.strategies.create({
//     "object": {
//         "meta": {
//         "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
//         "timestamp": "2020-02-10T19:16:13Z",
//         "data_hash": "0x123..."
//         },
//         "signature": "0xe633051fc76ae...",
//         "data": {
//         "name": "Strategy request",
//         "description": "Asd",
//         "version": "1.4.1",
//         "interval": 1000,
//         "bundle": {
//             "objects": [
//             "assets",
//             "events",
//             "documents",
//             "strategies",
//             "logs"
//             ],
//             "all": false,
//             "filters": {
//             "assets": [
//                 {
//                 "field": "data.type",
//                 "operator": "starts-with",
//                 "value": "zimt."
//                 }
//             ]
//             }
//         },
//         "proof": {
//             "storage": [
//             {
//                 "id": "0x123",
//                 "type ": "cloud",
//                 "provider": "aws",
//                 "name": "S3 proof storage",
//                 "environment": "test",
//                 "location": {
//                 "url": "https://google.com"
//                 },
//                 "access": {
//                 "access_key": "123",
//                 "secret_key": "123"
//                 },
//                 "properties": {
//                 "asd": 123
//                 }
//             }
//             ]
//         },
//         "properties": {
//             "asd": 123
//         }
//         }
//     },
//     "data": {
//         "active": true,
//         "private": false,
//         "default": true,
//         "all": false,
//         "plans": [
//         {
//             "id": "0x123...",
//             "name": "premium"
//         }
//         ],
//         "dedicated": false
//     }
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

## Update strategy

Updates an strategy.

[API reference](/api#tag/Strategies/paths/~1strategies~1{id}/put).

```javascript
const result = await sdk.strategies.update(Strategy data);
sdk.strategies.update({ data: { active: true } });

or

// sdk.strategies.update({
//   "data": {
//       "active": true
//   }
// });

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
    "object": {
        "meta": {
            "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "timestamp": "2020-02-10T19:16:13Z",
            "data_hash": "0x123..."
        },
        "signature": "0xe633051fc76ae...",
        "data": {
            "name": "Strategy request",
            "description": "Asd",
            "version": "1.4.1",
            "interval": 1000,
            "bundle": {
                "objects": [
                    "assets",
                    "events",
                    "documents",
                    "strategies",
                    "logs"
                ],
                "all": false,
                "filters": {
                    "assets": [
                        {
                            "field": "data.type",
                            "operator": "starts-with",
                            "value": "zimt."
                        }
                    ]
                }
            },
            "proof": {
                "storage": [
                    {
                        "id": "0x123",
                        "type ": "cloud",
                        "provider": "aws",
                        "name": "S3 proof storage",
                        "environment": "test",
                        "location": {
                            "url": "https://google.com"
                        },
                        "properties": {
                            "asd": 123
                        }
                    }
                ]
            },
            "properties": {
                "asd": 123
            }
        }
    },
    "data": {
        "active": true,
        "private": false,
        "default": true,
        "all": false,
        "plans": [
            {
                "id": "0x123...",
                "name": "premium"
            }
        ],
        "dedicated": false
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

## Get strategies

Returns list of strategies.

[API reference](/api#tag/Strategies/paths/~1strategies/get).

```javascript
const result = await sdk.strategies.getMany(Pagination, Strategy options);
// sdk.strategies.getMany({ limit: 5, skip: 30 }, { info: true, parse: true ));

// result
{
  "response": [
    {
        "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
        "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
        "object": {
            "meta": {
                "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
                "timestamp": "2020-02-10T19:16:13Z",
                "data_hash": "0x123..."
            },
            "signature": "0xe633051fc76ae...",
            "data": {
                "name": "Strategy request",
                "description": "Asd",
                "version": "1.4.1",
                "interval": 1000,
                "bundle": {
                    "objects": [
                        "assets",
                        "events",
                        "documents",
                        "strategies",
                        "logs"
                    ],
                    "all": false,
                    "filters": {
                        "assets": [
                            {
                                "field": "data.type",
                                "operator": "starts-with",
                                "value": "zimt."
                            }
                        ]
                    }
                },
                "proof": {
                    "storage": [
                        {
                            "id": "0x123",
                            "type ": "cloud",
                            "provider": "aws",
                            "name": "S3 proof storage",
                            "environment": "test",
                            "location": {
                                "url": "https://google.com"
                            },
                            "properties": {
                                "asd": 123
                            }
                        }
                    ]
                },
                "properties": {
                    "asd": 123
                }
            }
        },
        "data": {
            "active": true,
            "private": false,
            "default": true,
            "all": false,
            "plans": [
                {
                    "id": "0x123...",
                    "name": "premium"
                }
            ],
            "dedicated": false
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
    "total": 120,
    "next": "eyJyZWNlaXB0LnJlY2VpdmVkX2F0IjoxNjE1MjQ4ODEyfQ==",
    "previous": "eyJyZWNlaXB0LnJlY2VpdmVkX2F0IjoxNjE1MjQ4ODEyfQ==",
    "hasNext": true,
    "hasPrevious": false
  }
}
```

## Search strategies

Returns list of strategies.

[API reference](/api#tag/Strategies/paths/~1strategies~1search/post).

```javascript
const result = await sdk.strategies.search(Query, Strategy options);
// sdk.strategies.search(
//     {
//       query: {
//         strategies: [
//           {
//             field: 'object.data.name',
//             operator: 'starts-with',
//             value: 'Strategy',
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
                "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
                "timestamp": "2020-02-10T19:16:13Z",
                "data_hash": "0x123..."
            },
            "signature": "0xe633051fc76ae...",
        "data": {
            "name": "Strategy request",
            "description": "Asd",
            "version": "1.4.1",
            "interval": 1000,
            "bundle": {
                "objects": [
                    "assets",
                    "events",
                    "documents",
                    "strategies",
                    "logs"
                ],
                "all": false,
                "filters": {
                    "assets": [
                        {
                            "field": "data.type",
                            "operator": "starts-with",
                            "value": "zimt."
                        }
                    ]
                }
            },
            "proof": {
                "storage": [
                    {
                        "id": "0x123",
                        "type ": "cloud",
                        "provider": "aws",
                        "name": "S3 proof storage",
                        "environment": "test",
                        "location": {
                            "url": "https://google.com"
                        },
                        "properties": {
                            "asd": 123
                        }
                    }
                ]
            },
            "properties": {
                "asd": 123
            }
        }
        },
        "data": {
            "active": true,
            "private": false,
            "default": true,
            "all": false,
            "plans": [
                {
                    "id": "0x123...",
                    "name": "premium"
                }
            ],
            "dedicated": false
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
    "total": 120,
    "next": "eyJyZWNlaXB0LnJlY2VpdmVkX2F0IjoxNjE1MjQ4ODEyfQ==",
    "previous": "eyJyZWNlaXB0LnJlY2VpdmVkX2F0IjoxNjE1MjQ4ODEyfQ==",
    "hasNext": true,
    "hasPrevious": false
  }
}
```

## Get strategy

Returns a strategy.

[API reference](/api#tag/Strategies/paths/~1strategies~1{id}/get).

```javascript
const result = await sdk.strategies.get(id, Strategy options);
// sdk.strategies.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951', { info: true });

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
    "object": {
        "meta": {
            "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "timestamp": "2020-02-10T19:16:13Z",
            "data_hash": "0x123..."
        },
        "signature": "0xe633051fc76ae...",
        "data": {
            "name": "Strategy request",
            "description": "Asd",
            "version": "1.4.1",
            "interval": 1000,
            "bundle": {
                "objects": [
                    "assets",
                    "events",
                    "documents",
                    "strategies",
                    "logs"
                ],
                "all": false,
                "filters": {
                    "assets": [
                        {
                            "field": "data.type",
                            "operator": "starts-with",
                            "value": "zimt."
                        }
                    ]
                }
            },
            "proof": {
                "storage": [
                    {
                        "id": "0x123",
                        "type ": "cloud",
                        "provider": "aws",
                        "name": "S3 proof storage",
                        "environment": "test",
                        "location": {
                            "url": "https://google.com"
                        },
                        "access": {
                            "access_key": "123",
                            "secret_key": "123"
                        },
                        "properties": {
                            "asd": 123
                        }
                    }
                ]
            },
            "properties": {
                "asd": 123
            }
        }
    },
    "data": {
        "active": true,
        "private": false,
        "default": true,
        "all": false,
        "plans": [
            {
                "id": "0x123...",
                "name": "premium"
            }
        ],
        "dedicated": false
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
