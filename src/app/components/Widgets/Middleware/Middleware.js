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
import { GAInit, GAPageView, semverGreaterThan, getMeta } from '../../../utils';
import Config from '../../../config';

import pkg from '../../../../../package.json';

global.appVersion = pkg.version;

let interval;
export let setLoader;

export default function Middleware(props) {
    const [loaded, setLoaded] = useState();
    const [loading, setLoading] = useState();
    const [isLatestVersion, setIsLatestVersion] = useState();
    const meta = useRef();

    setLoader = setLoading;

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if (isLatestVersion === false) refreshCacheAndReload();
        // eslint-disable-next-line
    }, [isLatestVersion]);

    const init = async () => {
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
                navigator.serviceWorker.register('/service-worker.js')
                    .then(registration => console.log('Service worker registered: ', registration))
                    .catch(error => console.log('Service worker registration failed: ', error));
            });
        }

        setLoaded(true);

        // Check version + reload if is old app version
        checkVersion();
    };

    const track = () => {
        GAInit();

        Router.events.on('routeChangeComplete', GAPageView);

        GAPageView();
    };

    const refreshCacheAndReload = () => {
        console.log('Clearing cache and hard reloading...');

        if (caches) {
            caches.keys().then(names => {
                for (let name of names) caches.delete(name);
            });
        }

        // Delete browser cache + hard reload
        window.location.reload();
    };

    const checkVersion = async () => {
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

    const checkMeta = _meta => {
        if (!_meta || !window.navigator.onLine) setIsLatestVersion(true);
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
    };

    const onPrivacySuccess = () => {
        // Only if visitor agreed to our privacy policy
        track();
    };

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

            {(!loaded || loading) && <ScreenLoader />}

            {props.children}
        </ErrorBoundary>
    );
}
