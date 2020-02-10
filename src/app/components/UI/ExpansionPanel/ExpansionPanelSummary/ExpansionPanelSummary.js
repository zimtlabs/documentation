import React from 'react';
import { ExpansionPanelSummary, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        borderBottom: '1px solid #eee',
    },
}), { name: 'ZIMTExpansionPanelSummary' });

export default function ZIMTExpansionPanelSummary(props) {
    const classes = useStyles();

    return (
        <ExpansionPanelSummary
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

