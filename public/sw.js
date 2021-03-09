/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */

// Custom react SW code

const CACHES = {
    documents: `documents-${new Date().getTime()}`,
};

const getMinutes = minutes => minutes * 60000;

const CONFIG = {
    cacheLifeTime: getMinutes(94),
};

self.addEventListener('install', event => {
    console.log('[Service Worker]: Installed');
});

self.addEventListener('activate', event => {
    console.log('[Service Worker]: Active');

    // Housekeeping on active
    event.waitUntil(
        housekeeping()
    );
});

const getKeyTimestamp = key => {
    try {
        return key.split('-').filter(Boolean)[1] || 0;
    } catch (error) {
        return 0;
    }
};

const checkIfCacheExpired = name => {
    // Allowing cache life span
    const allowedLifeSpan = CONFIG['cacheLifeTime'];
    const filterCacheTimestamp = getKeyTimestamp(name);

    return new Date().getTime() - filterCacheTimestamp > allowedLifeSpan;
};

const housekeeping = () => {
    console.log('Housekeeping');
    console.log('Current cache: ', CACHES);

    return caches.keys().then(cacheNames => (
        Promise.all(
            cacheNames
                .filter(cacheName => {
                    const isDocumentsCache = cacheName.indexOf('documents') > -1;
                    if (!isDocumentsCache) return false;

                    const shouldRemove = checkIfCacheExpired(cacheName);

                    return shouldRemove
                })
                .map(cacheName => {
                    console.log('Removing cache: ', cacheName);
                    return caches.delete(cacheName);
                })
        )
    ));
};

const onLoad = async () => {
    try {
        // Set new documents cache key
        if (checkIfCacheExpired(CACHES['documents'])) CACHES['documents'] = `documents-${new Date().getTime()}`;

        const result = await housekeeping();
        console.log('Housekeeping result: ', result);
    } catch (error) {
        console.error(error);
    }
};

self.addEventListener('message', async event => {
    if (event.data) {
        switch (event.data.type) {
            case 'APP:LOADED':
                onLoad();
                break;
            default:
                break;
        }
    }
});

// ADVANCE NETWORK REQUEST CACHING
// Intercept network requests
// And responds with data from cache if such request is already cached
self.addEventListener('fetch', event => {

    // Only return back specific network calls
    // you can parse by http method, url, etc.
    // FYI, Also caches 400+ network request responses
    if (
        event.request.url.indexOf('zi.mt') > -1 &&
        event.request.url.indexOf('/documents') > -1 &&
        event.request.method === 'GET' &&
        event.request.headers.get('accept').indexOf('application/json') === -1
    ) {
        event.respondWith(
            caches.match(event.request, { ignoreSearch: true }).then(response => {
                console.log('[Service Worker] Fetching resource: ' + event.request.url);

                return response || fetch(event.request).then(async res => {
                    // Cache new request in the cache
                    return caches.open(CACHES['documents']).then(cache => {
                        console.log('[Service Worker] Caching new resource: ' + event.request.url);

                        cache.put(event.request, res.clone());

                        return res;
                    });
                });
            })
        );
    }
});
