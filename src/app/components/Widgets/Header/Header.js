import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useScrollTrigger, useMediaQuery } from '@material-ui/core';
import NLink from 'next/link';
import clsx from 'clsx';

import IconMenu from '@material-ui/icons/Menu';
import IconThemeAuto from '@material-ui/icons/Brightness6Outlined';
import IconThemeLight from '@material-ui/icons/Brightness5Outlined';
import IconThemeDark from '@material-ui/icons/Brightness4Outlined';

import IconLogoSymbol from '../../../../../public/assets/svg/v2/logo-symbol.svg';
import IconLogoTypography from '../../../../../public/assets/svg/v2/logo-typography.svg';

import { AppBar, Toolbar, IconButton, Typography, Breadcrumbs, useSidebarOpen, Tooltip, Wrapper } from '../../';
import { StorageService } from '../../../services';
import { normalize, DEFAULT_THEME } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: '1000 !important',
        position: () => process.browser && location.pathname.indexOf('/api') === 0 ? 'relative' : 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        transition: theme.transitions.create(['box-shadow']),
    },
    shift: {
        width: `calc(100% - ${theme.CONST.sidebar.width}px)`,
        marginLeft: theme.CONST.sidebar.width,
        transition: theme.transitions.create(['margin', 'width'], { easing: 'none', duration: 'none' }),
    },
    appBar: {
        boxShadow: 'none',
        backgroundColor: theme.palette.background.primary,
        color: theme.palette.text.primary,

        '&.notTop': {
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.04)',
        },
    },
    logo: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',

        '&.mobile': {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            lineHeight: 0,
        },

        '& > svg': {
            fill: theme.palette.text.primary,
        },

        '&.organization': {
            '& > svg': {
                width: 'auto',
                maxWidth: '45vw',
                maxHeight: 64,
            },

            '& > img': {
                width: 'auto',
                maxWidth: '45vw',
                maxHeight: 64,
            },
        },
    },
    zimtLogo: {
        width: 'auto',
        maxWidth: '45vw',
        height: 40,
        fill: 'currentColor',

        transition: theme.transitions.create(['fill'], {
            duration: '.2s',
        }),

        '&.desktop': {
            height: 15,
        },
    },
    logoImage: {
        cursor: 'pointer',
    },
    toolbar: {
        padding: 25,
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        height: 91,

        [`@media only screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
            height: 121,
        },
    },
    left: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        color: '#fff',
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
    const theme = useTheme();
    const sidebarOpen = useSidebarOpen();
    const desktop = useMediaQuery(theme.breakpoints.up('lg'));
    const [userTheme, setUserTheme] = useState(DEFAULT_THEME);

    const mobile = !desktop;

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

    const LogoImage = () => {
        if (props.logo) return (
            <img
                src={getDocumentURL(props.logo)} alt='logo'
                className={classes.logoImage}
                id='logo-custom'
            />
        );

        const LogoDefault = mobile ? IconLogoSymbol : IconLogoTypography;

        return (
            <LogoDefault
                className={clsx(classes.zimtLogo, desktop && 'desktop')}
            />
        );
    };

    const sidebarToggle = () => {
        StorageService.sidebarSub.next(!StorageService.sidebarSub.getValue());
    };

    return (
        <Wrapper>
            <div
                className={clsx(classes.root, { [classes.shift]: sidebarOpen, notTop: !!trigger })}
            >
                <AppBar
                    className={clsx(classes.appBar, { notTop: !!trigger })}
                    position='relative'
                >
                    <Toolbar className={classes.toolbar}>
                        <div
                            className={classes.left}
                        >
                            {!sidebarOpen && (
                                <IconButton
                                    edge='start'
                                    color='inherit'
                                    onClick={sidebarToggle}
                                    style={{
                                        marginRight: 12,
                                    }}
                                >
                                    <IconMenu />
                                </IconButton>
                            )}

                            <NLink href='/'>
                                <a className={classes.logo}>
                                    {LogoImage()}
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

                <Breadcrumbs>
                    {crumbs.map((crumb, index) => crumb.to ?
                        <NLink
                            href={crumb.to}
                            key={index}
                        >
                            <a>
                                <Typography
                                    variant='body2'
                                    className={classes.link}
                                >
                                    {normalize(crumb.label)}
                                </Typography>
                            </a>
                        </NLink> :

                        <Typography
                            variant='body2'
                            className={clsx(classes.link, classes.linkText)}
                            key={index}
                        >
                            {normalize(crumb.label)}
                        </Typography>
                    )}
                </Breadcrumbs>
            </div>
        </Wrapper>
    );
}
