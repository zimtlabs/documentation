# Plans

<p class="description">Plans management.</p>

## Create plan

Creates a plan.

[API reference](/api#tag/Plans/paths/~1plans/post).

```javascript
const result = await sdk.plans.create(Plan object);
// sdk.plans.create({
//   "response": {
//     "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
//     "meta": {
//       "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
//     },
//     "data": {
//       "name": "Custom plan",
//       "active": true,
//       "price": [
//         {
//           "value": "free",
//           "frequency": "month"
//         }
//       ],
//       "alerts": {
//         "assets": {
//           "month": true,
//           "total": true
//         },
//         "events": {
//           "month": true,
//           "total": true
//         },
//         "documents": {
//           "month": true,
//           "total": true
//         }
//       }
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

## Get plans

Returns list of plans.

[API reference](/api#tag/Plans/paths/~1plans/get).

```javascript
const result = await sdk.plans.getMany(Pagination);
//sdk.plans.getMany({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Custom plan",
        "active": true,
        "price": [
          {
            "value": "free",
            "frequency": "month"
          }
        ],
        "alerts": {
          "assets": {
            "month": true,
            "total": true
          },
          "events": {
            "month": true,
            "total": true
          },
          "documents": {
            "month": true,
            "total": true
          }
        }
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

## Search plans

Returns list of plans.

[API reference](/api#tag/Plans/paths/~1plans~1search/post).

```javascript
const result = await sdk.plans.search(Query);
//sdk.plans.search(
//     {
//       query: {
//         plans: [
//           {
//             field: 'data.name',
//             operator: 'starts-with',
//             value: 'Free',
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
        "name": "Custom plan",
        "active": true,
        "price": [
          {
            "value": "free",
            "frequency": "month"
          }
        ],
        "alerts": {
          "assets": {
            "month": true,
            "total": true
          },
          "events": {
            "month": true,
            "total": true
          },
          "documents": {
            "month": true,
            "total": true
          }
        }
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

## Get public plans

Returns list of public plans.

[API reference](/api#tag/Plans/paths/~1plans~1public/get).

```javascript
const result = await sdk.plans.getPublic(Pagination);
// sdk.plans.getPublic({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Custom plan",
        "active": true,
        "price": [
          {
            "value": "free",
            "frequency": "month"
          }
        ],
        "alerts": {
          "assets": {
            "month": true,
            "total": true
          },
          "events": {
            "month": true,
            "total": true
          },
          "documents": {
            "month": true,
            "total": true
          }
        }
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

## Get plan

Returns a plan.

[API reference](/api#tag/Plans/paths/~1plans~1{id}/get).

```javascript
const result = await sdk.plans.get(id);
//sdk.plans.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "Custom plan",
      "active": true,
      "price": [
        {
          "value": "free",
          "frequency": "month"
        }
      ],
      "alerts": {
        "assets": {
          "month": true,
          "total": true
        },
        "events": {
          "month": true,
          "total": true
        },
        "documents": {
          "month": true,
          "total": true
        }
      }
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

## Update plan

Updates a plan.

[API reference](/api#tag/Plans/paths/~1plans~1{id}/put).

```javascript
const result = await sdk.plans.update(plan_id: string, plan data);
//sdk.plans.update(
//     '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951',
//     {
//         data: {
//             name: 'Plan (edited)'
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
      "name": "Custom plan",
      "active": true,
      "price": [
        {
          "value": "free",
          "frequency": "month"
        }
      ],
      "alerts": {
        "assets": {
          "month": true,
          "total": true
        },
        "events": {
          "month": true,
          "total": true
        },
        "documents": {
          "month": true,
          "total": true
        }
      }
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

## Delete plan

Deletes a plan.

[API reference](/api#tag/Plans/paths/~1plans~1{id}/delete).

```javascript
const result = await sdk.plans.delete(id);
//sdk.plans.delete('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": "Removed",
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```
