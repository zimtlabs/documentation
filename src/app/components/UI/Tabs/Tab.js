import React from 'react';
import { Tab, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        ...theme.typography.h2,
        textTransform: 'none',
        transition: 'all .1s',
        minHeight: 'initial',
        minWidth: 'initial',
        position: 'relative',
        color: '#AB9363',
        fontWeight: 600,
        padding: '0 0 10px',
        marginRight: 30,

        '&:after': {
            content: "''",
            display: 'inline-block',
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 2,
            width: '100%',
            backgroundColor: '#AB9363',
            transition: 'transform .3s',
            transform: 'scaleX(0.2)',
            transformOrigin: 'center',
        },

        '&:last-of-type': {
            marginRight: 0,
            borderRight: `${theme.CONST.side_padding}px solid transparent`,
        },
    },
    selected: {
        ...theme.typography.h1,
        color: '#AB9363',

        '&:after': {
            transform: 'scaleX(1)',
        },
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
                selected: classes.selected,
            }}
        />
    );
}

