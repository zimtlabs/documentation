import React from 'react';
import { Drawer, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTDrawer' });

export default function ZIMTDrawer(props) {
    const classes = useStyles();

    return (
        <Drawer
            classes={{
                root: classes.root,
            }}
            ModalProps={{
                keepMounted: true,
            }}
            {...props}
        />
    );
}

