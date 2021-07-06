import React from 'react';
import { TableCell, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTTableCell' });

export default function ZIMTTableCell(props) {
    const classes = useStyles();

    return (
        <TableCell
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

