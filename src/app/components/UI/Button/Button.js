import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import { CircularProgress } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        fontWeight: 700,
        lineHeight: 1,
        borderRadius: 0,
        letterSpacing: '0.06em',
        fontSize: 13,
        textTransform: 'none',
        alignSelf: 'center',
        padding: '10px 20px',
    },
    sizeLarge: {
        minWidth: 153,
        padding: '30px 50px',
    },
    sizeSmall: {
        padding: '5px 10px',
    },
    outlined: {
        borderWidth: 2,
    },
    contained: {
        color: '#fff',
    },
}), { name: 'ZIMTButton' });

export default function ZIMTButton(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { children, loading, disabled, ...other } = props;

    return (
        <Button
            variant='contained'
            color='primary'
            size='medium'
            classes={classes}
            disabled={disabled || loading}
            {...other}
        >
            {children}

            {loading && (
                <CircularProgress
                    style={{ marginLeft: 12, color: theme.palette.text.disabled }}
                    size={20}
                />
            )}
        </Button>
    );
}

