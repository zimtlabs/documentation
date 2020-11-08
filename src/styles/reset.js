/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import { FONT_FAMILY } from '../app/utils';

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
            fontFamily: FONT_FAMILY.secondary,
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
            padding: 0,
            margin: 0,
        },

        a: {
            textDecoration: 'none',
            cursor: 'pointer',
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

        ':focus': {
            outline: 'none',
        },
    }
});

export default uiReset;
