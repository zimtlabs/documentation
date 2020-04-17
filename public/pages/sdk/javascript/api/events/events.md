# Events

<p class="description">Events management.</p>

## Generate event

Returns signed event object.

Used for create event method.

```javascript
const result = sdk.events.generateEvent(asset_id: string, Event data);
// sdk.events.generateEvent('0x123...', {
//     "type ": "info",
//     "name": "Info event"
// });

// result
{
  "meta": {
    "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
    "timestamp": "2020-02-10T19:16:13Z",
    "asset_id": "0x123...",
    "data_hash": "0x123..."
  },
  "data": {
    "type ": "info",
    "name": "Info event"
  },
  "signature": "0xe633051fc76ae..."
}
```

## Create event

Creates an event.

[API reference](/api#tag/Events/paths/~1assets~1{asset_id}~1events/post).

```javascript
const result = await sdk.events.createEvent(Event object);
// sdk.events.createEvent(sdk.events.generateEvent('0x123...', {
//     "type ": "info",
//     "name": "Info event",
// }));
//
// or
//
// sdk.events.createEvent('0x123...', {
//   "meta": {
//     "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
//     "timestamp": "2020-02-10T19:16:13Z",
//     "asset_id": "0x123...",
//     "data_hash": "0x123..."
//   },
//   "data": {
//     "type ": "info",
//     "name": "Info event"
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
    "received_at": 1579278115000,
    "organization": "0x123..."
  }
}
```

## Get events

Returns list of events.

[API reference](/api#tag/Events/paths/~1assets~1{asset_id}~1events/get).

```javascript
const result = await sdk.events.getEvents(asset_id: string, Pagination);
// sdk.events.getEvents('0x123...', { limit: 5, next: 'ea34...' });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "timestamp": "2020-02-10T19:16:13Z",
        "asset_id": "0x123...",
        "data_hash": "0x123..."
      },
      "data": {
        "type ": "info",
        "name": "Info event"
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

## Search events

Returns list of events.

[API reference](/api#tag/Events/paths/~1assets~1{asset_id}~1events~1search/post).

```javascript
const result = await sdk.events.searchEvents(asset_id: string, Query);
// sdk.events.searchEvents(
//     '0x123...',
//     {
//       query: {
//         events: [
//           {
//             field: 'object.meta.created_by',
//             operator: 'equal',
//             value: '0x627969CD9Ef88bA7e61694947020540d7eD0001d',
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
        "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "timestamp": "2020-02-10T19:16:13Z",
        "asset_id": "0x123...",
        "data_hash": "0x123..."
      },
      "data": {
        "type ": "info",
        "name": "Info event"
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

## Get event

Returns an event.

[API reference](/api#tag/Events/paths/~1assets~1{asset_id}~1events~1{event_id}/get).

```javascript
const result = await sdk.events.getEvent(asset_id: string, event_id: string);
// sdk.events.getEvent('0x123...', '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
      "timestamp": "2020-02-10T19:16:13Z",
      "asset_id": "0x123...",
      "data_hash": "0x123..."
    },
    "data": {
      "type ": "info",
      "name": "Info event"
    },
    "signature": "0xe633051fc76ae...",
    "receipt": {
      "received_at": 1579278115000
    }
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```
