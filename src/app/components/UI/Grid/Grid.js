/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTGrid' });

export default function ZIMTGrid(props) {
    const classes = useStyles();

    return (
        <Grid
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

