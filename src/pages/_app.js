import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import NextNprogress from 'nextjs-progressbar';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';

import { GetTheme } from '../app/utils';
import { Middleware, App } from '../app/components';
import { StorageService } from '../app/services';

export default function _App(props) {
    const isDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');
    const [userTheme, setUserTheme] = useState();

    const { Component, pageProps } = props;

    useEffect(() => {
        StorageService.init(window.localStorage);

        const ut = StorageService.get('userTheme');
        if (ut) setUserTheme(ut);
        else StorageService.set('userTheme', 'auto');

        StorageService.userTheme.subscribe(value => setUserTheme(value));

        return () => {
            StorageService.userTheme.unsubscribe();
        };
    }, []);

    let theme_type = isDarkTheme ? 'dark' : 'light';
    if (userTheme && userTheme !== 'auto') theme_type = userTheme;

    const theme = React.useMemo(() => {
        const object = GetTheme({ theme: theme_type });

        return createMuiTheme(object);
    }, [theme_type]);

    return <>
        <Head>
            <link rel='apple-touch-icon' sizes='180x180' href={`/favicons/${theme_type}/apple-touch-icon.png`} />
            <link rel='icon' type='image/png' sizes='32x32' href={`/favicons/${theme_type}/favicon-32x32.png`} />
            <link rel='icon' type='image/png' sizes='16x16' href={`/favicons/${theme_type}/favicon-16x16.png`} />
            <link rel='manifest' href={`/favicons/${theme_type}/site.webmanifest`} />
            <link rel='mask-icon' href={`/favicons/${theme_type}/safari-pinned-tab.svg`} color='#ab9363' />
            <meta name='msapplication-TileColor' content='#ab9363' />
            <meta name='theme-color' content='#ab9363' />
        </Head>
        <ThemeProvider theme={theme}>
            <Middleware>
                <App>
                    <NextNprogress
                        color={theme.palette.secondary.main}
                        startPosition={0.04}
                        stopDelayMs={50}
                        height={2}
                        options={{
                            showSpinner: false,
                        }}
                    />
                    <Component {...pageProps} />
                </App>
            </Middleware>
        </ThemeProvider>
    </>;
}
