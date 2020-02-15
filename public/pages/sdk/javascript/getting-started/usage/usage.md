# Usage

<p class="description">How to import and use it.</p>

## Import

Import SDK in your file.

```javascript
import ZIMTHubSDK from '@zimt/sdk';
```

## Instance

Create an SDK instance.

You have to provide:
1. **Hub API URL** - Test or production.
2. **Private key** - Account's private key.

```javascript
const sdk = new ZIMTHubSDK({
    api: {
        core: "HUB_API_URL",
    },
    privateKey: "Account's private key"
});
```

## Usage

**Note**:
To use SDK methods that require authentication, you have to have an already registered account in the Hub API (in Hub API URL and with private key used in SDK instantiation).

```javascript
const assets = await sdk.assets.getMany();

// assets
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
