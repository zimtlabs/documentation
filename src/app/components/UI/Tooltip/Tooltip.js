import React from 'react';
import { Tooltip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.primary,
        borderRadius: 0,
    },
}), { name: 'ZIMTTooltip' });

export default function ZIMTTooltip(props) {
    const classes = useStyles();

    return (
        <Tooltip
            classes={{
                tooltip: classes.tooltip,
            }}
            {...props}
        />
    );
}

