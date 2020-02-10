import React from 'react';
import { Radio, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTRadio' });

export default function ZIMTRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            color='primary'
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

