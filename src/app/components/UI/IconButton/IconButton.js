import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTIconButton' });

export default function ZIMTIconButton(props) {
    const classes = useStyles();

    return (
        <IconButton
            color='primary'
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

