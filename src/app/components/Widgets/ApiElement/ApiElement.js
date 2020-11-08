import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { RedocStandalone } from 'redoc';
import prism from 'prismjs';

import { parseMarkdownFileReference, getPublicFileUrl } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: () => theme.palette.type === 'dark' ?
        ({
            width: '100%',

            '& h3': {
                marginTop: 15,
                marginBottom: 24,
            },

            '& .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
                background: 'none',
            },

            '& .menu-content': {
                background: theme.palette.background.secondary,

                '& div': {
                    background: theme.palette.background.secondary,
                },

                '& label': {
                    background: theme.palette.background.secondary,
                },

                '& label:hover': {
                    background: theme.palette.background.secondary,
                },

                '& label.active': {
                    background: '#272727',
                },
            },

            '& .redoc-wrap': {
                background: theme.palette.background.primary,

                '& h1, & h2, & h3, & h4, & h5, & h6': {
                    color: theme.palette.text.primary,
                },

                '& span, & p, & td, & tr, & button, & input': {
                    color: theme.palette.text.secondary,
                },

                '& tr': {
                    background: [theme.palette.background.primary, '!important'],

                    '& div': {
                        background: [theme.palette.background.primary, '!important'],
                    },
                },

                '& table td, & table th': {
                    borderColor: '#333',
                },

                '& button:focus': {
                    outline: 'none',
                },
            },
        }) :
        ({
            width: '100%',

            '& h3': {
                marginTop: 15,
                marginBottom: 24,
            },

            '& .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
                background: 'none',
            },

            '& .redoc-wrap': {
                '& button:focus': {
                    outline: 'none',
                },
            },
        }),
}), { name: 'ApiElement' });

export default function ApiElement(props) {
    const classes = useStyles(props);
    const theme = useTheme();

    const { text, titles } = props;

    const options = parseMarkdownFileReference(text);
    const url = getPublicFileUrl(titles.folders, titles.file, options.main);

    return (
        <div
            className={classes.root}
        >
            <RedocStandalone
                specUrl={url}
                options={{
                    nativeScrollbars: true,
                    theme: { colors: { primary: { main: theme.palette.primary.main } } },
                    hideDownloadButton: true,
                }}
                onLoaded={error => {
                    if (!error) prism.highlightAll();
                }}
            />
        </div>
    );
}
