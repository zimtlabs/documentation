import React from 'react';
import { ListItemIcon, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTListItemIcon' });

export default function ZIMTListItemIcon(props) {
    const classes = useStyles();

    return (
        <ListItemIcon
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

