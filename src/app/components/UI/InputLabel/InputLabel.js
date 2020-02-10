import React from 'react';
import { InputLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTInputLabel' });

export default function ZIMTInputLabel(props) {
    const classes = useStyles();

    return (
        <InputLabel
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

