import React from 'react';
import { RadioGroup, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    },
}), { name: 'ZIMTRadioGroup' });

export default function ZIMTRadioGroup(props) {
    const classes = useStyles();

    return (
        <RadioGroup
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

