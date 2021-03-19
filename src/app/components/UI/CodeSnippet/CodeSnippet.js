import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { Prism } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        overflowX: 'auto',
        width: '100%',

        '& .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
            background: 'none',
        },
    },
}), { name: 'ZIMTCodeSnippet' });

export default function ZIMTCodeSnippet(props) {
    const classes = useStyles();

    const html = Prism.highlight(props.code, Prism.languages[props.language], props.language);

    return (
        <pre
            className={clsx(classes.root, `language-${props.language}`, props.className)}
        >
            <code
                className={clsx(`language-${props.language}`)}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </pre>
    );
}

