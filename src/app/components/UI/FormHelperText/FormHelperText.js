import React from 'react';
import { FormHelperText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTFormHelperText' });

export default function ZIMTFormHelperText(props) {
    const classes = useStyles();

    return (
        <FormHelperText
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

