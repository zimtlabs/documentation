import React from 'react';
import { Tab, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        textTransform: 'none',
        fontSize: '0.85rem',
        color: theme.palette.type !== 'dark' ? '#333' : null,
    },
}), { name: 'ZIMTTab' });

export default function ZIMTTab(props) {
    const classes = useStyles();

    return (
        <Tab
            {...props}
            disableRipple={props.hasOwnProperty('disableRipple') ? props.disableRipple : true}
            classes={{
                root: classes.root,
            }}
        />
    );
}

