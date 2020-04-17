import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import { CircularProgress } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        fontWeight: 500,
        lineHeight: 1.75,
        borderRadius: props => props.naked ? 0 : 24,
        letterSpacing: '0.06em',
        fontSize: '13px',
        textTransform: 'none',
        alignSelf: props => props.align || 'center',
    },
    sizeLarge: {
        minWidth: 153,
        padding: '9px 24px',
    },
    sizeSmall: {
        padding: '4px 12px',
    },
}), { name: 'ZIMTButton' });

export default function ZIMTButton(props) {
    const classes = useStyles(props);
    const theme = useTheme();
    const { children, loading, disabled, naked, ...other } = props;

    const c = {};
    Object.keys(classes).forEach(key => c[key] = classes[key]);

    return (
        <Button
            variant='contained'
            color='primary'
            size='medium'
            classes={c}
            disabled={disabled || loading}
            {...other}
        >
            {children} {loading && <CircularProgress style={{ marginLeft: 12, color: theme.palette.text.disabled }} size={20} />}
        </Button>
    );
}
