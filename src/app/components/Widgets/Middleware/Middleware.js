/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import * as Sentry from '@sentry/browser';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';

import { ScreenLoader, Privacy, ErrorBoundary } from '../../';
import { GAInit, GAPageView } from '../../../utils';
import Config from '../../../config';

export let setLoader;

export default function Middleware(props) {
    const [loaded, setLoaded] = useState();
    const [loading, setLoading] = useState();

    setLoader = setLoading;

    useEffect(() => {
        init();
    }, []);

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
    };

    const track = () => {
        GAInit();

        Router.events.on('routeChangeComplete', GAPageView);

        GAPageView();
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
