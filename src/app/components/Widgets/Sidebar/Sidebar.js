import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { duration, useMediaQuery, SwipeableDrawer } from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { List, Divider, Typography, useSidebarOpen, noSidebarRoutes } from '../../';
import { StorageService } from '../../../services';

import Menu from '../../../Menu';
import { AppDrawerNavItem } from './components';

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: '1300 !important',
        flexShrink: 0,

        '& .MuiPaper-root': {
            width: theme.CONST.sidebar.width,
        },
    },
    header: {
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 0,
        flex: '0 0 auto',
    },
    version: {
        fontSize: '0.75rem',
        fontWeight: 400,
        letterSpacing: '0.03333em',
        color: theme.palette.text.secondary,
    },
    list: {
        marginTop: 15,
    },
}), { name: 'Sidebar' });

export default function Sidebar(props) {
    const classes = useStyles(props);
    const [open, setOpen] = useState(false);
    const up600 = useMediaQuery('(min-width: 600px');
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('lg'));
    const shouldBeOpen = useSidebarOpen();
    const router = useRouter();

    const noSidebar = noSidebarRoutes.find(route => route === '/' ? route === router.asPath : router.asPath.indexOf(route) === 0);
    const mobile = !desktop;

    useEffect(() => {
        if (shouldBeOpen) StorageService.sidebarSub.next(true);
    }, [desktop, shouldBeOpen]);

    useEffect(() => {
        const sidebarSub = StorageService.sidebarSub.subscribe(value => setOpen(value));

        return () => {
            sidebarSub.unsubscribe();
        };
    }, []);

    const onClose = () => {
        if (mobile || noSidebar) StorageService.sidebarSub.next(false);
    };

    function renderNavItems(options) {
        const { pages, ...params } = options;

        return (
            <List component='nav'>
                {pages.reduce(
                    (items, page) => reduceChildRoutes({ items, page, ...params }),
                    [],
                )}
            </List>
        );
    }

    function reduceChildRoutes({ props, items, page, depth }) {
        if (page.type === 'divider') {
            items.push(<Divider key={new Date().getTime() + items.length} style={{ margin: '15px 0' }} />);

            return items;
        }

        if (page.children && !!page.children.length) {
            const title = page.title;

            items.push(
                <AppDrawerNavItem
                    depth={depth}
                    key={title}
                    title={title}
                    pathname={page.pathname}
                    subheader={page.subheader}
                    button={page.button}
                >
                    {renderNavItems({ props, pages: page.children, depth: depth + 1 })}
                </AppDrawerNavItem>,
            );
        } else {
            const title = page.title;
            page = page.children && page.children.length === 1 ? page.children[0] : page;

            items.push(
                <AppDrawerNavItem
                    depth={depth}
                    key={title}
                    title={title}
                    href={page.pathname}
                    onClick={onClose}
                    pathname={page.pathname}
                    subheader={page.subheader}
                    button={page.button}
                />,
            );
        }

        return items;
    }

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <SwipeableDrawer
            open={open}
            onClose={() => onClose()}
            variant={shouldBeOpen ? 'persistent' : 'temporary'}
            anchor='left'
            className={classes.root}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            transitionDuration={mobile || !shouldBeOpen ? { enter: duration.enteringScreen, exit: duration.leavingScreen } : 0}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
        >
            <div
                className={classes.header}
                style={{ height: up600 ? 64 : 56 }}
            >
                <Link href='/'>
                    <a>
                        <Typography
                            variant='body1'
                            style={{ color: theme.palette.text.primary, fontWeight: 600 }}
                        >
                            Documentation
                        </Typography>
                    </a>
                </Link>
            </div>

            <Divider style={{ marginBottom: 24 }} />

            {renderNavItems({ pages: Menu, depth: 0 })}

        </SwipeableDrawer>
    );
}
