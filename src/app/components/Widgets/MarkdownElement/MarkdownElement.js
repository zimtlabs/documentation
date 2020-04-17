import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import marked from 'marked/lib/marked';

import { Prism, AppElement, ApiElement } from '../../';
import { textToHash } from '../../../utils';

// Monkey patch to preserve non-breaking spaces
// https://github.com/chjj/marked/blob/6b0416d10910702f73da9cb6bb3d4c8dcb7dead7/lib/marked.js#L142-L150
marked.Lexer.prototype.lex = function lex(src) {
    src = src
        .replace(/\r\n|\r/g, '\n')
        .replace(/\t/g, '    ')
        .replace(/\u2424/g, '\n');

    return this.token(src, true);
};

const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
    // Small title. No need for an anchor.
    // It's reducing the risk of duplicated id and it's fewer elements in the DOM.
    if (level >= 4) {
        return `<h${level}>${text}</h${level}>`;
    }

    // eslint-disable-next-line no-underscore-dangle
    const hash = textToHash(text, window.__MARKED_UNIQUE__);

    return [
        `<h${level}>`,
        `<a class="anchor-link" id="${hash}"></a>`,
        text,
        `<a class="anchor-link-style" aria-hidden="true" aria-label="anchor" href="#${hash}">`,
        '<svg id="anchor-link-icon" viewBox="0 0 16 16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
        '</a>',
        `</h${level}>`,
    ].join('');
};

const externs = [
    'https://material.io/',
];

renderer.link = (href, title, text) => {
    let more = '';

    if (externs.some(domain => href.indexOf(domain) !== -1)) {
        more = ' target="_blank" rel="noopener nofollow"';
    }

    return `<a href="${href}"${more}>${text}</a>`;
};

