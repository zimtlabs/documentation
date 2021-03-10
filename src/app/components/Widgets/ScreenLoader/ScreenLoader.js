/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import Logo from '../../../../../public/assets/svg/logo.svg';

import { Wrapper } from '../../';

const useStyles = makeStyles(theme => ({
    '@keyframes flicker': {
        '0%': { opacity: 1 },
        '50%': { opacity: 0.1 },
        '100%': { opacity: 1 },
    },
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        background: theme.palette.background.secondary,
        zIndex: 999999,
    },
    logo: {
        height: 45,
        width: 'auto',
        animation: '$flicker 1.54s infinite',
        fill: theme.palette.text.primary,
    },
}), { name: 'ScreenLoader' });

export default function ScreenLoader(props) {
    const classes = useStyles(props);

    return (
        <Wrapper>
            <div className={clsx(classes.root)}>
                <Logo
                    className={classes.logo}
                />
            </div>
        </Wrapper>
    );
}
