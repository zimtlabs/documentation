import React from 'react';
import { FormControl, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTFormControl' });

export default function ZIMTFormControl(props) {
    const classes = useStyles();

    return (
        <FormControl
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

