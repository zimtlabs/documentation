import React from 'react';
import { ExpansionPanelDetails, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexDirection: 'column',
        padding: 24,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
}), { name: 'ZIMTExpansionPanelDetails' });

export default function ZIMTExpansionPanelDetails(props) {
    const classes = useStyles();

    return (
        <ExpansionPanelDetails
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

