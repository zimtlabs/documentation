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
import Router from 'next/router';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';

import { ScreenLoader, Privacy, ErrorBoundary } from '../../';
import { appSetup, semverGreaterThan, GAInit, GAPageView } from '../../../utils';
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

    const track = () => {
        GAInit();

        Router.events.on('routeChangeComplete', GAPageView);

        GAPageView();
        // recordVisitor();
    };

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
        window.location.reload();
    };

    const init = () => {
        const headers = new Headers();

        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-store');

        fetch('/meta.json', { headers })
            .then(res => res.json())
            .then(async meta => {
                console.log('Meta.json: ', meta);

                // Wait for spam
                if (!meta) await wait(1500);

                const latestVersion = meta.version;
                const currentVersion = global.appVersion;
                const shouldForceRefresh = semverGreaterThan(latestVersion, currentVersion);

                console.log(`Meta.json new: ${latestVersion} current: ${currentVersion} should refresh: ${shouldForceRefresh}`);

                if (shouldForceRefresh) {
                    console.log(`We have a new version - ${latestVersion}. Should force refresh.`);
                    setIsLatestVersion(false);
                } else {
                    console.log(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);
                    setIsLatestVersion(true);
                }

                setLoading(false);
            });
    };

    const onPrivacySuccess = () => {
        // Only if visitor agreed to our privacy policy
        track();
    };

    if (!loading && !isLatestVersion) refreshCacheAndReload();

    return (
        <ErrorBoundary>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    site_name: 'ZIMT Documentation',
                }}
            />

            <CssBaseline />

            <Privacy
                onSuccess={onPrivacySuccess}
            />

            {(loading || !loaded || (!loading && !isLatestVersion)) && <ScreenLoader />}

            {props.children}
        </ErrorBoundary>
    );
}
