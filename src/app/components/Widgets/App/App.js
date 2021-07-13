import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import { useSidebarOpen, Sidebar, Header, Footer, Wrapper } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.primary,
        position: 'relative',
        paddingTop: () => process.browser && window.location.pathname.indexOf('/api') === 0 ? 0 : 144,

        [`@media only screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
            paddingTop: () => process.browser && window.location.pathname.indexOf('/api') === 0 ? 0 : 174,
        },
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
    shift: {
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

    return (
        <Wrapper fallback>
            <div className={classes.root}>
                <Sidebar />
                <Header />
                <main className={clsx(classes.main, { [classes.shift]: sidebarOpen })}>
                    {props.children}
                </main>
                <Footer />
            </div>
        </Wrapper>
    );
}
