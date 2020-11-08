import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';

import { MarkdownDocs } from '../app/components';
import { StorageService, RequestService } from '../app/services';
import { normalize, uppercase } from '../app/utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
}), { name: 'All' });

function All() {
    const classes = useStyles();
    const router = useRouter();
    const [loaded, setLoaded] = useState(false);
    const [mardown, setMarkdown] = useState();
    const [titles, setTitles] = useState({});

    useEffect(() => {
        router.events.on('routeChangeComplete', init);

        init();
    }, []);

    const init = () => {
        const pathname = window.location.pathname.split('/').filter(Boolean);
        const folders = pathname.slice(0, pathname.length - 1).map(folder => folder.replace('-', ' '));
        const file = pathname[pathname.length - 1] && pathname[pathname.length - 1].replace('-', ' ');
        const hash = window.location.hash;

        StorageService.crumbSub.next([
            { label: 'Home', to: '/' },
            ...folders.map(folder => ({ label: uppercase(folder) })),
            ...(file ? [{ label: uppercase(file) }] : []),
        ]);

        getPage(pathname.slice(0, pathname.length - 1), pathname[pathname.length - 1], hash);
    };

    const getPage = async (folders, file, hash) => {
        try {
            if ((folders && !!folders.length) || file) {
                const page = await RequestService.getPage(folders, file);
                if (page.error) throw new Error('No file found');

                setTitles({ folders, file, hash: hash.slice(1) });
                setMarkdown(page);
                setLoaded(true);
            }
        } catch (error) {
            router.push('/');
        }
    };

    let title = normalize(titles.file ? `${titles.file} - ` : '');
    if (title) title += ' - ';

    let description = (titles.folders && titles.folders.length) ? normalize(titles.folders.join(' ')) : '';
    if (description) description += '. ';

    return (
        <>
            <NextSeo
                title={`${title}ZIMT Documentation`}
                description={`${description}ZIMT API, SDK documentation.`}
                openGraph={{
                    title: `${title}ZIMT Documentation`,
                    description: `${description}ZIMT API, SDK documentation.`,
                    keywords: (titles.folders || []).join(', '),
                    images: [
                        { url: '/assets/images/social-default.jpg' },
                    ],
                    site_name: 'ZIMT',
                }}
            />
            <div className={classes.root}>
                {loaded && (
                    <MarkdownDocs
                        markdown={mardown}
                        titles={titles}
                    />
                )}
            </div>
        </>
    );
}

export default All;
