import React from 'react';
import { Drawer, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    paper: {
        paddingBottom: 44,
    },
}), { name: 'ZIMTDrawer' });

export default function ZIMTDrawer(props) {
    const classes = useStyles();

    return (
        <Drawer
            classes={{
                root: classes.root,
                paper: classes.paper,
            }}
            ModalProps={{
                keepMounted: true,
            }}
            {...props}
        />
    );
}