const markedOptions = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight(code, language) {
        let prismLanguage;
        switch (language) {
            case 'ts':
                prismLanguage = Prism.languages.tsx;
                break;

            case 'js':
                prismLanguage = Prism.languages.jsx;
                break;

            case 'sh':
                prismLanguage = Prism.languages.bash;
                break;

            case 'diff':
                prismLanguage = { ...Prism.languages.diff };
                // original `/^[-<].*$/m` matches lines starting with `<` which matches
                // <SomeComponent />
                // we will only use `-` as the deleted marker
                prismLanguage.deleted = /^[-].*$/m;
                break;

            default:
                prismLanguage = Prism.languages[language];
                break;
        }

        if (!prismLanguage) {
            if (language) {
                throw new Error(`unsupported language: "${language}", "${code}"`);
            } else {
                prismLanguage = Prism.languages.jsx;
            }
        }

        return Prism.highlight(code, prismLanguage);
    },
    renderer,
};

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: theme.typography.fontFamily,
        fontSize: 16,
        color: theme.palette.text.primary,
        wordBreak: 'break-word',

        '& > *': {
            position: 'relative',
        },

        '& .anchor-link': {
            marginTop: -96, // Offset for the anchor.
            position: 'absolute',
        },
        '& pre': {
            margin: '24px 0',
            padding: '12px 18px',
            backgroundColor: '#272c34',
            direction: 'ltr',
            borderRadius: theme.shape.borderRadius,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
        },
        '& code': {
            display: 'inline-block',
            fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
            WebkitFontSmoothing: 'subpixel-antialiased',
            padding: '2px 6px',
            color: theme.palette.text.primary,
            backgroundColor:
                theme.palette.type === 'dark' ? 'rgba(255,229,100,0.2)' : 'rgba(255,229,100,0.1)',
            fontSize: 14,
            borderRadius: 2,
        },
        '& code[class*="language-"]': {
            backgroundColor: '#272c34',
            color: '#fff',
        },
        '& p code, & ul code, & pre code': {
            fontSize: 14,
        },
        '& .token.operator': {
            background: 'transparent',
        },
        '& h1': {
            ...theme.typography.h3,
            fontSize: 40,
            margin: '16px 0',
        },
        '& .description': {
            ...theme.typography.h5,
            margin: '0 0 40px',
        },
        '& h2': {
            ...theme.typography.h4,
            fontSize: 30,
            margin: '40px 0 16px',
        },
        '& h3': {
            ...theme.typography.h5,
            margin: '40px 0 16px',
        },
        '& h4': {
            ...theme.typography.h6,
            margin: '32px 0 16px',
        },
        '& h5': {
            ...theme.typography.subtitle2,
            margin: '32px 0 16px',
        },
        '& p, & ul, & ol': {
            lineHeight: 1.6,
            marginTop: 0,
            marginBottom: '16px',
        },
        '& ul': {
            paddingLeft: 30,
        },
        '& h1, & h2, & h3, & h4': {
            '& code': {
                fontSize: 'inherit',
                lineHeight: 'inherit',
                // Remove scroll on small screens.
                wordBreak: 'break-all',
            },
            '& .anchor-link-style': {
                // To prevent the link to get the focus.
                display: 'none',
            },
            '&:hover .anchor-link-style': {
                display: 'inline-block',
                padding: '0 8px',
                color: theme.palette.text.secondary,
                '&:hover': {
                    color: theme.palette.text.primary,
                },
                '& svg': {
                    width: '0.9em',
                    height: '0.9em',
                    fill: 'currentColor',
                },
            },
        },
        '& table': {
            // Trade display table for scroll overflow
            display: 'block',
            wordBreak: 'normal',
            width: '100%',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
            borderCollapse: 'collapse',
            marginBottom: '16px',
            borderSpacing: 0,
            overflow: 'hidden',
            '& .prop-name': {
                fontSize: 13,
                fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
            },
            '& .required': {
                color: theme.palette.type === 'light' ? '#006500' : '#a5ffa5',
            },
            '& .prop-type': {
                fontSize: 13,
                fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
                color: theme.palette.type === 'light' ? '#932981' : '#ffb6ec',
            },
            '& .prop-default': {
                fontSize: 13,
                fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
                borderBottom: `1px dotted ${theme.palette.text.hint}`,
            },
        },
        '& td': {
            ...theme.typography.body2,
            borderBottom: `1px solid ${theme.palette.divider}`,
            padding: 16,
            color: theme.palette.text.primary,
        },
        '& td code': {
            fontSize: 13,
            lineHeight: 1.6,
        },
        '& th': {
            fontSize: 14,
            lineHeight: theme.typography.pxToRem(24),
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.palette.text.primary,
            whiteSpace: 'pre',
            borderBottom: `1px solid ${theme.palette.divider}`,
            padding: 16,
        },
        '& blockquote': {
            borderLeft: '5px solid #ffe564',
            backgroundColor: 'rgba(255,229,100,0.2)',
            padding: '4px 24px',
            margin: '24px 0',
            '& p': {
                marginTop: '16px',
            },
        },
        '& a, & a code': {
            // Style taken from the Link component
            color: theme.palette.primary.main,
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        '& img': {
            maxWidth: '100%',
        },
        '& hr': {
            height: 1,
            margin: theme.spacing(6, 0),
            border: 'none',
            flexShrink: 0,
            backgroundColor: theme.palette.divider,
        },
        '& ol': {
            'list-style-position': 'inside',

            '& li': {
                marginBottom: 9,

                '&:last-of-type': {
                    marginBottom: 0,
                },
            },
        },
    },
    padding: {
        padding: '0px 44px',
    },
}), { name: 'MarkdownElement' });

export default function MarkdownElement(props) {
    const classes = useStyles(props);
    const { className, text, ...other } = props;

    let Element = null;

    if (text.indexOf(`"type":`) > -1) {
        // Demo
        if (text.indexOf("app") > -1) {
            // App demo
            Element = (
                <AppElement
                    {...props}
                    className={classes.padding}
                />
            );

        } else {
            // API demo
            Element = (
                <ApiElement
                    {...props}
                />
            );
        }
    } else {
        Element = (
            <div
                className={clsx(classes.root, 'markdown-body', className, classes.padding)}
                dangerouslySetInnerHTML={{ __html: marked(text, markedOptions) }}
                {...other}
            />
        );
    }

    return Element;
}
