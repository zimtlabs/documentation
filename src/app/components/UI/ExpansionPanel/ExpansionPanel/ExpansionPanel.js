import React from 'react';
import { ExpansionPanel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'ZIMTExpansionPanel' });

export default function ZIMTExpansionPanel(props) {
    const classes = useStyles();

    return (
        <ExpansionPanel
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

