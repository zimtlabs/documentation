import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import { ReactComponent as IconLogo } from '../../../../assets/svg/logo.svg';

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
            <IconLogo
                className={classes.logo}
            />
        </div>
    );
}
