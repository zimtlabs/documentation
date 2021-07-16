import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { RedocStandalone } from 'redoc';
import prism from 'prismjs';
import clsx from 'clsx';

import { Wrapper } from '../../';
import { parseMarkdownFileReference, getPublicFileUrl, FONT_FAMILY, rgbToRGBA } from '../../../utils';
import { StorageService } from '../../../services';

const useStyles = makeStyles(theme => {
    return ({
        root: {
            width: '100%',

            '& *': {
                fontFamily: [FONT_FAMILY.secondary, '!important'],
                lineHeight: 1.75,
                fontSize: 15,
            },

            [`& [kind='field']`]: {
                fontSize: [14, '!important'],

                '& *': {
                    fontSize: [14, '!important'],
                },
            },

            '& h3': {
                marginTop: 15,
                marginBottom: 24,
            },

            '& .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
                background: 'none',
            },

            '& label[type=group]': {
                display: 'none !important',
            },

            '& a[href*=redoc]': {
                display: 'none',
            },

            '& li[data-item-id*=group]': {
                marginTop: 0,
            },

            '& label[role=menuitem]': {
                display: 'flex',
                alignItems: 'center',
                fontSize: 14,
                fontWeight: 400,

                '& span[title]': {
                    color: theme.palette.text.primary,
                    lineHeight: 1.54,
                },

                '& > span[type]': {
                    fontSize: 9,
                },

                '& > span:nth-child(2)': {
                    fontSize: 14,
                    marginLeft: theme.spacing(1),
                },

                '& > svg': {
                    height: 14,
                    width: 14,

                    '& *': {
                        fill: theme.palette.text.primary,
                    },
                },
            },

            '& label[type=section], label[type=tag], h1, h2': {
                fontWeight: 400,
                fontFamily: FONT_FAMILY.secondary,
            },

            '& .redoc-wrap': {
                [`& pre[class*='language-']`]: {
                    padding: 32,
                    margin: '32px 0',
                    backgroundColor: theme.palette.type !== 'dark' ? '#000' : rgbToRGBA(theme.palette.text.primary, 14),
                    borderRadius: 0,
                },

                '& pre > code': {
                    backgroundColor: theme.palette.type !== 'dark' ? '#000' : rgbToRGBA(theme.palette.text.primary, 0),
                },

                '& button:focus': {
                    outline: 'none',
                },
            },

            ...theme.mixins.all,
        },
        theme: () => theme.palette.type === 'dark' ?
            ({
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

                '& .api-content': {
                    '& > div > div > div > div > button + div': {
                        background: '#333',
                    },

                    '& > div > div > div > div > button + div > div > div > div': {
                        fontFamily: FONT_FAMILY.tertiary,
                        background: '#444',
                        border: '1px solid #555',
                    },
                },

                '& .redoc-wrap': {
                    background: theme.palette.background.primary,

                    '& h1, & h2, & h3, & h4, & h5, & h6': {
                        color: theme.palette.text.primary,
                    },

                    '& span, & p, & td, & tr, & button, & input, & li': {
                        color: theme.palette.text.secondary,
                    },

                    '& tr': {
                        background: [theme.palette.background.primary, '!important'],

                        '& div': {
                            background: [theme.palette.background.primary, '!important'],
                        },
                    },
                },
            }) :
            ({
                '& .api-content': {
                    '& > div > div > div > div > div > div > div > div': {
                        fontFamily: FONT_FAMILY.tertiary,
                    },
                },
            }),
    });
}, { name: 'ApiElement' });

export default function ApiElement(props) {
    const classes = useStyles(props);
    const theme = useTheme();

    const { text, titles } = props;

    const options = parseMarkdownFileReference(text);
    const url = getPublicFileUrl(titles.folders, titles.file, options.main);

    useEffect(() => {
        StorageService.sidebarSub.next(false);
    }, []);

    return (
        <Wrapper>
            <div
                className={clsx(classes.root, classes.theme)}
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
        </Wrapper>
    );
}
