/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import * as Sentry from '@sentry/browser';
import { DefaultSeo } from 'next-seo';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';

import { ErrorBoundry } from './components';
import { ScreenLoader } from '../../';
import { appSetup, semverGreaterThan } from '../../../utils';
import Config from '../../../config';

import pkg from '../../../../../package.json';

global.appVersion = pkg.version;

export default function Middleware(props) {
    const [loading, setLoading] = useState(true);
    const [isLatestVersion, setIsLatestVersion] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if (isLatestVersion && !loaded) initApp();
    }, [isLatestVersion]);

    const initApp = async () => {
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
                }
                else {
                    console.log(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);
                    setIsLatestVersion(true);
                }

                setLoading(false);
            });
    };

    if (!loading && !isLatestVersion) refreshCacheAndReload();

    let content = <></>;
    if (loading || !loaded || (!loading && !isLatestVersion)) content = <ScreenLoader />;
    else content = props.children;

    return (
        <ErrorBoundry>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    site_name: 'ZIMT Documentation',
                }}
            />

            <CssBaseline />

            {content}
        </ErrorBoundry>
    );
}
