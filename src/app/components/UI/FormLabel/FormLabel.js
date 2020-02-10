import React from 'react';
import { FormLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '0.9rem',
        marginBottom: 12,
    },
}), { name: 'ZIMTFormLabel' });

export default function ZIMTFormLabel(props) {
    const classes = useStyles();

    return (
        <FormLabel
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

