import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 0,
        transform: 'none',
    },
}), { name: 'ZIMTSkeleton' });

export default function ZIMTSkeleton(props) {
    const classes = useStyles();

    return (
        <Skeleton
            classes={{
                root: classes.root,
            }}
            animation='wave'
            {...props}
        />
    );
}

