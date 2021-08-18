import React from 'react';
import { FormLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 15,
        margin: '0 0 16px',
        textTransform: 'capitalize',
        color: theme.palette.text.primary,
        fontWeight: props => props.fontWeight || 600,
    },
}), { name: 'ZIMTFormLabel' });

export default function ZIMTFormLabel(props) {
    const classes = useStyles(props);

    return (
        <FormLabel
            classes={{
                root: classes.root,
            }}
            component='h6'
            {...props}
        />
    );
}

