/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React, { useState, useEffect, useRef } from 'react';
import { CssBaseline } from '@material-ui/core';
import * as Sentry from '@sentry/browser';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';

import { ScreenLoader, Privacy, ErrorBoundary } from '../../';
import { appSetup, GAInit, GAPageView, semverGreaterThan, getMeta } from '../../../utils';
import Config from '../../../config';

import pkg from '../../../../../package.json';

global.appVersion = pkg.version;

let interval;

export default function Middleware(props) {
    const [loading, setLoading] = useState(true);
    const [isLatestVersion, setIsLatestVersion] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const meta = useRef();

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if (isLatestVersion && !loaded) initApp();
    }, [isLatestVersion, loaded]);

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
                navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
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

    const checkMeta = _meta => {
        if (!_meta || !window.navigator.onLine) {
            setIsLatestVersion(true);
        }
        else {
            const latestVersion = _meta.version;
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

            clearInterval(interval);
        }

        setLoading(false);
    };

    const init = async () => {
        const _meta = await getMeta();

        meta.current = _meta;

        checkMeta(_meta);

        if (!_meta) {
            console.log('No meta: ', _meta);

            interval = setInterval(async () => {
                meta.current = await getMeta();

                checkMeta(meta.current);
            }, 1500);
        }
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
