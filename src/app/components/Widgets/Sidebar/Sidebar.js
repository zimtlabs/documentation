import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { duration, useMediaQuery } from '@material-ui/core';

import { List, Divider, Typography, Drawer, Link } from '../../';
import { StorageService } from '../../../services';
import Config from '../../../config';

import { useSidebarOpen } from '../../Utils';
import { theme } from '../../../App';

import SidebarMenu from '../../../Menu';
import { AppDrawerNavItem } from './components';
import { isRootPath } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: 20000,
        flexShrink: 0,

        '& .MuiPaper-root': {
            width: theme.CONSTANTS.sidebar.width,
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
    const [open, setOpen] = useState();
    const up600 = useMediaQuery('(min-width: 600px');
    const desktop = useMediaQuery(theme.breakpoints.up('lg'));
    const shouldBeOpen = useSidebarOpen();

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
        if (mobile || isRootPath()) StorageService.sidebarSub.next(false);
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
                />,
            );
        }

        return items;
    }

    return (
        <Drawer
            open={open}
            onClose={() => onClose()}
            variant={shouldBeOpen ? 'persistent' : 'temporary'}
            anchor='left'
            className={classes.root}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            transitionDuration={mobile || !shouldBeOpen ? { enter: duration.enteringScreen, exit: duration.leavingScreen } : 0}
        >
            <div
                className={classes.header}
                style={{ height: up600 ? 64 : 56 }}
            >
                <Typography
                    variant='body1'
                    style={{ color: theme.palette.text.primary, fontWeight: 600 }}
                >
                    API Docs
                </Typography>

                <span style={{ margin: '0 9px' }}>·</span>

                <Typography
                    className={classes.version}
                    variant='body2'
                    component={Link}
                    href={Config.config.api.source}
                    target='_blank'
                >
                    {Config.config.api.version}
                </Typography>
            </div>

            <Divider style={{ marginBottom: 24 }} />

            {renderNavItems({ pages: SidebarMenu, depth: 0 })}
        </Drawer>
    );
}
