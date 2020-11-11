import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { MarkdownElement, Button } from '../../';
import { getMarkdownContents, getGithubFileURL } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 24,
    },
    button: {
        fontSize: 12,
    },
}), { name: 'MarkdownDocs' });

export default function MarkdownDocs(props) {
    const classes = useStyles(props);
    const {
        markdown,
        titles,
        // eslint-disable-next-line no-unused-vars
        ...other
    } = props;

    useEffect(() => {
        if (titles.hash) {
            const el = document.getElementById(titles.hash);
            if (el) el.scrollIntoView();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    titles.foldersString = titles.folders.reduce((url, folder) => url += `/${folder}`, '');

    return (
        <div
            className={classes.root}
        >
            <div className={classes.header}>
                <Button
                    variant='text'
                    color='default'
                    component='a'
                    target='_blank'
                    rel='noopener nofollow'
                    href={getGithubFileURL(titles.folders, titles.file)}
                    className={classes.button}
                >
                    EDIT THIS PAGE
                </Button>
            </div>

            <div
                className={classes.content}
            >
                {getMarkdownContents(markdown).map((value, index) => (
                    <MarkdownElement
                        key={index}
                        text={value}
                        titles={titles}
                    />
                ))}
            </div>
        </div>
    );
}
