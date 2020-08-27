/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';

import { ErrorBoundry } from './components';
import pkg from '../../../../../package.json';

global.appVersion = pkg.version;

// version from response - first param, local version second param
const semverGreaterThan = (versionA, versionB) => {
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

export default function Middleware(props) {
    const [loading, setLoading] = useState(true);
    const [isLatestVersion, setIsLatestVersion] = useState(false);

    const refreshCacheAndReload = () => {
        console.log('Clearing cache and hard reloading...');

        if (caches) {
            // Service worker cache should be cleared with caches.delete()
            caches.keys().then(function (names) {
                for (let name of names) caches.delete(name);
            });
        }

        // Delete browser cache and hard reload
        window.location.reload(true);
    };

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        const headers = new Headers();
        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-cache');

        fetch('/meta.json', { headers })
            .then(res => res.json())
            .then(meta => {
                const latestVersion = meta.version;
                const currentVersion = global.appVersion;

                const shouldForceRefresh = semverGreaterThan(latestVersion, currentVersion);
                if (shouldForceRefresh) {
                    console.log(`We have a new version - ${latestVersion}. Should force refresh.`);

                    setIsLatestVersion(false);
                    setLoading(false);
                } else {
                    console.log(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);

                    setIsLatestVersion(true);
                    setLoading(false);
                }
            });
    };

    return (
        <ErrorBoundry>
            <CssBaseline />
            {props.children({ loading, isLatestVersion, refreshCacheAndReload })}
        </ErrorBoundry>
    );
}
