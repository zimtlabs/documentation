/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import * as Sentry from '@sentry/browser';

import { ErrorBoundry } from './components';
import { ScreenLoader } from '../../';
import { StorageService } from '../../../services';
import { appSetup } from '../../../utils';
import Config from '../../../config';

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
    const [loaded, setLoaded] = useState(false);

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

    useEffect(() => {
        if (isLatestVersion && !loaded) initApp();
    }, [isLatestVersion]);

    const initApp = async () => {// Init services
        StorageService.init(window.localStorage);

        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);

        const dev = Config.config.dev;

        // Inits in production
        if (!dev) {
            Sentry.init({ dsn: Config.config.services.logging, environment: 'production' });
        }

        // Service worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js', { scope: '/' })
                    .then(registration => console.log('SW registered: ', registration))
                    .catch(error => console.log('SW registration failed: ', error));
            });
        }

        await appSetup();

        setLoaded(true);
    };

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

    if (!loading && !isLatestVersion) refreshCacheAndReload();

    let content = <></>;
    if (loading || !loaded || (!loading && !isLatestVersion)) content = <ScreenLoader />;
    else content = props.children;

    return (
        <ErrorBoundry>
            <CssBaseline />
            {content}
        </ErrorBoundry>
    );
}
