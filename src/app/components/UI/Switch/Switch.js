import React from 'react';
import { Switch, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTSwitch' });

export default function ZIMTSwitch(props) {
    const classes = useStyles();

    return (
        <Switch
            color='primary'
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

