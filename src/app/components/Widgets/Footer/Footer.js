import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';

import LinkIcon from '@material-ui/icons/CallMadeRounded';

import IconLogoSymbol from '../../../../../public/assets/svg/v2/logo-symbol.svg';

import { Typography, useSidebarOpen, Link as ZLink, Wrapper, ActiveLink } from '../../';
import { rgbToRGBA } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        flex: '0 0 auto',
        backgroundColor: props => props.background || rgbToRGBA(theme.palette.background.primary, 3),
        backdropFilter: 'blur(80px)',
        zIndex: '700 !important',
        color: theme.palette.text.secondary,
    },
    rootShift: {
        width: `calc(100% - ${theme.CONST.sidebar.width}px)`,
        marginLeft: theme.CONST.sidebar.width,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: 'none',
            duration: 'none',
        }),
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        maxWidth: theme.breakpoints.values.lg,
        margin: '0 auto',
        padding: '80px 50px',

        [`@media only screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '60px 50px',
        },
    },
    menu: {
        display: 'grid',
        gridAutoFlow: 'row',
        gridGap: 20,
        marginBottom: 50,

        [`@media only screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
            gridAutoFlow: 'column',
            justifyContent: 'flex-start',
            marginBottom: 0,
        },
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: 1,
        justifySelf: 'center',
        cursor: 'pointer',
        color: 'inherit',
        fontWeight: 400,

        [`@media only screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
            justifySelf: 'flex-start',
        },
    },
    symbol: {
        fill: 'currentColor',
        height: 21,
        width: 21,
        marginBottom: 30,
    },
    poweredBy: {
        color: 'inherit',
    },
}), { name: 'Footer' });

export default function Footer(props) {
    const classes = useStyles(props);
    const theme = useTheme();
    const desktop = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`);
    const mobile = !desktop;
    const sidebarOpen = useSidebarOpen();

    const MENU = [
        { label: 'Privacy Policy', href: 'https://zimt.co/privacy-policy' },
    ];

    return (
        <Wrapper>
            <footer
                className={clsx(classes.root, { [classes.rootShift]: sidebarOpen })}
            >
                <div className={classes.wrapper}>
                    <div className={classes.menu}>
                        {MENU.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.to ? (
                                    <ActiveLink
                                        href={item.to}
                                        activeClassName='active'
                                    >
                                        <Typography
                                            className={classes.link}
                                            component='a'
                                            variant='body2'
                                        >
                                            {item.label}
                                        </Typography>
                                    </ActiveLink>
                                ) : (
                                    <ZLink
                                        href={item.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={clsx(classes.link, classes.linkExternal)}
                                    >
                                        {item.label}

                                        <LinkIcon
                                            style={{
                                                marginLeft: 7,
                                                fontSize: 'inherit',
                                            }}
                                        />
                                    </ZLink>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {mobile && (
                        <IconLogoSymbol
                            className={classes.symbol}
                        />
                    )}

                    <ZLink
                        href='https://zimt.co'
                        target='_blank'
                        rel='noopener noreferrer'
                        variant='body2'
                        className={classes.poweredBy}
                    >
                        Powered by ZIMT
                    </ZLink>
                </div>
            </footer>
        </Wrapper>
    );
}
