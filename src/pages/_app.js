import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NextNprogress from 'nextjs-progressbar';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';

import { theme as ThemeObject } from '../app/utils';
import { Middleware, App } from '../app/components';

export const theme = createMuiTheme(ThemeObject);

export default function _App(props) {
    const { Component, pageProps } = props;

    return (
        <ThemeProvider theme={theme}>
            <Middleware>
                <App>
                    <NextNprogress
                        color={theme.palette.secondary.main}
                        startPosition={0.04}
                        stopDelayMs={50}
                        height={2}
                    />
                    <Component {...pageProps} />
                </App>
            </Middleware>
        </ThemeProvider>
    );
}
