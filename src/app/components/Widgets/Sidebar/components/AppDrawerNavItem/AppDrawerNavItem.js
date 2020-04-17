import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { ListItem, Button } from '../../../../';
import { useRoute } from '../../../../Utils';
import { StorageService } from '../../../../../services';
import { isRootPath, copy } from '../../../../../utils';

const useStyles = makeStyles(theme => ({
    item: {
        display: 'block',
        paddingTop: 0,
        paddingBottom: 0,
    },
    link: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    buttonText: {
        'justify-content': 'flex-start',
        padding: '7px 0',
        fontWeight: theme.typography.fontWeightMedium,

        '&.active': {
            color: theme.palette.primary.main,
        },
    },
    linkText: {
        'justify-content': 'flex-start',
        fontWeight: theme.typography.fontWeightLight,
        padding: '7px 0',

        '&.active': {
            color: theme.palette.primary.main,
        },

        '&.depth-0': {
            fontWeight: theme.typography.fontWeightMedium,
        },
    }
}));

function AppDrawerNavItem(props) {
    const {
        children,
        depth,
        href,
        onClick,
        title,
        pathname,
        subheader,
        ...other
    } = props;
    const classes = useStyles();
    const [open, setOpen] = useState(() => {
        const openedPages = StorageService.sidebarOpenedPathSub.getValue();
        const isOpenPath = openedPages.pages.find(key => key.indexOf(pathname.toLowerCase()) > -1);

        if (!href && !open && isOpenPath) return true;
    });
    const [active, setActive] = useState();
    // eslint-disable-next-line no-unused-vars
    const [currentLocation, currentPath] = useRoute();

    useEffect(() => {
        const value = currentPath.indexOf(pathname) > -1;
        const currentValue = copy(StorageService.sidebarOpenedPathSub.getValue());

        if (!href && !isRootPath() && !subheader) {
            const index = currentValue.pages.indexOf(pathname);
            const exists = index >= 0;

            if (!value && exists) currentValue.pages.splice(index, 1);
        }

        const isOpenPath = currentValue.pages.find(key => key.indexOf(pathname.toLowerCase()) > -1);

        if (!href) {
            if (isRootPath()) {
                if (isOpenPath) handleOpen(true);
            }
            else {
                handleOpen(!!(value || isOpenPath));
            }
        }

        setActive(pathname === window.location.pathname);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPath, pathname]);

    useEffect(() => {
        const sidebarOpenedPathSub = StorageService.sidebarOpenedPathSub.subscribe(openedPages => {
            const isOpenPath = openedPages.pages.find(key => key.indexOf(pathname.toLowerCase()) > -1);
            if (!href && !open && isOpenPath) setOpen(true);
        });

        return () => sidebarOpenedPathSub.unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        handleOpen(!open);
    };

    const handleOpen = value => {
        if (!href) {
            const currentValue = copy(StorageService.sidebarOpenedPathSub.getValue());
            const index = currentValue.pages.indexOf(pathname);
            const exists = index >= 0;

            if (value && !exists) currentValue.pages.push(pathname);
            else if (!value && exists) currentValue.pages.splice(index, 1);

            StorageService.sidebarOpenedPathSub.next(currentValue);
            setOpen(value);
        }
    };

    const style = {
        paddingLeft: 8 * (3 + 2 * depth),
    };

    if (href) {
        return (
            <ListItem
                className={clsx(classes.item, classes.link)}
                disableGutters
                {...other}
            >
                <Button
                    component={Link}
                    to={href}
                    onClick={onClick}
                    className={clsx(classes.linkText, active && 'active', `depth-${depth}`)}
                    style={style}
                    disableRipple={depth >= 1}
                    variant='text'
                    color='default'
                    fullWidth
                    naked
                >
                    {title}
                </Button>
            </ListItem>
        );
    }

    return (
        <ListItem
            className={classes.item}
            disableGutters
            {...other}
        >
            <Button
                style={style}
                className={clsx(classes.buttonText, `depth-${depth}`)}
                onClick={handleClick}
                variant='text'
                color='default'
                fullWidth
                naked
            >
                {title}
            </Button>

            <Collapse in={open} timeout='auto' unmountOnExit>
                {children}
            </Collapse>
        </ListItem>
    );
}

export default AppDrawerNavItem;
