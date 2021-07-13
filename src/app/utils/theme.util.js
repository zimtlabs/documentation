/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
export const FONT_FAMILY = {
    primary: [
        'Lora',
        'Merriweather',
        'Georgia',
        "PT Serif",
        "Palatino Linotype",
        "Book Antiqua",
        'Palatino',
        'serif'
    ].join(','),
    secondary: [
        'Mukta',
        'Roboto',
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
        'Space Mono',
        'Roboto Mono',
        'monospace',
    ].join(','),
};

export const PALETTE = {
    primary: '#007AFF',
    secondary: '#5856D6',
    tertiary: '#AF52DE',
    error: '#FF3B30',
    warning: '#FF9500',
    success: '#34C759',
    info: '#5AC8FA',
    zimt: '#007AFF',
};

export const BREAKPOINTS = {
    values: {
        xs: 0,
        sm: 600,
        form: 768,
        md: 960,
        lg: 1280,
        xl: 1440,
        xxl: 1920
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

export const GetTheme = (options = { theme: 'light', primary: '', secondary: '', fontPrimary: '', fontSecondary: '' }) => {
    const { theme } = options;

    const FONT_PRIMARY = options.fontPrimary || FONT_FAMILY.primary;
    const FONT_SECONDARY = options.fontSecondary || FONT_FAMILY.secondary;

    const COLOR_PRIMARY = options.primary || PALETTE.primary;
    const COLOR_SECONDARY = options.secondary || PALETTE.secondary;

    return {
        palette: {
            type: theme,
            primary: { main: COLOR_PRIMARY },
            secondary: { main: COLOR_SECONDARY },
            error: { main: PALETTE.error },
            warning: { main: PALETTE.warning },
            info: { main: PALETTE.info },
            zimt: PALETTE.zimt,
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
            fontFamily: FONT_SECONDARY,
            fontSize: 14,
            htmlFontSize: 16,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,

            d1: {
                fontFamily: FONT_PRIMARY,
                fontWeight: 700,
                fontSize: 34,
                lineHeight: 1.25,

                [`@media only screen and (min-width: ${BREAKPOINTS.values.md}px)`]: {
                    fontSize: 40,
                },
            },
            h1: {
                fontFamily: FONT_PRIMARY,
                fontWeight: 400,
                fontSize: 31,
                lineHeight: 1.25,

                [`@media only screen and (max-width: ${BREAKPOINTS.values.md}px)`]: {
                    fontSize: [31, '!important'],
                },
            },
            h2: {
                fontFamily: FONT_PRIMARY,
                fontWeight: 400,
                fontSize: 27,
                lineHeight: 1.25,

                [`@media only screen and (max-width: ${BREAKPOINTS.values.md}px)`]: {
                    fontSize: [27, '!important'],
                },
            },
            h3: {
                fontFamily: FONT_PRIMARY,
                fontWeight: 700,
                fontSize: 23,
                lineHeight: 1.25,

                [`@media only screen and (max-width: ${BREAKPOINTS.values.md}px)`]: {
                    fontSize: [23, '!important'],
                },
            },
            h4: {
                fontFamily: FONT_PRIMARY,
                fontWeight: 700,
                fontSize: 19,
                lineHeight: 1.25,

                [`@media only screen and (max-width: ${BREAKPOINTS.values.md}px)`]: {
                    fontSize: [19, '!important'],
                },
            },
            h5: {
                fontFamily: FONT_PRIMARY,
                fontWeight: 700,
                fontSize: 17,
                lineHeight: 1.25,

                [`@media only screen and (max-width: ${BREAKPOINTS.values.md}px)`]: {
                    fontSize: [17, '!important'],
                },
            },
            h6: {
                fontFamily: FONT_PRIMARY,
                fontWeight: 700,
                fontSize: 15,
                lineHeight: 1.3,

                [`@media only screen and (max-width: ${BREAKPOINTS.values.md}px)`]: {
                    fontSize: [15, '!important'],
                },
            },
            body1: {
                fontFamily: FONT_SECONDARY,
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.55,
            },
            body2: {
                fontFamily: FONT_SECONDARY,
                fontWeight: 400,
                fontSize: 13,
                lineHeight: 1.55,
            },
            caption: {
                fontFamily: FONT_SECONDARY,
                fontWeight: 400,
                fontSize: 11,
                lineHeight: 1.05,
            },
            button: {
                fontFamily: FONT_SECONDARY,
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
                fontFamily: FONT_SECONDARY,
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.15,
            },
            text_1: {
                fontFamily: FONT_SECONDARY,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: 1.25,
            },
            subtitle1: {
                fontFamily: FONT_SECONDARY,
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.15,
            },
            subtitle2: {
                fontFamily: FONT_SECONDARY,
                fontWeight: 600,
                fontSize: 15,
                lineHeight: 1.55,
            },
        },

        overrides: {
            MuiDivider: {
                root: {
                    backgroundColor: 'rgb(0 0 0 / 5%)',
                },
            },
            MuiInputBase: {
                root: {
                    width: '100%',
                },
            },
            MuiFilledInput: {
                inputAdornedEnd: {
                    paddingRight: 12,
                    marginRight: 12,
                },
            },
            MuiSkeleton: {
                root: {
                    marginBottom: 24,
                    borderRadius: 4,
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
            MuiTableSortLabel: {
                root: {
                    whiteSpace: 'nowrap',
                },
            },
            MuiTableCell: {
                head: {
                    whiteSpace: 'nowrap',
                },
                body: {
                    whiteSpace: 'nowrap',
                    maxWidth: 240,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
            },
            MuiPaper: {
                elevation1: {
                    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.08), 0px 2px 1px -1px rgba(0,0,0,0.05)',
                },
            },
            MuiPickersToolbar: {
                toolbar: {
                    '& button': {
                        color: '#fff',
                    },
                },
            },
            MuiPickersToolbarText: {
                toolbarTxt: {
                    color: '#fff',
                },
            },
            MuiPickersCalendarHeader: {
                switchHeader: {
                    color: '#fff',
                },
            },
            MuiPickersClockNumber: {
                clockNumberSelected: {
                    color: '#fff',
                },
            },
            MuiPickersDay: {
                daySelected: {
                    color: '#fff',
                },
            },
            MuiPickerDTTabs: {
                tabs: {
                    '& .MuiButtonBase-root': {
                        color: '#fff',
                    },
                },
            },
            MuiPickersModal: {
                withAdditionalAction: {
                    '& button': {
                        fontSize: 12,
                        textTransform: 'none',
                    },
                },
            },
            MuiCssBaseline: {
                '@global': {
                    html: {
                        '-webkit-text-size-adjust': '100% !important',
                    },

                    '*': {
                        margin: 0,
                        padding: 0,
                        border: 0,
                        outline: 'none',
                        fontSize: '100%',
                        background: 'transparent',
                        boxSizing: 'border-box',
                        touchAction: 'manipulation',

                        '&[contenteditable]': {
                            userSelect: 'text',
                        },
                    },

                    body: {
                        fontSize: 14,
                        fontFamily: FONT_SECONDARY,
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        position: 'relative',
                        overflowX: 'hidden',
                        backgroundColor: theme !== 'light' ? '#000' : '#fff',
                    },

                    'img, embed, object, video': {
                        maxWidth: '100%',
                        height: 'auto',
                    },

                    ul: {
                        padding: 0,
                        margin: 0,
                    },

                    a: {
                        textDecoration: 'none',
                        cursor: 'pointer',
                    },

                    form: {
                        width: '100%',
                    },

                    span: {
                        wordWrap: 'break-word',
                    },

                    hr: {
                        boxSizing: 'content-box',
                        height: '1px',
                        overflow: 'visible',
                        background: '#D8D8D8',
                        width: '100%',
                        margin: '25px 0',
                    },

                    code: {
                        '& span': {
                            whiteSpace: 'pre-wrap',
                        },
                    },

                    ':focus': {
                        outline: 'none',
                    },
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
                action: {
                    flex: '0 0 auto',
                    alignSelf: 'center',
                },
                submit: {
                    backgroundColor: '#fff',
                    color: '#333',
                    marginTop: 16,
                    justifySelf: 'center',
                    alignSelf: 'center',
                },
            },
            body: {
                width: '100%',
                maxWidth: 1280,
                margin: '0 auto',
            },
            row: {
                position: 'relative',
                display: 'flex',
            },
            root: {
                width: '100%',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 91,

                [`@media only screen and (min-width: ${BREAKPOINTS.values.lg + 80}px)`]: {
                    paddingTop: 121,
                },
            },
            main: {
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                width: '100%',
                maxWidth: BREAKPOINTS.values.xl,
                margin: '0 auto',
            },
            dialog: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                padding: '70px 40px',
                zIndex: 1,

                [`@media only screen and (min-width: ${BREAKPOINTS.values.md}px)`]: {
                    padding: '95px 115px',
                },
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
