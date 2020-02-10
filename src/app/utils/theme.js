/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */

export default {
    palette: {
        primary: {
            main: '#304ffe',
        },
        secondary: {
            main: '#69f0ae',
        },
        error: {
            main: '#f44336',
        },
    },
    typography: {
        fontFamily: [
            'Rubik',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontSize: 12,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            form: 768,
            md: 960,
            lg: 1280,
            xl: 1920
        },
    },
    overrides: {
        MuiInputBase: {
            root: {
                fontSize: '0.85rem',
            },
        },
        MuiFormLabel: {
            root: {
                opacity: 1,
            },
        },
        MuiPaper: {
            elevation1: {
                boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.08), 0px 2px 1px -1px rgba(0,0,0,0.05)',
            },
        },
    },
    mixins: {
        error: {
            padding: 16,
            backgroundColor: '#fff',
            color: 'red',
            width: '100%',
            maxWidth: 450,
            margin: '25px auto 0',
            textAlign: 'center'
        },
        button: {
            submit: {
                marginTop: 24,
                alignSelf: 'center',
                color: '#000',
                background: '#fff',
            },
        },
    },
    CONSTANTS: {
        sidebar: {
            width: 240,
        },
    },
};
