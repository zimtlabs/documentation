import React from 'react';
import { List, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTList' });

export default function ZIMTList(props) {
    const classes = useStyles();

    return (
        <List
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

