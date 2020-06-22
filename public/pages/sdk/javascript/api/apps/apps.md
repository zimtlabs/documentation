# Apps

<p class="description">Apps management.</p>

## Create app

Creates an app.

[API reference](/api#tag/Apps/paths/~1apps/post).

```javascript
const result = await sdk.apps.create(Data);
// sdk.apps.create({ object: ..., data: ... });

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

## Get apps

Returns list of apps.

[API reference](/api#tag/Apps/paths/~1apps/get).

```javascript
const result = await sdk.apps.getMany(Pagination);
// sdk.apps.getMany({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "data": {
        "name": "App",
        "description": "Description",
        "tags": [
          "tag1",
          "tag2"
        ],
        "verified": true,
        "private": false,
        "content": {}
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

## Search apps

Returns list of apps.

[API reference](/api#tag/Apps/paths/~1apps~1search/post).

```javascript
const result = await sdk.apps.search(Pagination);
// sdk.apps.search({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "data": {
        "name": "App",
        "description": "Description",
        "tags": [
          "tag1",
          "tag2"
        ],
        "verified": true,
        "private": false,
        "content": {}
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

## Get app

Returns an app.

[API reference](/api#tag/Apps/paths/~1apps~1{id}/get).

```javascript
const result = await sdk.apps.get(App ID);
// sdk.apps.get('0x123...');

// result
{
  "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
  "meta": {
    "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E",
    "timestamp": "2020-02-10T19:16:13Z"
  },
  "data": {
    "name": "App",
    "description": "Description",
    "tags": [
      "tag1",
      "tag2"
    ],
    "verified": true,
    "private": false,
    "content": {}
  },
  "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e...",
  "receipt": {
    "received_at": 1579967810000
  }
}
```

## Update app

Updates an app.

[API reference](/api#tag/Apps/paths/~1apps~1{id}/put).

```javascript
const result = await sdk.apps.update(App ID, Data);
// sdk.apps.update('0x123...', { data: { name: '...' } });

// result
{
  "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
  "meta": {
    "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E",
    "timestamp": "2020-02-10T19:16:13Z"
  },
  "data": {
    "name": "App",
    "description": "Description",
    "tags": [
      "tag1",
      "tag2"
    ],
    "verified": true,
    "private": false,
    "content": {}
  },
  "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e...",
  "receipt": {
    "received_at": 1579967810000
  }
}
```

## Get market apps

Returns list of market apps.

[API reference](/api#tag/Apps/paths/~1apps~1market/get).

```javascript
const result = await sdk.apps.getManyMarket(Pagination);
// sdk.apps.getManyMarket({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "data": {
        "name": "App",
        "description": "Description",
        "tags": [
          "tag1",
          "tag2"
        ],
        "verified": true,
        "private": false,
        "content": {}
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

## Search market apps

Returns list of market apps.

[API reference](/api#tag/Apps/paths/~1apps~1market~1search/post).

```javascript
const result = await sdk.apps.searchMarket(Pagination);
// sdk.apps.searchMarket({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E",
        "timestamp": "2020-02-10T19:16:13Z"
      },
      "data": {
        "name": "App",
        "description": "Description",
        "tags": [
          "tag1",
          "tag2"
        ],
        "verified": true,
        "private": false,
        "content": {}
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

## Get market app

Returns a market app.

[API reference](/api#tag/Apps/paths/~1apps~1market~1{id}/get).

```javascript
const result = await sdk.apps.getOneMarket(App ID);
// sdk.apps.getOneMarket('0x123...');

// result
{
  "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
  "meta": {
    "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E",
    "timestamp": "2020-02-10T19:16:13Z"
  },
  "data": {
    "name": "App",
    "description": "Description",
    "tags": [
      "tag1",
      "tag2"
    ],
    "verified": true,
    "private": false,
    "content": {},
    "installed": false
  },
  "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e...",
  "receipt": {
    "received_at": 1579967810000
  }
}
```

## Install market app

Installs a market app.

[API reference](/api#tag/Apps/paths/~1apps~1{id}~1install/get).

```javascript
const result = await sdk.apps.install(App ID);
// sdk.apps.install('0x123...');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "Organization app",
      "active": true,
      "app": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
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
