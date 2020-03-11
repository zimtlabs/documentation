# Permissions

<p class="description">Permissions management.</p>

## Create permission

Creates a permission.

[API reference](/api#tag/Permissions/paths/~1permissions/post).

```javascript
const result = await sdk.permissions.create(Permission object);
// sdk.permissions.create({
//   "object": {
//     "meta": {
//       "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
//     },
//     "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
//   },
//   "data": {
//     "name": "Asset view, not from account-5 and whos info event contains tag1 in tag property",
//     "actions": [
//       "asset:GetObject"
//     ],
//     "resources": {
//       "assets": [
//         {
//           "field": "object.meta.created_by",
//           "operator": "not-equal",
//           "value": "0x8752F61635543a870826D9F4CA20a9D1F3934079"
//         }
//       ],
//       "events": [
//         {
//           "field": "object.data.tag",
//           "operator": "equal",
//           "value": "tag1"
//         }
//       ]
//     },
//     "principal": [
//       "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
//     ]
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

## Get permissions

Returns list of permissions.

[API reference](/api#tag/Permissions/paths/~1permissions/get).

```javascript
const result = await sdk.permissions.getMany(Pagination);
// sdk.permissions.getMany({ limit: 5, next: 'ea34...' });

// result
{
  "data": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Asset view, not from account-5 and whos info event contains tag1 in tag property",
        "actions": [
          "asset:GetObject"
        ],
        "resources": {
          "assets": [
            {
              "field": "object.meta.created_by",
              "operator": "not-equal",
              "value": "0x8752F61635543a870826D9F4CA20a9D1F3934079"
            }
          ],
          "events": [
            {
              "field": "object.data.tag",
              "operator": "equal",
              "value": "tag1"
            }
          ]
        },
        "principal": [
          "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
        ]
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
    "hasNext": true,
    "next": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0",
    "hasPrevious": true,
    "previous": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGI5In0"
  }
}
```

## Search permissions

Returns list of permissions.

[API reference](/api#tag/Permissions/paths/~1permissions~1search/post).

```javascript
const result = await sdk.permissions.search(Query);
// sdk.permissions.search(
//     {
//       query: {
//         permissions: [
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
  "data": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Asset view, not from account-5 and whos info event contains tag1 in tag property",
        "actions": [
          "asset:GetObject"
        ],
        "resources": {
          "assets": [
            {
              "field": "object.meta.created_by",
              "operator": "not-equal",
              "value": "0x8752F61635543a870826D9F4CA20a9D1F3934079"
            }
          ],
          "events": [
            {
              "field": "object.data.tag",
              "operator": "equal",
              "value": "tag1"
            }
          ]
        },
        "principal": [
          "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
        ]
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
    "hasNext": true,
    "next": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0",
    "hasPrevious": true,
    "previous": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGI5In0"
  }
}
```

## Get permission

Returns a permission.

[API reference](/api#tag/Permissions/paths/~1permissions~1{id}/get).

```javascript
const result = await sdk.permissions.get(id);
// sdk.permissions.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "data": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "Asset view, not from account-5 and whos info event contains tag1 in tag property",
      "actions": [
        "asset:GetObject"
      ],
      "resources": {
        "assets": [
          {
            "field": "object.meta.created_by",
            "operator": "not-equal",
            "value": "0x8752F61635543a870826D9F4CA20a9D1F3934079"
          }
        ],
        "events": [
          {
            "field": "object.data.tag",
            "operator": "equal",
            "value": "tag1"
          }
        ]
      },
      "principal": [
        "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
      ]
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

## Update permission

Updates a permission.

[API reference](/api#tag/Permissions/paths/~1permissions~1{id}/put).

```javascript
const result = await sdk.permissions.update(permission_id: string, Permission data);
// sdk.permissions.update(
//     '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951',
//     {
//         data: {
//             principal: [
//                 '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951',
//                 '0x1412258c1a01231148e655cf4abf515191c2b6b5ee466e03c951ee466e03c951'
//             ]
//         }
//     }
// );

// result
{
  "data": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "Asset view, not from account-5 and whos info event contains tag1 in tag property",
      "actions": [
        "asset:GetObject"
      ],
      "resources": {
        "assets": [
          {
            "field": "object.meta.created_by",
            "operator": "not-equal",
            "value": "0x8752F61635543a870826D9F4CA20a9D1F3934079"
          }
        ],
        "events": [
          {
            "field": "object.data.tag",
            "operator": "equal",
            "value": "tag1"
          }
        ]
      },
      "principal": [
        "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
      ]
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

## My permissions

Returns list of permissions based on ZIMT token in request headers.

[API reference](/api#tag/Permissions/paths/~1permissions~1me/get).

```javascript
const result = await sdk.permissions.me();
// sdk.permissions.me();

// result
{
  "data": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Asset view, not from account-5 and whos info event contains tag1 in tag property",
        "actions": [
          "asset:GetObject"
        ],
        "resources": {
          "assets": [
            {
              "field": "object.meta.created_by",
              "operator": "not-equal",
              "value": "0x8752F61635543a870826D9F4CA20a9D1F3934079"
            }
          ],
          "events": [
            {
              "field": "object.data.tag",
              "operator": "equal",
              "value": "tag1"
            }
          ]
        },
        "principal": [
          "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
        ]
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
  }
}
```
