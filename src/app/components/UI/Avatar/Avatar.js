import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTAvatar' });

export default function ZIMTAvatar(props) {
    const classes = useStyles();

    return (
        <Avatar
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

