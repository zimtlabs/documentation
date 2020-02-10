import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '0.91rem',

        '& input': {
            '&:-webkit-autofill': {
                '-webkit-box-shadow': `0 0 0 100px ${theme.palette.type === 'dark' ? theme.palette.primary.dark : '#e3f2fd'} inset`,
                '-webkit-text-fill-color': '#fff',
            },
        },
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

