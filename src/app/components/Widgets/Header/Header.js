import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link as RLink } from 'react-router-dom';
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/HomeWorkOutlined';

import { CheckOnline, AppBar, Toolbar, IconButton, Typography, Breadcrumbs } from '../../';
import { StorageService } from '../../../services';

import { ReactComponent as LogoIcon } from '../../../../assets/svg/logo.svg';
import { useSidebarOpen } from '../../Utils';

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: 15000,
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
    menu: {
        display: 'flex',
        alignItems: 'center',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 13,
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: 'none',
            duration: 'none',
        }),
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
        transition: theme.transitions.create(['margin', 'width'], {
            easing: 'none',
            duration: 'none',
        }),
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
    const sidebarOpen = useSidebarOpen();

    useEffect(() => {
        const crumbSub = StorageService.crumbSub.subscribe(c => setCrumbs(c));

        return () => {
            crumbSub.unsubscribe();
        };
    }, []);

    const breadcrumbs = (
        <Breadcrumbs
            className={clsx(classes.breadcrumbs, {
                [classes.breadcrumbsShift]: sidebarOpen,
            })}
        >
            {crumbs.map((crumb, index) => crumb.to ? (
                <RLink
                    color='inherit'
                    to={crumb.to}
                    className={classes.link}
                    key={index}
                >
                    {!index && <HomeIcon className={classes.icon} />}
                    {crumb.label}
                </RLink>
            ) : (
                    <Typography
                        color='textPrimary'
                        className={classes.link}
                        key={index}
                    >
                        {!index && <HomeIcon className={classes.icon} />}
                        {crumb.label}
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
            <CheckOnline />

            <AppBar
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: sidebarOpen,
                })}
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
                        <RLink to='/' className={classes.logo}>
                            <LogoIcon />
                        </RLink>
                    </div>
                    <div className={classes.menu}>
                        {/* <IconButton
                            color='inherit'
                            href='https://github.com/sensia-io/hub'
                            target='_blank'
                        >
                            <GithubIcon />
                        </IconButton> */}
                    </div>
                </Toolbar>
            </AppBar>
            {breadcrumbs}
        </div>
    );
}
