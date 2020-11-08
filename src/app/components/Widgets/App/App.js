import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { DefaultSeo } from 'next-seo';

import { Header, Sidebar, Footer, useSidebarOpen } from '../../';
import { reset } from '../../../../styles';

const useStyles = makeStyles(theme => ({
    '@global': {
        ...reset(theme),
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.primary,
        position: 'relative',
        paddingTop: () => window.location.pathname.indexOf('/api') > -1 ? 0 : 91,
    },
    main: {
        flex: '1 1 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: 'none',
            duration: 'none',
        }),
    },
    mainShift: {
        width: `calc(100% - ${theme.CONST.sidebar.width}px)`,
        marginLeft: theme.CONST.sidebar.width,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: 'none',
            duration: 'none',
        }),
    },
}), { name: 'App' });

export default function App(props) {
    const classes = useStyles();
    const sidebarOpen = useSidebarOpen();

    return <>
        <DefaultSeo
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                site_name: 'ZIMT Documentation',
            }}
        />
        <div className={classes.root}>
            <Sidebar />
            <Header />
            <main className={clsx(classes.main, { [classes.mainShift]: sidebarOpen })}>
                {props.children}
            </main>
            <Footer />
        </div>
    </>;
}
