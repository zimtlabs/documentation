# Bundles

<p class="description">Bundles management.</p>

## Get bundle

Returns a bundle.

[API reference](/api#tag/Bundles/paths/~1bundles~1{id}/get).

```javascript
const result = await sdk.bundles.get(id, Bundle options);
// sdk.bundles.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "object": {
      "meta": {
        "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "timestamp": "2020-02-10T19:16:13Z",
        "data_hash": "0x123..."
      },
      "signature": "0xe633051fc76ae...",
      "data": {
        "strategy": {
          "id": "0x123...",
          "name": "Default all strategy",
          "hub": true,
          "active": true,
          "all": false,
          "default": false,
          "private": true
        },
        "objects": {
          "assets": {
            "proofs": [
              "0x123...",
              "0x123..."
            ]
          }
        },
        "version": "1.0.0",
        "properties": {
          "asd": 123
        }
      }
    },
    "data": {
      "proof": {
        "storage": [
          {
            "id": "0x123",
            "type ": "cloud",
            "provider": "aws",
            "service": "s3",
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
      }
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

## Get bundle proof storage proof

Returns bundle's proof storage proof.

[API reference](/api#tag/Bundles/paths/~1bundles~1{id}~1proof~1storage~1{storage_id}~1proof/get).

```javascript
const result = await sdk.bundles.getProofStorageProof(id, storage id);
// sdk.bundles.getProofStorageProof('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951', '0x123...');

// result
{
  "response": {
    "proof": "0x123..."
  },
  "meta": {
    "message": "Ok",
    "code": 200
  }
}
```
