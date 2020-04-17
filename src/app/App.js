import React, { useReducer, useEffect, useContext } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { StylesContext } from '@material-ui/styles/StylesProvider';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Router } from 'react-router-dom';

import { reducer } from './store';
import { normalize, uiReset } from '../styles';
import Routes from './Routes';
import { history, theme as ThemeObject } from './utils';

export const theme = createMuiTheme(ThemeObject);

const useStyles = makeStyles(theme => ({
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
    const [state, _dispatch] = useReducer(reducer, theme);
    const classes = useStyles();
    const stylesContext = useContext(StylesContext);

    useEffect(() => {
        init();
        // eslint-disable-next-line
    }, []);

    const init = () => {
        stylesContext.jss.createStyleSheet(normalize).attach();
        stylesContext.jss.createStyleSheet(uiReset(theme)).attach();

        dispatch = _dispatch;
    };

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
