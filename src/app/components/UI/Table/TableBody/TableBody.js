import React from 'react';
import { TableBody, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTTableBody' });

export default function ZIMTTableBody(props) {
    const classes = useStyles();

    return (
        <TableBody
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

