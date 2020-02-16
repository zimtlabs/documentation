# Organizations

<p class="description">Organizations management.</p>

## Get organizations

Returns list of organizations.

[API reference](/api#tag/Organizations/paths/~1organizations/get).

```javascript
const result = await sdk.organizations.getMany(Pagination);
// sdk.organizations.getMany({ limit: 5, next: 'ea34...' });

// result
{
  "data": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "My organization",
        "owner": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "settings": {
          "time_zone": "Europe/London"
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
    "hasNext": true,
    "next": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0",
    "hasPrevious": true,
    "previous": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGI5In0"
  }
}
```

## Search organizations

Returns list of organizations.

[API reference](/api#tag/Organizations/paths/~1organizations~1search/post).

```javascript
const result = await sdk.organizations.search(Query);
// sdk.organizations.search(
//     {
//       query: {
//         organizations: [
//           {
//             field: 'data.name',
//             operator: 'starts-with',
//             value: 'My',
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
        "name": "My organization",
        "owner": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "settings": {
          "time_zone": "Europe/London"
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
    "hasNext": true,
    "next": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0",
    "hasPrevious": true,
    "previous": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGI5In0"
  }
}
```

## Get organization

Returns an organization.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}/get).

```javascript
const result = await sdk.organizations.get(id);
// sdk.organizations.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "data": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "My organization",
      "owner": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
      "settings": {
        "time_zone": "Europe/London"
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

## Get My organization

Returns organization based on ZIMT_TOKEN in the request headers.

[API reference](/api#tag/Organizations/paths/~1organizations~1me/get).

```javascript
const result = await sdk.organizations.me();
// sdk.organizations.me();

// result
{
  "data": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "My organization",
      "owner": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
      "settings": {
        "time_zone": "Europe/London"
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

## Update organization

Updates an organization.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}/put).

```javascript
const result = await sdk.organizations.update(id, Organization data);
// sdk.organizations.update(
//     '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951',
//     {
//         name: 'My organization (updated)'
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
      "name": "My organization (updated)",
      "owner": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
      "settings": {
        "time_zone": "Europe/London"
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

## Create organization (sign up)

Creates an organization and an account for the user as organization owner.

[API reference](/api#tag/Organizations/paths/~1organizations/post).

```javascript
const result = await sdk.organizations.create(Request data);
// sdk.organizations.create({
//   "organization": {
//     "name": "Johns Organization"
//   },
//   "account": {
//     "full_name": "John Doe",
//     "email": "john@gmail.com",
//     "address": "0x4DC2f66Ea6f7Cd898342378e514cBDAD9dE5CC1B",
//     "security": {
//       "token": "a4123asuiasy4uay3iaisyu3oiasu3iaous34"
//     }
//   }
// });

// result
{
  "data": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "Johns Organization",
      "owner": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
      "settings": {
        "time_zone": "Europe/London"
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

## Get organization accounts

Returns list of organization accounts.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1accounts/get).

```javascript
const result = await sdk.organizations.getOrganizationAccounts(organization_id: string, Pagination);
// sdk.organizations.getOrganizationAccounts('organization_id', { limit: 5, next: 'ea34...' });

// result
{
  "data": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "full_name": "John Doe",
        "email": "john@gmail.com",
        "address": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "settings": {
          "time_zone": "Europe/London"
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
    "hasNext": true,
    "next": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGJhIn0",
    "hasPrevious": true,
    "previous": "eyIkb2lkIjoiNTgwZmQxNmFjYTJhNmIyNzE1NjJkOGI5In0"
  }
}
```

## Create organization account

Creates an organization account.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1accounts/post).

```javascript
const result = await sdk.organizations.createOrganizationAccount(organization_id: string, Account data);
// sdk.organizations.createOrganizationAccount(
//     'organization_id',
//     {
//         "object": {
//             "meta": {
//                 "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
//             },
//             "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
//         },
//         "data": {
//             "full_name": "John Doe",
//             "email": "john@gmail.com",
//             "address": "0x4DC2f66Ea6f7Cd898342378e514cBDAD9dE5CC1B",
//             "security": {
//                 "token": "a4123asuiasy4uay3iaisyu3oiasu3iaous34"
//             }
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
      "full_name": "John Doe",
      "email": "john@gmail.com",
      "address": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
      "settings": {
        "time_zone": "Europe/London"
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
