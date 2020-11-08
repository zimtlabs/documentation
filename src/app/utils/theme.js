/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
const FONT_FAMILY = {
    primary: [
        'Zilla Slab',
        'Merriweather',
        'Lora',
        'Georgia',
        "PT Serif",
        "Palatino Linotype",
        "Book Antiqua",
        'Palatino',
        'serif'
    ].join(','),
    secondary: [
        'Montserrat',
        'Helvetica',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Arial',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        'sans-serif',
    ].join(','),
    tertiary: [
        'Roboto Mono',
        'Montserrat',
        'Helvetica',
        '"Helvetica Neue"',
        '-apple-system',
        'Arial',
        'sans-serif',
    ].join(','),
};

const PALETTE = {
    primary: {
        main: '#AB9363',
    },
    secondary: {
        main: '#6ded5a',
    },
    error: {
        main: '#D63815',
    },
    warning: {
        main: '#FFBD2F',
    },
    success: {
        main: '#15D675',
    },
    info: {
        main: '#2FBFFF',
    },
    text: {
        primary: '#191919',
        secondary: '#898989',
        disabled: '#D8D8D8',
        hint: '#D8D8D8'
    },
    background: {
        paper: '#ffffff',
        default: '#ffffff',
        secondary: '#F5F5F5',
    },
    zimt: {
        primary: '#ab9363',
    },
};

const BREAKPOINTS = {
    values: {
        xs: 0,
        sm: 600,
        form: 768,
        md: 960,
        lg: 1280,
        lg2: 1440,
        xl: 1920
    },
};

export default {
    palette: PALETTE,
    shape: {
        borderRadius: 10,
    },
    breakpoints: BREAKPOINTS,
    typography: {
        fontFamily: FONT_FAMILY.secondary,
        fontSize: 13,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        color: PALETTE.text.primary,
        h1: {
            fontFamily: FONT_FAMILY.primary,
            fontWeight: 700,
            fontSize: 30,
            lineHeight: 1.25,
            color: PALETTE.text.primary,
        },
        h2: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 300,
            fontSize: 22,
            lineHeight: 1.55,
            color: PALETTE.text.primary,
        },
        h3: {
            fontFamily: FONT_FAMILY.primary,
            fontWeight: 700,
            fontSize: 26,
            lineHeight: 1.25,
            color: PALETTE.text.primary,
        },
        h4: {
            fontFamily: FONT_FAMILY.primary,
            fontWeight: 700,
            fontSize: 25,
            lineHeight: 1.25,
            color: PALETTE.text.primary,
        },
        h5: {
            fontFamily: FONT_FAMILY.primary,
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 1.25,
            color: PALETTE.text.primary,
        },
        h6: {
            fontFamily: FONT_FAMILY.primary,
            fontWeight: 700,
            fontSize: 19,
            lineHeight: 1.3,
            color: PALETTE.text.primary,
        },
        body1: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 400,
            fontSize: 13,
            lineHeight: 1.55,
            color: PALETTE.text.primary,
        },
        body2: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.55,
            color: PALETTE.text.secondary,
        },
        caption: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 400,
            fontSize: 11,
            lineHeight: 1.05,
            color: PALETTE.text.primary,
        },
        button: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 600,
            fontSize: 16,
            lineHeight: 1.15,
            color: PALETTE.text.primary,
        },
        overline: {
            fontFamily: FONT_FAMILY.tertiary,
            fontWeight: 400,
            fontSize: 13,
            lineHeight: 1.3,
            letterSpacing: '0.1em',
            textTransform: "uppercase",
            color: PALETTE.text.secondary,
        },
        label: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.15,
            color: PALETTE.text.secondary,
        },
        text_1: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 600,
            fontSize: 14,
            lineHeight: 1.25,
        },

        // Label
        subtitle1: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.15,
            color: PALETTE.text.secondary,
        },
        // Data
        subtitle2: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 600,
            fontSize: 15,
            lineHeight: 1.55,
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
            textAlign: 'center',
            boxShadow: 'none',
        },
        button: {
            submit: {
                marginTop: 24,
                alignSelf: 'center',
                color: '#000',
                background: '#fff',
            },
        },
        body: {
            width: '100%',
            maxWidth: BREAKPOINTS.values.lg2,
            margin: '0 auto',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            paddingTop: 105,
        },
        main: {
            flex: '1 1 auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
    },
    CONST: {
        side_padding: 40,
        sidebar: {
            width: (240 + 70),
        },
    },
};
