import React from 'react';
import { ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTListItemText' });

export default function ZIMTListItemText(props) {
    const classes = useStyles();

    return (
        <ListItemText
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

