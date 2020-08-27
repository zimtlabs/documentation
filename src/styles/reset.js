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
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
};

const uiReset = theme => ({
    '@global': {
        '*': {
            margin: 0,
            padding: 0,
            border: 0,
            outline: 'none',
            fontSize: '100%',
            background: 'transparent',
            boxSizing: 'border-box',
            touchAction: 'manipulation',
        },

        body: {
            fontSize: '13px',
            color: '#000',
            fontFamily: FONT_FAMILY.secondary,
            backgroundColor: '#fff',
            fontWeight: 'normal',
            fontStyle: 'normal',
            position: 'relative',
            overflowX: 'hidden',
        },

        'img, embed, object, video': {
            maxWidth: '100%',
            height: 'auto',
        },

        ul: {
            listStyleType: 'none',
            padding: 0,
            margin: 0,
        },

        p: {
            fontSize: '13px',
            lineHeight: 1.5,
            color: '#999',
            fontWeight: 400,
            margin: 0,
            wordWrap: 'break-word',
        },

        'p + p': {
            marginTop: '20px',
        },

        'h1, h2, h3, h4, h5, h6': {
            lineHeight: 1.17,
            color: '#000',
            fontWeight: 300,
            margin: 0,
            wordWrap: 'break-word',
        },

        'h4, h5, h6': {
            fontWeight: 500,
        },

        h1: {
            fontSize: '40px',
        },

        h2: {
            fontSize: '24px',
        },

        h3: {
            fontSize: '21px',
        },

        h4: {
            fontSize: '17px',
        },

        h5: {
            fontSize: '15px',
        },

        h6: {
            fontSize: '13px',
        },

        a: {
            textDecoration: 'none',
            cursor: 'pointer',
        },

        b: {
            fontWeight: 500,
        },

        span: {
            wordWrap: 'break-word',
        },

        hr: {
            boxSizing: 'content-box',
            height: '1px',
            overflow: 'visible',
            background: '#eee',
            width: '100%',
            margin: '25px 0',
        },

        ':focus': {
            outline: 'none',
        },
    }
});

export default uiReset;
