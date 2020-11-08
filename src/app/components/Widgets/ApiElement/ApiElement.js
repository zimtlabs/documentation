import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { RedocStandalone } from 'redoc';
import prism from 'prismjs';

import { parseMarkdownFileReference, getPublicFileUrl } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',

        '& h3': {
            marginTop: 15,
            marginBottom: 24,
        },

        '& .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
            background: 'none',
        },
    }
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
