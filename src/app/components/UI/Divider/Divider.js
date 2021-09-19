/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */

import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'ZIMTDivider' });

export default function ZIMTDivider(props) {
    const classes = useStyles();

    const { className, style, ...other } = props;

    return (
        <div
            className={className}
            style={style}
        >
            <Divider
                classes={{
                    root: classes.root,
                }}
                {...other}
            />
        </div>
    );
}

