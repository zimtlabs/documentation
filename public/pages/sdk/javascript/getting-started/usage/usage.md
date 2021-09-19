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
3. **API key** - ZIMT Hub provided API key.

```javascript
const sdk = new ZIMTHubSDK({
    api: {
        core: "Hub API URL",
    },
    private_key: "Account's private key",
    api_key: "ZIMT Hub provided API key"
});
```

## Usage

### SDK getting started

This method will fetch ZIMT Hub token that will be included with all Hub requests SDK makes, or return true if token is already fetched. \
So one time, on app start where you initiate your SDK you can await for SDK to fetch the token and be ready, so you are able to make requests right after SDK init.

```javascript
const isReady = await sdk.ready();

console.log(isReady) // true or false
```

### Requests

**Note**:<br />
Your provided API key has to exist and be active to authenticate.<br />
To use SDK methods that require authentication, you have to have an already registered account in the Hub API (in Hub API URL and with private key used in SDK instantiation).

```javascript
const assets = await sdk.assets.getMany();

// assets
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
        "timestamp": "2020-02-10T19:16:13Z"
    },
    "signature": "0xe633051fc76ae...",
      "receipt": {
        "received_at": 1579278115
      }
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  },
  "pagination": {
    "total": 445,
    "limit": 30,
    "skip": 0,
    "next": "0x123...",
    "previous": "0x123...",
    "hasNext": true,
    "hasPrevious": false
  }
}
```
