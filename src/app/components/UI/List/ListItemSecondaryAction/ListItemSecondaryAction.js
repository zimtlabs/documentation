import React from 'react';
import { ListItemSecondaryAction, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTListItemSecondaryAction' });

export default function ZIMTListItemSecondaryAction(props) {
    const classes = useStyles();

    return (
        <ListItemSecondaryAction
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

