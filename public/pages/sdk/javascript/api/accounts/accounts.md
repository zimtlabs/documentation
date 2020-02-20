# Accounts

<p class="description">Accounts management.</p>

## Get accounts

Returns list of accounts.

[API reference](/api#tag/Accounts/paths/~1accounts/get).

```javascript
const result = await sdk.accounts.getMany(Pagination);
// sdk.accounts.getMany({ limit: 5, next: 'ea34...' });

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

## Search accounts

Returns list of accounts.

[API reference](/api#tag/Accounts/paths/~1accounts~1search/post).

```javascript
const result = await sdk.accounts.search(Query);
// sdk.accounts.search(
//     {
//       query: {
//         accounts: [
//           {
//             field: 'data.full_name',
//             operator: 'starts-with',
//             value: 'John',
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

## Get account

Returns an account.

[API reference](/api#tag/Accounts/paths/~1accounts~1{id}/get).

```javascript
const result = await sdk.accounts.get(id);
// sdk.accounts.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

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

## Get My account

Returns account based on ZIMT_TOKEN in the request headers.

[API reference](/api#tag/Accounts/paths/~1accounts~1me/get).

```javascript
const result = await sdk.accounts.me();
// sdk.accounts.me();

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
      },
      "owner": true,
      "admin": true,
      "super_admin": true
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

## Update account

Updates an account.

[API reference](/api#tag/Accounts/paths/~1accounts~1{id}/put).

```javascript
const result = await sdk.accounts.update(id, Account data);
// sdk.accounts.update(
//     '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951',
//     {
//         full_name: 'John Doe (updated)'
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
      "full_name": "John Doe (updated)",
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

## Check if account exists

Returns true if account exists.

[API reference](/api#tag/Accounts/paths/~1accounts~1exists/post).

```javascript
const result = await sdk.accounts.exists({ address: string, email: string });
// sdk.accounts.exists({ address: '0x627969CD9Ef88bA7e61694947020540d7eD0001d', email: 'john@gmail.com' });

// result
{
  "data": true,
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Get token

Returns an account token, used for sign in.

[API reference](/api#tag/Accounts/paths/~1accounts~1token/get).

```javascript
const result = await sdk.accounts.getToken({ organization_name: string, email: string });
// sdk.accounts.getToken({ organization_name: 'Test', email: 'john@gmail.com' });

// result
{
  "data": "as98d5385dc1f0b2b359098405fc182ba9e46fd99e8051cb92a8a58624388da29d0d17a8460eb3303c34a...",
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Get account email's organizations

Returns list of organizations with basic details, account's email is apart of.

[API reference](/api#tag/Accounts/paths/~1accounts~1organizations/get).

```javascript
const result = await sdk.accounts.getOrganizations({ email: string });
// sdk.accounts.getOrganizations({ email: 'john@gmail.com' });

// result
{
  "data": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "data": {
        "name": "My organization",
        "settings": {
          "branding": "..."
        }
      },
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
