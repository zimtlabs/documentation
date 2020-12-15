# Organizations

<p class="description">Organizations management.</p>

## Get organizations

Returns list of organizations.

[API reference](/api#tag/Organizations/paths/~1organizations/get).

```javascript
const result = await sdk.organizations.getMany(Pagination);
// sdk.organizations.getMany({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "My organization",
        "owner": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "full_name": "John Doe"
        },
        "plan": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "Free"
        },
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
    "limit": 30,
    "skip": 30,
    "total": 120
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
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "My organization",
        "owner": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "full_name": "John Doe"
        },
        "plan": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "Free"
        },
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
    "limit": 30,
    "skip": 30,
    "total": 120
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
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "My organization",
        "owner": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "full_name": "John Doe"
        },
        "plan": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "Free"
        },
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

## Get organization public details

Returns organization public details.

[API reference](/api#tag/Organizations/paths/~1organizations~1public/get).

```javascript
const result = await sdk.organizations.getOrganizationPublicDetails(Options);
// sdk.organizations.getOrganizationPublicDetails({ queryParams: { organization: 'My organization' } });

// result
{
  "response": {
    "data": {
      "name": "My organization",
      "settings": {
        "branding": {
            "logo": {},
            "colors": {}
        }
      }
    },
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
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "My organization",
        "owner": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "full_name": "John Doe"
        },
        "plan": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "Free"
        },
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
//         data: {
//             name: 'My organization (updated)'
//         }
//     }
// );

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "My organization (updated)",
        "owner": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "full_name": "John Doe"
        },
        "plan": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "Free"
        },
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

## Plan update

Updates an organization plan.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1plan~1{plan_id}/put).

```javascript
const result = await sdk.organizations.planUpdate(id, plan_id);
// sdk.organizations.planUpdate(
//     '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951',
//     '0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c123'
// );

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "My organization",
        "owner": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "full_name": "John Doe"
        },
        "plan": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "Premium"
        },
      "settings": {
        "time_zone": "Europe/London"
      },
      "active": true
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
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "Johns Organization",
        "owner": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "full_name": "John Doe"
        },
        "plan": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "Free"
        },
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

## Search public organization accounts

Returns public organization accounts.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1accounts~1public/post).

```javascript
const result = await sdk.organizations.searchOrganizationAccountsPublic(organization_id: string, Query);
// sdk.organizations.searchOrganizationAccountsPublic('organization_id', { limit: 5, skip: 30 });

// result
{
  "response": [
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
        },
        "active": true
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

## Search public organization teams

Returns public organization teams.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1teams~1public/post).

```javascript
const result = await sdk.organizations.searchOrganizationTeamsPublic(organization_id: string, Query);
// sdk.organizations.searchOrganizationTeamsPublic('organization_id', { limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Team 1",
        "description": "Our main team",
        "active": true,
        "private": false,
        "members": [
          {
            "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
            "full_name": "John Doe",
            "role": "maintainer"
          }
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
    "limit": 30,
    "skip": 30,
    "total": 120
  }
}
```

## Get organizations with public details

Returns organizations with public details.

[API reference](/api#tag/Organizations/paths/~1organizations~1public~1search/post).

```javascript
const result = await sdk.organizations.searchPublic(Query);
// sdk.organizations.searchPublic({ limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x123...",
      "data": {
        "name": "My organization"
      },
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

## Get organization collection objects

For hub admin to get specific organization collection objects.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1{collection}/get).

```javascript
const result = await sdk.organizations.getOrganizationCollectionObjects(organization_id, collection, Pagination);
// sdk.organizations.getOrganizationCollectionObjects('0x123...', 'accounts', { limit: 5, skip: 30 });

// result
{
  "response": [
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
        },
        "active": true
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

## Get organization collection object

For hub admin to get specific organization collection object.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1{collection}~1{:object_id}/get).

```javascript
const result = await sdk.organizations.getOrganizationCollectionObject(organization_id, collection, object_id);
// sdk.organizations.getOrganizationCollectionObject('0x123...', 'accounts', '0x123...');

// result
{
  "response": {
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
      "active": true
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

## Search organization collection objects

For hub admin to get specific organization collection objects.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1{collection}~1search/post).

```javascript
const result = await sdk.organizations.searchOrganizationCollectionObjects(organization_id, collection, body);
// sdk.organizations.searchOrganizationCollectionObjects('0x123...', 'accounts', { limit: 5, skip: 30 });

// result
{
  "response": [
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
        },
        "active": true
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
  "response": {
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

## Organization signup

Registers an organization account.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1signup/post).

```javascript
const result = await sdk.organizations.publicSignup(organization_id: string, Account data);
// sdk.organizations.publicSignup(
//     'organization_id',
//     {
//         "account": {
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

## Get many organization apps

Returns list of organization apps.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1apps/get).

```javascript
const result = await sdk.organizations.getManyOrganizationApps(Organization ID, Pagination);
// sdk.organizations.getManyOrganizationApps('0x123...', { limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Organization app",
        "active": true,
        "app": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "App"
        },
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

## Search many organization apps

Returns list of organization apps.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1apps~1search/post).

