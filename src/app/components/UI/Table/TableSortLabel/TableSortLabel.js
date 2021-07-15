import React from 'react';
import { TableSortLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTTableSortLabel' });

export default function ZIMTTableSortLabel(props) {
    const classes = useStyles();

    return (
        <TableSortLabel
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

