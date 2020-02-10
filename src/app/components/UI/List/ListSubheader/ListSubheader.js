import React from 'react';
import { ListSubheader, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTListSubheader' });

export default function ZIMTListSubheader(props) {
    const classes = useStyles();

    return (
        <ListSubheader
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

