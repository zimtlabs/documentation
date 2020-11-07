import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import { Header, Footer, Sidebar, useSidebarOpen } from '../../components';

import Routes from './Routes';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        position: 'relative',
        flex: '1 1 auto',
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
}), { name: 'Documentation' });

export default function Documentation() {
    const classes = useStyles();
    const sidebarOpen = useSidebarOpen();

    return (
        <div className={classes.root}>
            <Sidebar />
            <Header />
            <main
                className={clsx(classes.main, {
                    [classes.mainShift]: sidebarOpen,
                })}
            >
                <Routes />
            </main>
            <Footer />
        </div>
    );
}
