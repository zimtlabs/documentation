import React from 'react';
import { ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTListItem' });

export default function ZIMTListItem(props) {
    const classes = useStyles();

    return (
        <ListItem
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

