# Certificates

<p class="description">Certificates management.</p>

## Generate certificate

Returns signed certificate object.

Used for create certificate method.

```javascript
const result = sdk.certificates.generateCertificate(body: { body, data, namespace, ownership });
// sdk.certificates.generateCertificate({
//     object: {
//         // Meta is not required
//         meta: {
//             // Valid ISO data, max 24h in the future
//             // Default is now
//             timestamp: '2020-02-10T19:16:13+02:00',
//         },
//         data: {
//             type: 'eco.safety',
//             category: 'type',
//         },
//     },
//     data: {
//         name: 'Eco Safety certificate type',
//         active: true,
//         private: true,
//         verified: true
//     }
// });

// result
{
  "object": {
    "meta": {
      "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
      "timestamp": "2020-02-10T19:16:13Z",
      "data_hash": "0x123..."
  },
    "signature": "0xe633051fc76ae...",
    "data": {
      "type ": "eco.safety",
      "category": "type"
    }
  },
  "data": {
    "name": "Eco Safety certificate type",
    "active": true,
    "private": true,
    "verified": true
  }
}
```

## Create certificate

Creates a certificate.

[API reference](/api#tag/Certificates/paths/~1certificates/post).

```javascript
const result = await sdk.certificates.create(Certificate object);
sdk.certificates.create(sdk.certificates.generateCertificate());

or

// sdk.certificates.create({
//   "object": {
//     "meta": {
//       "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
//       "timestamp": "2020-02-10T19:16:13Z",
//       "data_hash": "0x123..."
//     },
//     "signature": "0xe633051fc76ae...",
//     "data": {
//       "type ": "eco.safety",
//       "category": "type"
//     }
//   },
//   "data": {
//     "name": "Eco Safety certificate type",
//     "active": true,
//     "private": true,
//     "verified": true
//   }
// });

// result
{
  "proof": "0x0192cbd1c59b40ea97f7bc102a16c325a3066bb6b68c9c16bae447d8bb38565a66da29...",
  "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
  "receipt": {
    "object_hash": "0xc0d7efb7eaa769f83a8ce2d41466d603af6ad308b5a8053676c4034d0369aec5",
    "received_by": "0x678b3c5090B25b3a63120CF0218750886e37A96E",
    "received_at": 1579278115,
    "organization": "0x123..."
  }
}
```

## Update certificate

Updates an certificate.

[API reference](/api#tag/Certificates/paths/~1certificates~1{id}/put).

```javascript
const result = await sdk.certificates.update(Certificate data);
sdk.certificates.update({ data: { name: 'New name' } });

or

// sdk.certificates.update({
//   "data": {
//       "name": "New name"
//   }
// });

// result
{
  "object": {
    "meta": {
      "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
      "timestamp": "2020-02-10T19:16:13Z",
      "data_hash": "0x123..."
  },
    "signature": "0xe633051fc76ae...",
    "data": {
      "type ": "eco.safety",
      "category": "type"
    }
  },
  "data": {
    "name": "New name",
    "active": true,
    "private": true,
    "verified": true
  }
}
```

## Get certificates

Returns list of certificates.

[API reference](/api#tag/Certificates/paths/~1certificates/get).

```javascript
const result = await sdk.certificates.getMany(Pagination, Certificate options);
// sdk.certificates.getMany({ limit: 5, skip: 30 }, { info: true, parse: true ));

// result
{
  "response": [
    {
        "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
        "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
        "object": {
            "meta": {
                "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
                "timestamp": "2020-02-10T19:16:13Z",
                "data_hash": "0x123..."
            },
            "signature": "0xe633051fc76ae...",
            "data": {
                "type ": "eco.safety",
                "category": "type"
            }
        },
        "data": {
            "name": "Eco Safety certificate type",
            "active": true,
            "private": true,
            "verified": true
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

## Search certificates

Returns list of certificates.

[API reference](/api#tag/Certificates/paths/~1certificates~1search/post).

```javascript
const result = await sdk.certificates.search(Query, Certificate options);
// sdk.certificates.search(
//     {
//       query: {
//         certificates: [
//           {
//             field: 'data.name',
//             operator: 'starts-with',
//             value: 'Certificate',
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
                "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
                "timestamp": "2020-02-10T19:16:13Z",
                "data_hash": "0x123..."
            },
            "signature": "0xe633051fc76ae...",
            "data": {
                "type ": "eco.safety",
                "category": "type"
            }
        },
        "data": {
            "name": "Certificate Eco Safety",
            "active": true,
            "private": true,
            "verified": true
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

## Search certificate sources

Returns list of certificates.

[API reference](/api#tag/Certificates/paths/~1certificates~1sources/post).

```javascript
const result = await sdk.certificates.sources(Query, Certificate options);
// sdk.certificates.sources(
//     {
//       query: {
//         certificates: [
//           {
//             field: 'data.name',
//             operator: 'starts-with',
//             value: 'Certificate',
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
                "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
                "timestamp": "2020-02-10T19:16:13Z",
                "data_hash": "0x123..."
            },
            "signature": "0xe633051fc76ae...",
            "data": {
                "type ": "eco.safety",
                "category": "type"
            }
        },
        "data": {
            "name": "Certificate Eco Safety",
            "active": true,
            "private": true,
            "verified": true
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

## Search certificate instances

Returns list of certificates.

[API reference](/api#tag/Certificates/paths/~1certificates~1instances/post).

```javascript
const result = await sdk.certificates.instances(Query, Certificate options);
// sdk.certificates.instances(
//     {
//       query: {
//         certificates: [
//           {
//             field: 'data.name',
//             operator: 'starts-with',
//             value: 'Certificate',
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
                "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
                "timestamp": "2020-02-10T19:16:13Z",
                "data_hash": "0x123..."
            },
            "signature": "0xe633051fc76ae...",
            "data": {
                "type ": "eco.safety",
                "category": "type"
            }
        },
        "data": {
            "name": "Certificate Eco Safety",
            "active": true,
            "private": true,
            "verified": true
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

## Get certificate

Returns a certificate.

[API reference](/api#tag/Certificates/paths/~1certificates~1{id}/get).

```javascript
const result = await sdk.certificates.get(id, Certificate options);
// sdk.certificates.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951', { info: true });

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
    "object": {
        "meta": {
            "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "timestamp": "2020-02-10T19:16:13Z",
            "data_hash": "0x123..."
        },
        "signature": "0xe633051fc76ae...",
        "data": {
            "type ": "eco.safety",
            "category": "type"
        }
    },
    "data": {
        "name": "Eco Safety certificate type",
        "active": true,
        "private": true,
        "verified": true
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

## Get certificate public

Returns a certificate.

[API reference](/api#tag/Certificates/paths/~1certificates~1{id}~1public/get).

```javascript
const result = await sdk.certificates.get(id, Certificate options);
// sdk.certificates.get('0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951', { info: true });

// result
{
  "response": {
    "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
    "proof": "0x6898ee14679ad61cc5293c626b4b28a7c1624b2e438d98b043927cea164ed8c123d088f59bf9938a2fbef676ac33948af49051b78df98a622e9c5175c746bfb71b",
    "object": {
        "meta": {
            "created_by": "0x627969CD9Ef88bA7e61694947020540d7eD0001d",
            "timestamp": "2020-02-10T19:16:13Z",
            "data_hash": "0x123..."
        },
        "signature": "0xe633051fc76ae...",
        "data": {
            "type ": "eco.safety",
            "category": "type"
        }
    },
    "data": {
        "name": "Eco Safety certificate type",
        "active": true,
        "private": true,
        "verified": true
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
