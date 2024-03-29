# Accounts

<p class="description">Accounts management.</p>

## Get accounts

Returns list of accounts.

[API reference](/api#tag/Accounts/paths/~1accounts/get).

```javascript
const result = await sdk.accounts.getMany(Pagination);
// sdk.accounts.getMany({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
      "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
    },
    "data": {
        "full_name": "John Doe",
        "email": "john@gmail.com",
        "address": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "settings": { }
    },
    "receipt": {
        "received_at": 1579967810
    },
    "proof_locations": [
        {
            "type ": "bundle",
            "bundle": {
                "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
            },
            "strategy": {
                "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                "name": "Default all global"
            }
        }
      ]
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
  "response": [
    {
        "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
        "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
        "object": {
            "meta": {
                "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
                "timestamp": "2020-02-10T19:16:13Z"
            },
            "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
        },
        "data": {
            "full_name": "John Doe",
            "email": "john@gmail.com",
            "address": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "settings": { }
        },
        "receipt": {
            "received_at": 1579967810
        },
        "proof_locations": [
            {
                "type ": "bundle",
                "bundle": {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
                },
                "strategy": {
                    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                    "name": "Default all global"
                }
            }
        ]
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

## Get account

Returns an account.

[API reference](/api#tag/Accounts/paths/~1accounts~1{id}/get).

```javascript
const result = await sdk.accounts.get(id);
// sdk.accounts.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
    "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
    },
    "data": {
        "full_name": "John Doe",
        "email": "john@gmail.com",
        "address": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "settings": {  }
    },
    "receipt": {
        "received_at": 1579967810
    },
    "proof_locations": [
        {
            "type ": "bundle",
            "bundle": {
                "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
            },
            "strategy": {
                "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                "name": "Default all global"
            }
        }
    ]
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
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
    "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
    },
    "data": {
        "full_name": "John Doe",
        "email": "john@gmail.com",
        "address": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "settings": { },
        "owner": true,
        "admin": true,
        "super_admin": true
    },
    "receipt": {
        "received_at": 1579967810
    },
    "proof_locations": [
        {
            "type ": "bundle",
            "bundle": {
                "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951"
            },
            "strategy": {
                "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
                "name": "Default all global"
            }
        }
    ]
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Get My account settings

Returns account settings based on ZIMT_TOKEN in the request headers.

[API reference](/api#tag/Accounts/paths/~1accounts~1settings/get).

```javascript
const result = await sdk.accounts.settings();
// sdk.accounts.settings();

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "time_zone": "Europe/London",
    "apps": {},
    "notifications": {}
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
//         data: {
//             full_name: 'John Doe (updated)'
//         }
//     }
// );

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
    "object": {
        "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xed4f59dbd23ac9ea359f3b9215eca3ceb34e08e29b1f704fa198468cae08f9f0016e..."
    },
    "data": {
        "full_name": "John Doe (updated)",
        "email": "john@gmail.com",
        "address": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
        "settings": { }
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

## Check if account exists

Returns true if account exists.

[API reference](/api#tag/Accounts/paths/~1accounts~1exists/post).

```javascript
const result = await sdk.accounts.exists({ address: string, email: string });
// sdk.accounts.exists({ address: '0x627969CD9Ef88bA7e61694947020540d7eD0001d', email: 'john@gmail.com' });

// result
{
  "response": true,
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
  "response": "as98d5385dc1f0b2b359098405fc182ba9e46fd99e8051cb92a8a58624388da29d0d17a8460eb3303c34a...",
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
  "response": [
    {
        "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
        "data": {
            "name": "My organization",
            "settings": {
                "branding": "..."
            }
        },
        "receipt": {
            "received_at": 1579967810
        }
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Delete account

Deletes an account.

[API reference](/api#tag/Accounts/paths/~1accounts~1{id}/delete).

```javascript
const result = await sdk.accounts.delete(id);
//sdk.accounts.delete('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951');

// result
{
  "response": "Removed",
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```
