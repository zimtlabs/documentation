import React from 'react';
import { FormControlLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        userSelect: 'none',
    },
}), { name: 'ZIMTFormControlLabel' });

export default function ZIMTFormControlLabel(props) {
    const classes = useStyles();

    return (
        <FormControlLabel
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