```javascript
const result = await sdk.organizations.searchOrganizationApps(Organization ID, Query);
// sdk.organizations.searchOrganizationApps('0x123...', { limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Organization app",
        "active": true,
        "app": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "App"
        },
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

## Get many active organization apps

Returns list of active organization apps.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1apps~1active/get).

```javascript
const result = await sdk.organizations.getManyActiveOrganizationApps(Organization ID, Pagination);
// sdk.organizations.getManyActiveOrganizationApps('0x123...', { limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Organization app",
        "active": true,
        "app": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "App"
        },
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

## Search many active organization apps

Returns list of active organization apps.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1apps~1active~1search/post).

```javascript
const result = await sdk.organizations.searchActiveOrganizationApps(Organization ID, Query);
// sdk.organizations.searchActiveOrganizationApps('0x123...', { limit: 5, skip: 30 });

// result
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "meta": {
        "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
      },
      "data": {
        "name": "Organization app",
        "active": true,
        "app": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "App"
        },
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

## Get active organization app

Returns active organization app.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1apps~1active~1{organization-app-id}/get).

```javascript
const result = await sdk.organizations.getActiveOrganizationApp(Organization ID, Organization App ID);
// sdk.organizations.getActiveOrganizationApp('0x123...', '0x123...');

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
        "app": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "App"
        },
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

## Get organization app

Returns organization app.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1apps~1{organization-app-id}/get).

```javascript
const result = await sdk.organizations.getOrganizationApp(Organization ID, Organization App ID);
// sdk.organizations.getOrganizationApp('0x123...', '0x123...');

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
        "app": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "App"
        },
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

## Update organization app

Updates organization app.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1apps~1{organization-app-id}/put).

```javascript
const result = await sdk.organizations.updateOrganizationApp(Organization ID, Organization App ID, Data);
// sdk.organizations.updateOrganizationApp('0x123...', '0x123...', { data: { active: false } });

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "name": "Organization app",
      "active": false,
        "app": {
            "id": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "name": "App"
        },
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

## Update organization app

Upgrades organization app.

[API reference](http://localhost:3000/api#tag/Organizations/paths/~1organizations~1{id}~1apps~1{organization-app-id}~1upgrade/get).

```javascript
const result = await sdk.organizations.upgradeOrganizationApp(Organization ID, Organization App ID);
// sdk.organizations.upgradeOrganizationApp('0x123...', '0x123...');

// result
{
  "response": "Upgraded",
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Get organization analytics

Returns organization analytics.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1analytics/get).

```javascript
const result = await sdk.organizations.analytics(Organization ID);
// sdk.organizations.analytics('0x123...');

// result
{
  "response": {
    "assets": [
      {
        "type ": "day",
        "action": "create",
        "object": "assets",
        "organization": "0x123...",
        "value": 4,
        "date": "2020-07-24",
        "resolved": true
      }
    ]
  },
  "meta": {
    "code": 200,
    "message": "Ok"
  }
}
```

## Get organization budget

Returns organization budget.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1budget/get).

```javascript
const result = await sdk.organizations.budget(Organization ID);
// sdk.organizations.budget('0x123...');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "type ": "plan",
      "value": {
        "tokens": 14000
      },
      "active": {
        "date": {
          "month": "2020-01"
        },
        "plan": {
          "id": "0x123...",
          "name": "Free"
        }
      },
      "organization": {
        "id": "0x123...",
        "name": "Organization 1"
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

## Get organization credit

Returns organization credit.

[API reference](/api#tag/Organizations/paths/~1organizations~1{id}~1credit/get).

```javascript
const result = await sdk.organizations.credit(Organization ID);
// sdk.organizations.credit('0x123...');

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "meta": {
      "created_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E"
    },
    "data": {
      "type ": "plan",
      "value": {
        "tokens": 7000
      },
      "organization": {
        "id": "0x123...",
        "name": "Organization 1"
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
