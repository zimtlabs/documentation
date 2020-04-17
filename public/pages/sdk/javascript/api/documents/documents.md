# Documents

<p class="description">Documents management.</p>

## Generate document

Returns signed document object.

Used for create document method.

```javascript
const result = sdk.documents.generateDocument(Document data);
// sdk.documents.generateDocument({
//     "type ": "image/png",
//     "name": "Image",
//     "content": {
//         "dataUri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADWCAMAAADl7J7tAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeDcYeAAEGWge7AAAAAElFTkSuQmCC"
//     },
//     "properties": {
//         "prop": 7
//     }
// });

// result
{
  "meta": {
    "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
    "timestamp": "2020-02-10T19:16:13Z",
    "data_hash": "0x123..."
  },
  "data": {
    "type ": "image/png",
    "name": "Image",
    "content": {
      "dataUri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADWCAMAAADl7J7tAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeDcYeAAEGWge7AAAAAElFTkSuQmCC"
    },
    "properties": {
      "prop": 7
    }
  },
  "signature": "0xe633051fc76ae..."
}
```

## Create document

Creates a document.

[API reference](/api#tag/Documents/paths/~1documents/post).

```javascript
const result = await sdk.documents.create(Document object);
// sdk.documents.create(sdk.documents.generateDocument({
//     "type ": "image/png",
//     "name": "Image",
//     "content": {
//         "dataUri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADWCAMAAADl7J7tAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeDcYeAAEGWge7AAAAAElFTkSuQmCC"
//     },
//     "properties": {
//         "prop": 7
//     }
// }));
//
// or
//
// sdk.documents.create({
//   "meta": {
//     "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
//     "timestamp": "2020-02-10T19:16:13Z",
//     "data_hash": "0x123..."
//   },
//   "data": {
//     "type ": "image/png",
//     "name": "Image",
//     "content": {
//       "dataUri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADWCAMAAADl7J7tAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeDcYeAAEGWge7AAAAAElFTkSuQmCC"
//     },
//     "properties": {
//       "prop": 7
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
    "received_at": 1579278115000,
    "organization": "0x123..."
  }
}
```

## Get documents

Returns list of documents.

[API reference](/api#tag/Documents/paths/~1documents/get).

```javascript
const result = await sdk.documents.getMany(Pagination);
// sdk.documents.getMany({ limit: 5, next: 'ea34...' });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "timestamp": "2020-02-10T19:16:13Z",
        "data_hash": "0x123..."
      },
      "data": {
        "type ": "image/png",
        "name": "Image",
        "properties": {
          "prop": 7
        }
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

## Search documents

Returns list of documents.

[API reference](/api#tag/Documents/paths/~1documents~1search/post).

```javascript
const result = await sdk.documents.search(Query);
// sdk.documents.search(
//     {
//       query: {
//         documents: [
//           {
//             field: 'object.meta.created_by',
//             operator: 'equal',
//             value: '0x8752F61635543a870826D9F4CA20a9D1F3934079',
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
        "data_hash": "0x123..."
      },
      "data": {
        "type ": "image/png",
        "name": "Image",
        "properties": {
          "prop": 7
        }
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

## Get document

Returns a document.

[API reference](/api#tag/Documents/paths/~1documents~1{id}/get).

```javascript
const result = await sdk.documents.get(id);
// sdk.documents.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
      "timestamp": "2020-02-10T19:16:13Z",
      "data_hash": "0x123..."
    },
    "data": {
      "type ": "image/png",
      "name": "Image",
      "content": {
        "dataUri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADWCAMAAADl7J7tAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeDcYeAAEGWge7AAAAAElFTkSuQmCC"
      },
      "properties": {
        "prop": 7
      }
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
