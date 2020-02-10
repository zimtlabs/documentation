import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTPaper' });

export default function ZIMTPaper(props) {
    const classes = useStyles();

    return (
        <Paper
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

