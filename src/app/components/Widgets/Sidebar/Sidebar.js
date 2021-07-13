import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { duration, useMediaQuery, SwipeableDrawer } from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { List, Divider, Typography, useSidebarOpen, noSidebarRoutes, Wrapper } from '../../';
import { StorageService } from '../../../services';

import { AppDrawerNavItem } from './components';
import Menu from '../../../Menu';

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: '1300 !important',
        flexShrink: 0,
        overflow: 'hidden',

        '& .MuiPaper-root': {
            width: theme.CONST.sidebar.width,
            flexDirection: 'column',
            boxShadow: '5px 0 17px rgb(0 0 0 / 3%)',
            border: 'none',
        },
    },
    header: {
        minHeight: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto',
        padding: '34px 24px',
    },
    version: {
        fontSize: '0.75rem',
        fontWeight: 400,
        letterSpacing: '0.03333em',
        color: theme.palette.text.secondary,
    },
    name: {
        whiteSpace: 'nowrap',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: theme.palette.text.primary,
        fontSize: 16,
    },
    list: {
        marginTop: 15,
    },
    divider: {
        margin: '14px 0',

        '& hr': {
            background: 'none',
        },
    },
}), { name: 'Sidebar' });

export default function Sidebar(props) {
    const classes = useStyles(props);
    const [open, setOpen] = useState(false);
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
            items.push((
                <Divider
                    key={new Date().getTime() + items.length}
                    className={classes.divider}
                />
            ));

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
        <Wrapper>
            <SwipeableDrawer
                open={open}
                onClose={() => onClose()}
                onOpen={() => { }}
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
                >
                    <Link href='/'>
                        <a>
                            <Typography
                                variant='h6'
                                className={classes.name}
                            >
                                Documentation
                            </Typography>
                        </a>
                    </Link>
                </div>

                <Divider style={{ marginBottom: 24 }} />

                {renderNavItems({ pages: Menu, depth: 0 })}
            </SwipeableDrawer>
        </Wrapper>
    );
}
