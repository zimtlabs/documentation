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
        overflowX: 'auto',
    },
    li: {
        whiteSpace: 'nowrap',

        '& > a': {
            color: theme.palette.text.primary,
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

