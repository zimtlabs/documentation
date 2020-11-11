import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useScrollTrigger } from '@material-ui/core';
import NLink from 'next/link';
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/HomeWorkOutlined';

import { AppBar, Toolbar, IconButton, Typography, Breadcrumbs, useSidebarOpen } from '../../';
import { StorageService } from '../../../services';
import { normalize, rgbToRGBA } from '../../../utils';

import Logo from '../../../../../public/assets/svg/logo.svg';

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: '1000 !important',
        position: () => window.location.pathname.indexOf('/api') === 0 ? 'relative' : 'fixed',
        width: '100%',
        top: 0,
        left: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'inline-flex',
        alignItems: 'center',
    },
    logo: {
        lineHeight: 0,

        '& > svg': {
            width: 'auto',
            height: 27,
            marginRight: 7,
            fill: '#fff',
        },
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        color: '#fff',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.primary.main,
        whiteSpace: 'nowrap',
    },
    linkText: {
        color: theme.palette.text.primary,
    },
    icon: {
        marginRight: theme.spacing(1),
        width: 20,
        height: 20,
    },
    appBar: {
        color: '#fff',
        'box-shadow': 'none',
        'backdrop-filter': 'blur(15px)',

        transition: theme.transitions.create(['margin', 'width', 'background-color'], {
            easing: 'none',
            duration: 'none',
        }),

        '&.notTop': {
            'background-color': rgbToRGBA(theme.palette.primary[theme.palette.type === 'dark' ? 'dark' : 'main'], 84),
        },
    },
    appBarShift: {
        width: `calc(100% - ${theme.CONST.sidebar.width}px)`,
        marginLeft: theme.CONST.sidebar.width,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: 'none',
            duration: 'none',
        }),
    },
    breadcrumbs: {
        borderBottom: 'none',
        'backdrop-filter': 'blur(15px)',

        '& li:last-child': {
            paddingRight: 24,
        },

        transition: theme.transitions.create(['margin', 'width', 'background-color', 'box-shadow'], {
            easing: 'none',
            duration: 'none',
        }),

        '&.notTop': {
            'box-shadow': '0px -1px 7px rgba(0, 0, 0, 0.1)',
            'background-color': rgbToRGBA(theme.palette.background.secondary, 84),
        },
    },
    breadcrumbsShift: {
        width: `calc(100% - ${theme.CONST.sidebar.width}px)`,
        marginLeft: theme.CONST.sidebar.width,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: 'none',
            duration: 'none',
        }),
    },
}), { name: 'Header' });

export default function Header(props) {
    const classes = useStyles(props);
    const [crumbs, setCrumbs] = useState([
        { label: 'Home' },
    ]);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    const sidebarOpen = useSidebarOpen();

    useEffect(() => {
        const crumbSub = StorageService.crumbSub.subscribe(c => setCrumbs(c));

        return () => {
            crumbSub.unsubscribe();
        };
    }, []);

    const breadcrumbs = (
        <Breadcrumbs
            className={clsx(classes.breadcrumbs, { [classes.breadcrumbsShift]: sidebarOpen, notTop: !!trigger })}
        >
            {crumbs.map((crumb, index) => crumb.to ? (
                <NLink
                    href={crumb.to}
                    key={index}
                >
                    <a>
                        <Typography
                            variant='body2'
                            className={classes.link}
                        >
                            {!index && <HomeIcon className={classes.icon} />}
                            {normalize(crumb.label)}
                        </Typography>
                    </a>
                </NLink>
            ) : (
                    <Typography
                        variant='body2'
                        className={clsx(classes.link, classes.linkText)}
                        key={index}
                    >
                        {!index && <HomeIcon className={classes.icon} />}
                        {normalize(crumb.label)}
                    </Typography>
                ))}
        </Breadcrumbs>
    );

    const sidebarToggle = () => {
        StorageService.sidebarSub.next(!StorageService.sidebarSub.getValue());
    };

    return (
        <div
            className={classes.root}
        >
            <AppBar
                className={clsx(classes.appBar, { [classes.appBarShift]: sidebarOpen, notTop: !!trigger })}
                position='relative'
            >
                <Toolbar>
                    {!sidebarOpen && (
                        <IconButton
                            edge='start'
                            className={classes.menuButton}
                            color='inherit'
                            onClick={sidebarToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <div className={classes.title}>
                        <NLink href='/'>
                            <a className={classes.logo}>
                                <Logo />
                            </a>
                        </NLink>
                    </div>
                </Toolbar>
            </AppBar>
            {breadcrumbs}
        </div>
    );
}
