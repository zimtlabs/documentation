import React from 'react';
import { InputAdornment, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTInputAdornment' });

export default function ZIMTInputAdornment(props) {
    const classes = useStyles();

    return (
        <InputAdornment
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

