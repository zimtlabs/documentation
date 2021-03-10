/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React from 'react';
import * as Sentry from '@sentry/browser';

import { Typography, Link } from '../..';

export default class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        console.log('App error: ', error.name, error.message, error);

        this.setState({
            error: error,
            errorInfo: errorInfo
        })

        Sentry.withScope(scope => {
            scope.setExtras(errorInfo);

            Sentry.captureException(error);
        });
    }

    refresh() {
        window.location.reload();
    }

    render() {
        let Content = <></>;

        if (this.state.errorInfo) {
            if (this.props.fallback) Content = (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 8,
                    }}
                >
                    <Typography
                        variant='body1'
                        style={{
                            textAlign: 'center',
                            marginBottom: 7,
                        }}
                    >
                        Oops, something went wrong, <Link onClick={this.refresh}>refresh</Link>.
                    </Typography>
                </div>
            );
        }
        else Content = this.props.children;

        return Content;
    }
}
