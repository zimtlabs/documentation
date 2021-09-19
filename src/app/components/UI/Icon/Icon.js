import React from 'react';
import { Icon, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTIcon' });

export default function ZIMTIcon(props) {
    const classes = useStyles();

    return (
        <Icon
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

