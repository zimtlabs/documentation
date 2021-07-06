import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

import { rgbToRGBA } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '0.91rem',
        background: theme.palette.background.primary,
        margin: 0,
    },
    filled: {
        borderRadius: 0,
        border: `1px solid ${rgbToRGBA(theme.palette.text.primary, 14)}`,
        background: theme.palette.background.primary,

        '&$focused': {
            background: 'none',
            color: theme.palette.text.primary,
        },

        '&:hover': {
            background: 'none',
        },
    },
    filledInputLabel: {
        '&$filledInputLabelFocused': {
            color: theme.palette.text.secondary,
        },
    },
    filledInputLabelFocused: {},
    focused: {
        color: theme.palette.text.secondary,
        background: 'none',
    },
}), { name: 'ZIMTTextField' });

export default function ZIMTTextField(props) {
    const classes = useStyles();

    const { endAdornment, ...other } = props;

    return (
        <TextField
            variant='outlined'
            color='primary'
            margin='normal'

            classes={{
                root: classes.root,
            }}

            InputLabelProps={{
                classes: {
                    filled: classes.filledInputLabel,
                    focused: classes.filledInputLabelFocused,
                },
            }}

            InputProps={{
                classes: {
                    root: classes[props.variant],
                    focused: classes.focused,
                },
                disableUnderline: ['filled'].indexOf(props.variant) > -1,
                endAdornment,
            }}

            {...other}
        />
    );
}

