import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useScrollTrigger } from '@material-ui/core';
import NLink from 'next/link';
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/HomeWorkOutlined';
import IconThemeAuto from '@material-ui/icons/Brightness6Outlined';
import IconThemeLight from '@material-ui/icons/Brightness5Outlined';
import IconThemeDark from '@material-ui/icons/Brightness4Outlined';

import Logo from '../../../../../public/assets/svg/logo.svg';

import { AppBar, Toolbar, IconButton, Typography, Breadcrumbs, useSidebarOpen, Tooltip } from '../../';
import { StorageService } from '../../../services';
import { normalize, rgbToRGBA, DEFAULT_THEME } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: '1000 !important',
        position: () => process.browser && location.pathname.indexOf('/api') === 0 ? 'relative' : 'fixed',
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
        boxShadow: 'none',
        transition: 'background-color .2s, box-shadow .2s',

        '&.notTop': {
            backgroundColor: rgbToRGBA(theme.palette.primary[theme.palette.type === 'dark' ? 'dark' : 'main'], 98),
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

        '& li:last-child': {
            paddingRight: 24,
        },

        '&.notTop': {
            boxShadow: '0px -1px 7px rgba(0, 0, 0, 0.1)',
            backgroundColor: rgbToRGBA(theme.palette.background.secondary, 98),
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
    iconTheme: {
        fontSize: '1.6rem',

        '@media only screen and (min-width: 720px)': {
            fontSize: '1.7rem',
        },
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
    const [userTheme, setUserTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
        const crumbSub = StorageService.crumbSub.subscribe(c => setCrumbs(c));

        return () => {
            crumbSub.unsubscribe();
        };
    }, []);

    useEffect(() => {
        const userThemeSub = StorageService.userTheme.subscribe(value => setUserTheme(value));

        return () => {
            userThemeSub.unsubscribe();
        };
    }, []);

    const onThemeChange = () => {
        let value = 'auto';
        if (userTheme === 'auto') value = 'light';
        if (userTheme === 'light') value = 'dark';

        setUserTheme(value);
        StorageService.setUserTheme(value);
    };

    let Icon = IconThemeAuto;

    if (userTheme === 'light') Icon = IconThemeLight;
    if (userTheme === 'dark') Icon = IconThemeDark;

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

                    <Tooltip
                        title={`${normalize(userTheme)} theme`}
                    >
                        <span>
                            <IconButton
                                onClick={onThemeChange}
                                color='inherit'
                                size='small'
                            >
                                <Icon
                                    className={classes.iconTheme}
                                />
                            </IconButton>
                        </span>
                    </Tooltip>
                </Toolbar>
            </AppBar>

            {breadcrumbs}
        </div>
    );
}
