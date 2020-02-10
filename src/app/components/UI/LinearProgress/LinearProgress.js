import React from 'react';
import { LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    },
}), { name: 'ZIMTLinearProgress' });

export default function ZIMTLinearProgress(props) {
    const classes = useStyles();

    return (
        <LinearProgress
            color='primary'
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

