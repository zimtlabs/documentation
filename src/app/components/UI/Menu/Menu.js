import React from 'react';
import { Menu, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.074)',
        minWidth: 154,
        borderRadius: 8,
    },
}), { name: 'ZIMTMenu' });

export default function ZIMTMenu(props) {
    const classes = useStyles();

    return (
        <Menu
            classes={{
                paper: classes.paper,
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            getContentAnchorEl={null}
            {...props}
        />
    );
}

