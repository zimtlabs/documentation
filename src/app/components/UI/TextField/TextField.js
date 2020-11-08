import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '0.91rem',
        background: '#fff',
        margin: 0,
    },
}), { name: 'ZIMTTextField' });

export default function ZIMTTextField(props) {
    const classes = useStyles();

    return (
        <TextField
            variant='outlined'
            color='primary'
            margin='normal'
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

