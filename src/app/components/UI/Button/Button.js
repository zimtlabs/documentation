import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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
        height: theme.spacing(4),
        whiteSpace: 'nowrap',
    },
    sizeLarge: {
        padding: '14px 34px',
        height: theme.spacing(5),
    },
    sizeSmall: {
        padding: '5px 10px',
        height: theme.spacing(3),
    },
    outlined: {
        borderWidth: '2px !important',
    },
    contained: {
        color: '#fff',
    },
}), { name: 'ZIMTButton' });

export default function ZIMTButton(props) {
    const classes = useStyles();
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
            {loading && (
                <MoreHorizIcon />
            )}

            {!loading && children}
        </Button>
    );
}

