/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
export const FONT_FAMILY = {
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

export const PALETTE = {
    primary: '#ab9363',
    secondary: '#6ded5a',
    error: '#d63815',
    warning: '#ffbdD2f',
    success: '#15D675',
    info: '#2fbfff',
};

export const BREAKPOINTS = {
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

export const colors = {
    background: {
        'primary': {
            light: '#fff',
            dark: '#000',
        },
        'secondary': {
            light: '#fafafa',
            dark: '#1a1a1a',
        },
    },
};

export const ALLOWED_THEMES = ['light', 'dark', 'auto'];

export const DEFAULT_THEME = 'light';

export const GetTheme = (options = { theme: 'light' }) => {
    const { theme } = options;

    return {
        palette: {
            type: theme,
            primary: { main: PALETTE.primary },
            secondary: { main: PALETTE.secondary },
            error: { main: PALETTE.error },
            warning: { main: PALETTE.warning },
            info: { main: PALETTE.info },
            background: {
                'primary': colors.background['primary'][theme],
                'secondary': colors.background['secondary'][theme],
            },
        },
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

            h1: {
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 700,
                fontSize: 30,
                lineHeight: 1.25,
            },
            h2: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 300,
                fontSize: 22,
                lineHeight: 1.55,
            },
            h3: {
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 700,
                fontSize: 26,
                lineHeight: 1.25,
            },
            h4: {
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 700,
                fontSize: 25,
                lineHeight: 1.25,
            },
            h5: {
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 700,
                fontSize: 24,
                lineHeight: 1.25,
            },
            h6: {
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 700,
                fontSize: 19,
                lineHeight: 1.3,
            },
            body1: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 400,
                fontSize: 13,
                lineHeight: 1.55,
            },
            body2: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.55,
            },
            caption: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 400,
                fontSize: 11,
                lineHeight: 1.05,
            },
            button: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: 1.15,
            },
            overline: {
                fontFamily: FONT_FAMILY.tertiary,
                fontWeight: 400,
                fontSize: 13,
                lineHeight: 1.3,
                letterSpacing: '0.1em',
                textTransform: "uppercase",
            },
            label: {
                fontFamily: FONT_FAMILY.secondary,
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.15,
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
                    fontSize: 13,
                },
            },
            MuiButton: {
                root: {
                    fontSize: 12,
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
};

export default GetTheme;
