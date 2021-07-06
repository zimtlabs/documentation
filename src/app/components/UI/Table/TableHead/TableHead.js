import React from 'react';
import { TableHead, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTTableHead' });

export default function ZIMTTableHead(props) {
    const classes = useStyles();

    return (
        <TableHead
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

