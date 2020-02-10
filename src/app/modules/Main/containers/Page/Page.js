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
        const folder = pathname[0].replace('-', ' ');
        const file = pathname[1] && pathname[1].replace('-', ' ');
        const hash = window.location.hash;

        StorageService.crumbSub.next([
            { label: 'Home', to: '/' },
            { label: uppercase(folder) },
            ...(file ? [{ label: uppercase(file) }] : []),
        ]);

        getPage(pathname[0], pathname[1], hash);
    }, []);

    const getPage = async (folder, file, hash) => {
        try {
            const page = await RequestService.getPage(folder, file);
            if (page.error) throw new Error('No file found');

            setTitles({ folder, file, hash: hash.slice(1) });
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
