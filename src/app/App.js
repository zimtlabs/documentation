import React, { useReducer, useEffect, useState } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Router } from 'react-router-dom';

import { reducer } from './store';
import Routes from './Routes';
import { history, theme as ThemeObject } from './utils';
import { ScreenLoader } from './components';
import { reset } from '../styles';

export const theme = createMuiTheme(ThemeObject);

const useStyles = makeStyles(theme => ({
    '@global': {
        ...reset(theme),
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',

        '& > *': {
            position: 'relative',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
        },
    },
}), { name: 'App' });

export let dispatch = {};

export default function App(props) {
    const [loaded, setLoaded] = useState(false);
    const [state, _dispatch] = useReducer(reducer, theme);
    const classes = useStyles();

    const { loading, isLatestVersion, refreshCacheAndReload } = props;

    useEffect(() => {
        init();
        // eslint-disable-next-line
    }, []);

    const init = () => {
        dispatch = _dispatch;

        setLoaded(true);
    };

    // Show some loader screen
    if (!loading && !isLatestVersion) refreshCacheAndReload();
    if (loading || !loaded || (!loading && !isLatestVersion)) return <ScreenLoader />;
    return (
        <ThemeProvider theme={state}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <div className={classes.root}>
                    <Router history={history}>
                        <Routes />
                    </Router>
                </div>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
}
