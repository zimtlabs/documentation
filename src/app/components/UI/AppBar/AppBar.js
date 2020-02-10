import React from 'react';
import { AppBar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTAppBar' });

export default function ZIMTAppBar(props) {
    const classes = useStyles();

    return (
        <AppBar
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

