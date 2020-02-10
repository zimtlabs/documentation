import React from 'react';
import { Tabs, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    },
}), { name: 'ZIMTTabs' });

export default function ZIMTTabs(props) {
    const classes = useStyles();

    return (
        <Tabs
            {...props}
            variant={props.variant || 'scrollable'}
            indicatorColor={props.indicatorColor || 'primary'}
            classes={{
                root: classes.root,
            }}
        />
    );
}

