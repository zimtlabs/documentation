import React from 'react';
import { ListItemAvatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTListItemAvatar' });

export default function ZIMTListItemAvatar(props) {
    const classes = useStyles();

    return (
        <ListItemAvatar
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

