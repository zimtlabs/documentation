import React from 'react';
import { Select, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTSelect' });

export default function ZIMTSelect(props) {
    const classes = useStyles();

    return (
        <Select
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

