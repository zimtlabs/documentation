import React from 'react';
import { Breadcrumbs, makeStyles } from '@material-ui/core';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { rgbToRGBA } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        background: rgbToRGBA(theme.palette.background.primary, 70),
        width: '100%',
    },
    ol: {
        padding: '16px 24px',
        flexWrap: 'nowrap',
        overflowY: 'auto',
    },
    li: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: 140,

        '& > a': {
            color: theme.palette.text.primary,
        },

        [`@media only screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
            maxWidth: 'initial',
        },
    },
}), { name: 'ZIMTBreadcrumbs' });

export default function ZIMTBreadcrumbs(props) {
    const classes = useStyles();

    return (
        <Breadcrumbs
            separator={(
                <NavigateNextIcon
                    fontSize='small'
                    style={{
                        fontSize: 11,
                    }}
                />
            )}

            classes={{
                root: classes.root,
                ol: classes.ol,
                li: classes.li,
            }}

            {...props}
        />
    );
}

