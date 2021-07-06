import React from 'react';
import { FormHelperText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 11,
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

