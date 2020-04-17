import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { MarkdownDocs } from '../../../../components';
import { StorageService, RequestService } from '../../../../services';
import { uppercase, history } from '../../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    text: {
        color: theme.palette.text.primary,
    },
}), { name: 'Page' });

export default function Page() {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    const [mardown, setMarkdown] = useState();
    const [titles, setTitles] = useState({});

    useEffect(() => {
        const pathname = window.location.pathname.split('/').filter(Boolean);
        const folders = pathname.slice(0, pathname.length - 1).map(folder => folder.replace('-', ' '));
        const file = pathname[pathname.length - 1].replace('-', ' ');
        const hash = window.location.hash;

        StorageService.crumbSub.next([
            { label: 'Home', to: '/' },
            ...folders.map(folder => ({ label: uppercase(folder) })),
            ...(file ? [{ label: uppercase(file) }] : []),
        ]);

        getPage(pathname.slice(0, pathname.length - 1), pathname[pathname.length - 1], hash);
    }, []);

    const getPage = async (folders, file, hash) => {
        try {
            const page = await RequestService.getPage(folders, file);
            if (page.error) throw new Error('No file found');

            setTitles({ folders, file, hash: hash.slice(1) });
            setMarkdown(page);
            setLoaded(true);
        } catch (error) {
            history.push('/');
        }
    };

    return (
        <div className={classes.root}>
            {!loaded ? <div /> : (
                <MarkdownDocs
                    markdown={mardown}
                    titles={titles}
                />
            )}
        </div>
    );
}
