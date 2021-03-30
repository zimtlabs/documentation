# Strategies

<p class="description">Strategies management.</p>

## Generate strategy

Returns signed strategy object.

Used for create strategy method.

```javascript
const result = sdk.strategies.generateStrategy(Strategy data);
// sdk.strategies.generateStrategy({
//     "type ": "EVM_BLOCKCHAIN",
//     "interval": 2000,
//     "config": {
//       "proxy_url": "https://kovan.infura.io/v3"
//     }
// });

// result
{
  "meta": {
    "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
    "timestamp": "2020-02-10T19:16:13Z",
    "data_hash": "0x6279..."
  },
  "data": {
    "name": "Strategy 1",
    "type ": "EVM_BLOCKCHAIN",
    "interval": 2000,
    "config": {
      "proxy_url": "https://kovan.infura.io/v3"
    },
    "info": {
      "name": "Kovan",
      "environment": "test",
    }
  },
  "signature": "0xe633051fc76ae..."
}
```

## Create strategy

Creates a strategy.

[API reference](/api#tag/Strategies/paths/~1strategies/post).

```javascript
const result = await sdk.strategies.create(Strategy object);
// sdk.strategies.create({
//   "meta": {
//     "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
//     "timestamp": "2020-02-10T19:16:13Z",
//     "data_hash": "0x6279..."
//   },
//   "data": {
//     "name": "Strategy 1",
//     "type ": "EVM_BLOCKCHAIN",
//     "interval": 2000,
//     "config": {
//       "proxy_url": "https://kovan.infura.io/v3"
//     },
//     "info": {
//       "name": "Kovan",
//       "environment": "test",
//     }
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
    "uploader_address": "0x911b3c5090B25b3a63120CF0218750886e37A969",
    "received_at": 1579278115,
    "organization": "0x123..."
  }
}
```

## Get strategies

Returns list of strategies.

[API reference](/api#tag/Strategies/paths/~1strategies/get).

```javascript
const result = await sdk.strategies.getMany(Pagination);
// sdk.strategies.getMany({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x867e088491c5e205b5c3e154e05e51a5d2d5766c8c7692deea62df9bf94df76f",
      "meta": {
        "created_by": "0x5F501a3aeBc7617B965F877A245F1E19Da043121",
        "timestamp": "2020-03-11T14:06:52.440Z",
        "data_hash": "0xb8229d6a4d7cc3273664a8a138ec42efa2402ad105e636ed7b0ccc5ccb74cfb3"
      },
      "signature": "0xd5210b57bac5e710e08ee0f7be90d83538855204a4696dc87996e5ed64247b5944cf0cc7851ebf8190991f7f63e1e04f0e3a183c0ee2544b0ad512ac808ec1961c",
      "data": {
        "name": "Strategy 1",
        "type ": "EVM_BLOCKCHAIN",
        "interval": 2000,
        "config": {
          "proxy_url": "https://kovan.infura.io/v3"
        },
        "info": {
          "name": "Kovan",
          "environment": "test",
        }
      },
      "receipt": {
        "received_at": 1583935613,
        "uploader_address": "0x01cd343654000255761Eca17e5178cc803749A13"
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

## Get strategy

Returns a strategy.

[API reference](/api#tag/Strategies/paths/~1strategies~1{id}/get).

```javascript
const result = await sdk.strategies.get(id);
// sdk.strategies.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": {
    "id": "0x867e088491c5e205b5c3e154e05e51a5d2d5766c8c7692deea62df9bf94df76f",
    "meta": {
      "created_by": "0x5F501a3aeBc7617B965F877A245F1E19Da043121",
      "timestamp": "2020-03-11T14:06:52.440Z",
      "data_hash": "0xb8229d6a4d7cc3273664a8a138ec42efa2402ad105e636ed7b0ccc5ccb74cfb3"
    },
    "signature": "0xd5210b57bac5e710e08ee0f7be90d83538855204a4696dc87996e5ed64247b5944cf0cc7851ebf8190991f7f63e1e04f0e3a183c0ee2544b0ad512ac808ec1961c",
    "data": {
      "name": "Strategy 1",
      "type ": "EVM_BLOCKCHAIN",
      "interval": 2000,
      "config": {
        "proxy_url": "https://kovan.infura.io/v3"
      },
      "info": {
        "name": "Kovan",
        "environment": "test",
      }
    },
    "receipt": {
      "received_at": 1583935613,
      "uploader_address": "0x01cd343654000255761Eca17e5178cc803749A13"
    }
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Activate strategy

Activates a strategy.

[API reference](/api#tag/Strategies/paths/~1strategies~1{id}~1activate/put).

```javascript
const result = await sdk.strategies.activate(id);
// sdk.strategies.activate('0x123...');

// result
{
  "response": "Ok",
  "meta": {
    "code": 200
  }
}
```

## Deactivate strategy

Deactivates a strategy.

[API reference](/api#tag/Strategies/paths/~1strategies~1{id}~1deactivate/put).

```javascript
const result = await sdk.strategies.deactivate(id);
// sdk.strategies.deactivate('0x123...');

// result
{
  "response": "Ok",
  "meta": {
    "code": 200
  }
}
```
