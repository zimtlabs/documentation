import React from 'react';
import { Dialog, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTDialog' });

export default function ZIMTDialog(props) {
    const classes = useStyles();

    return (
        <Dialog
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

