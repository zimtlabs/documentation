import React from 'react';
import { Checkbox, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTCheckbox' });

export default function ZIMTCheckbox(props) {
    const classes = useStyles();

    return (
        <Checkbox
            color='primary'
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

