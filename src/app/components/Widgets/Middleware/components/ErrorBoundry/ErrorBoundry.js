/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React from 'react';
import * as Sentry from '@sentry/browser';

export default class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false, eventId: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('App error: ', error.name, error.message, error);

        Sentry.withScope(scope => {
            scope.setExtras(errorInfo);
            const eventId = Sentry.captureException(error);
            this.setState({ eventId });
        });
    }

    render() {
        if (this.state.hasError) return <></>;
        return this.props.children;
    }
}
