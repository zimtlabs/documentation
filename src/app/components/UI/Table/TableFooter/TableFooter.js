import React from 'react';
import { TableFooter, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTTableFooter' });

export default function ZIMTTableFooter(props) {
    const classes = useStyles();

    return (
        <TableFooter
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

