/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import pkg from '../../../package.json';

global.appVersion = pkg.version;

let interval;
let meta;

export const semverGreaterThan = (versionA, versionB) => {
    const versionsA = versionA.split(/\./g);

    const versionsB = versionB.split(/\./g);

    while (versionsA.length || versionsB.length) {
        const a = Number(versionsA.shift());

        const b = Number(versionsB.shift());
        // eslint-disable-next-line no-continue
        if (a === b) continue;
        // eslint-disable-next-line no-restricted-globals
        return a > b || isNaN(b);
    }

    return false;
};

export const getMeta = async () => {
    try {
        const headers = new Headers();

        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-store');

        let meta = await fetch('/meta.json', { headers });

        meta = await meta.json();

        return meta;
    } catch (error) {
        console.log(error);
    }
};

export const refreshCacheAndReload = () => {
    console.log('Clearing cache and hard reloading...');

    if (caches) {
        caches.keys().then(names => {
            for (let name of names) caches.delete(name);
        });
    }

    // Delete browser cache + hard reload
    window.location.reload();
};

export const checkMeta = async () => {
    const _meta = await getMeta();

    meta = _meta;

    if (!_meta) {
        console.log('No meta: ', _meta);

        interval = setInterval(async () => {
            meta = await getMeta();

            checkMeta(meta);
        }, 400);
    } else {
        if (window.navigator.onLine) {
            const latestVersion = _meta.version;
            const currentVersion = global.appVersion;
            const shouldForceRefresh = semverGreaterThan(latestVersion, currentVersion);

            console.log(`Meta.json new: ${latestVersion} current: ${currentVersion} should refresh: ${shouldForceRefresh}`);

            if (shouldForceRefresh) {
                console.log(`We have a new version - ${latestVersion}. Should force refresh.`);

                refreshCacheAndReload();
            } else {
                console.log(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);
            }

            clearInterval(interval);
        }
    }
};

export const checkRoot = () => {
    setTimeout(() => {
        console.log('Root checking...');

        const root = document.getElementById('__next');

        if (!root.children.length) refreshCacheAndReload();
        else console.log('Root okay');
    }, 2400);
};

export const checkVersion = async () => {
    console.log('Checking version...');

    checkRoot();
    checkMeta();
};
