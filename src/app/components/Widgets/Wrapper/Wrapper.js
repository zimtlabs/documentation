import React from 'react';

import { ErrorBoundary } from '../../';

export default function Wrapper(props) {

    return (
        <ErrorBoundary {...props}>
            {props.children}
        </ErrorBoundary>
    );
}
