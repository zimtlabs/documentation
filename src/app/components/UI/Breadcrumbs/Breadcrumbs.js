import React from 'react';
import { Breadcrumbs, makeStyles } from '@material-ui/core';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
    root: {
        background: '#fff',
        width: '100%',
        borderBottom: '1px solid #eee',
    },
    ol: {
        padding: '7px 24px',
    },
}), { name: 'ZIMTBreadcrumbs' });

export default function ZIMTBreadcrumbs(props) {
    const classes = useStyles();

    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            classes={{
                root: classes.root,
                ol: classes.ol,
            }}
            {...props}
        />
    );
}

