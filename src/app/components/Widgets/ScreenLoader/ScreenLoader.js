/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    '@keyframes flicker': {
        '0%': { opacity: 1 },
        '50%': { opacity: 0.1 },
        '100%': { opacity: 1 },
    },
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        background: '#fff',
    },
    logo: {
        height: 45,
        width: 'auto',
        animation: '$flicker 1.54s infinite',
    },
}), { name: 'ScreenLoader' });

export default function ScreenLoader(props) {
    const classes = useStyles(props);

    return (
        <div className={clsx(classes.root)}>
            <img
                src='/assets/svg/logo.svg'
                alt='ZIMT logo'
                className={classes.logo}
            />
        </div>
    );
}
