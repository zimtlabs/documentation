if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

    /* global workbox */
    if (workbox) {
        console.log('Workbox is loaded');

        // Switch debug logging on/off here. Default is on in dev and off in prod
        workbox.setConfig({ debug: false });

        // Control the uncontrolled client side
        workbox.core.clientsClaim();

        workbox.precaching.cleanupOutdatedCaches();

        self.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'SKIP_WAITING') {
                self.skipWaiting();
            }
        });

        workbox.routing.registerRoute(
            ({ request }) => request.mode === 'navigate',
            new workbox.strategies.NetworkFirst({
                cacheName: 'pages',
                plugins: [
                    new workbox.cacheableResponse.CacheableResponsePlugin({
                        statuses: [200],
                    }),
                ],
            }),
        );

        workbox.routing.registerRoute(
            new RegExp('.(?:png|gif|jpg|jpeg|webp|svg)$'),
            new workbox.strategies.CacheFirst({
                cacheName: 'images',
                plugins: [
                    new workbox.cacheableResponse.CacheableResponsePlugin({
                        statuses: [0, 200]
                    }),
                    new workbox.expiration.ExpirationPlugin({
                        maxEntries: 20,
                        maxAgeSeconds: 3 * 24 * 60 * 60,
                    })
                ]
            })
        );

        workbox.routing.registerRoute(
            ({ request, url }) => (
                url.host.indexOf('zi.mt') > -1 &&
                url.pathname.indexOf('/documents') > -1 &&
                request.headers.get('accept').indexOf('application/json') === -1
            ),
            new workbox.strategies.CacheFirst({
                cacheName: 'documents',
                plugins: [
                    new workbox.cacheableResponse.CacheableResponsePlugin({
                        statuses: [0, 200],
                    }),
                    new workbox.expiration.ExpirationPlugin({
                        maxEntries: 1e4,
                        maxAgeSeconds: 3 * 24 * 60 * 60,
                    }),
                ],
            }),
        );

        workbox.routing.registerRoute(
            ({ request }) => (
                request.destination === 'style' ||
                request.destination === 'script' ||
                request.destination === 'worker'
            ),
            new workbox.strategies.StaleWhileRevalidate({
                cacheName: 'assets',
                plugins: [
                    new workbox.cacheableResponse.CacheableResponsePlugin({
                        statuses: [200],
                    }),
                ],
            }),
        );

        workbox.routing.registerRoute(
            /index\.html/,
            new workbox.strategies.NetworkFirst({
                cacheName: 'html',
            })
        );

        workbox.routing.registerRoute(
            new RegExp('/_next/static/'),
            new workbox.strategies.StaleWhileRevalidate({
                cacheName: 'static-caches',
            })
        );

    } else {
        // console.log('Workbox could not be loaded. No Offline support');
    }
}
