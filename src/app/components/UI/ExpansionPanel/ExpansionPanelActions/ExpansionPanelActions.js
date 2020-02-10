import React from 'react';
import { ExpansionPanelActions, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTExpansionPanelActions' });

export default function ZIMTExpansionPanelActions(props) {
    const classes = useStyles();

    return (
        <ExpansionPanelActions
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

