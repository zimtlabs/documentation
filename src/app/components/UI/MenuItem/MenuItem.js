import React from 'react';
import { MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTMenuItem' });

export default function ZIMTMenuItem(props) {
    const classes = useStyles();

    return (
        <MenuItem
            dense={true}
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

