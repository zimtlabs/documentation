import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTTypography' });

export default function ZIMTTypography(props) {
    const classes = useStyles();

    return (
        <Typography
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

