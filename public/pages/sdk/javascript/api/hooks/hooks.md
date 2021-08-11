# Hooks

<p class="description">Hooks management.</p>

## Create hook

Creates a hook.

[API reference](/api#tag/Hooks/paths/~1hooks/post).

```javascript
const result = await sdk.hooks.create(Hook object);
// sdk.hooks.create({
//   "object": {
//     "meta": {
//       "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
//     },
//     "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
//   },
//   "data": {
//     "name": "Hook 1",
//     "hooks": [
//       {
//         "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
//         "name": "Hook 1"
//       }
//     ],
//     "settings": {
//       "object": "event",
//       "action": "create",
//       "send": "id",
//       "rules": {
//         "events": [
//           {
//             "field": "object.data.tag",
//             "operator": "equal",
//             "value": "tag1"
//           }
//         ]
//       }
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

## Get hooks

Returns list of hooks.

[API reference](/api#tag/Hooks/paths/~1hooks/get).

```javascript
const result = await sdk.hooks.getMany(Pagination);
//sdk.hooks.getMany({ limit: 5, skip: 30 });

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
            "name": "Hook 1",
            "services": [
                {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                    "name": "Service 1"
                }
            ],
            "settings": {
                "object": "event",
                "action": "create",
                "send": "id",
                "rules": {
                    "events": [
                        {
                            "field": "object.data.tag",
                            "operator": "equal",
                            "value": "tag1"
                        }
                    ]
                }
            }
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

## Search hooks

Returns list of hooks.

[API reference](/api#tag/Hooks/paths/~1hooks~1search/post).

```javascript
const result = await sdk.hooks.search(Query);
//sdk.hooks.search(
//     {
//       query: {
//         hooks: [
//           {
//             field: 'data.name',
//             operator: 'starts-with',
//             value: 'Hook 1',
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
            "name": "Hook 1",
            "services": [
                {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                    "name": "Service 1"
                }
            ],
            "settings": {
                "object": "event",
                "action": "create",
                "send": "id",
                "rules": {
                    "events": [
                        {
                            "field": "object.data.tag",
                            "operator": "equal",
                            "value": "tag1"
                        }
                    ]
                }
            }
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

## Get hook

Returns a hook.

[API reference](/api#tag/Hooks/paths/~1hooks~1{id}/get).

```javascript
const result = await sdk.hooks.get(id);
//sdk.hooks.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

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
            "name": "Hook 1",
            "services": [
                {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                    "name": "Service 1"
                }
            ],
            "settings": {
                "object": "event",
                "action": "create",
                "send": "id",
                "rules": {
                    "events": [
                        {
                            "field": "object.data.tag",
                            "operator": "equal",
                            "value": "tag1"
                        }
                    ]
                }
            }
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
    },
}
```

## Update hook

Updates a hook.

[API reference](/api#tag/Hooks/paths/~1hooks~1{id}/put).

```javascript
const result = await sdk.hooks.update(hook_id: string, Hook data);
//sdk.hooks.update(
//     '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951',
//     {
//         data: {
//             name: 'Hook (edited)'
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
            "name": "Hook 1",
            "services": [
                {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                    "name": "Service 1"
                }
            ],
            "settings": {
                "object": "event",
                "action": "create",
                "send": "id",
                "rules": {
                    "events": [
                        {
                            "field": "object.data.tag",
                            "operator": "equal",
                            "value": "tag1"
                        }
                    ]
                }
            }
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
    },
}
```

## Delete hook

Deletes a hook.

[API reference](/api#tag/Hooks/paths/~1hooks~1{id}/delete).

```javascript
const result = await sdk.hooks.delete(id);
//sdk.hooks.delete('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": "Removed",
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```
