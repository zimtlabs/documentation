
# ZIMT Verifier

### About

Verifier is Google Chrome, Firefox web browser extension, that verifies a ZIMT object (asset, event, document, etc.), and provides more information about it.

### How to

If you are a developer, and you want to utilize ZIMT Verifier, as additional functionality on top of your project, please follow few easy steps:

1. In the page, where you want people to open the extension and see if an object is verified, add to session storage an item with key `ZIMT__extension_verifier_object` and value stringified JSON object (asset, event, document, etc.).
```js
    const object = {
        "id": "0x123...",
        "proof": "0x123...",
        "object": {
            "meta": {
                "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
                "timestamp": "2020-02-10T19:16:13+02:00"
            },
            "signature": "0xe633051fc76ae...",
        },
        "data": {
            "name": "Asset name"
        },
        "bundles": [...],
        "proof_locations": [...],
        "receipt": {...},
        "namespace": {...}
    };
```
```js
    window.sessionStorage.setItem('ZIMT__extension_verifier_object', JSON.stringify(object));
```
2. Extension will use this object to proceed with verificaction.
3. If object already has bundles attached in the key `object.bundles`, extension will use that information and resolve all the verification details.
4. If object doesn't have bundles attached, extension will fetch all bundles from `object.proof_locations`.
    - By default, extension will fetch a bundle from ZIMT API.
    - If bundles are stored in your own server, you can provide extension with a bundle url (it has to be public, GET endpoint). You can specify this settings information, by saving to your session storage an item with a key `ZIMT__extension_verifier_settings`, and value a stringified JSON settings object, ie.:
```js
    const settings = {
        bundle: {
            // Request will be made to
            // https://my-api.com/bundles/:bundle_id
            url: 'https://my-api.com/bundles`,
            // If response from url above is bundle object itself, no need to specify this property
            // If response is ie. { data: { bundle: { ...bundle data } } } (bundle object is in a deeply nested property)
            response_key: 'data.bundle'
        },
    };
```
```js
    window.sessionStorage.setItem('ZIMT__extension_verifier_settings', JSON.stringify(settings));
```
5. Once user leaves the page, but still using same tab (same session), you can delete items above from session storage, so if they reopen the extension they don't keep seeing verification result of the object from the previous page.
6. Here are 2 screenshots of how it looks in practice:

##### No object found to verify
![No object](/pages/extensions/assets/images/no-object.png)

##### Object verified
![Object verified](/pages/extensions/assets/images/verified.png)
