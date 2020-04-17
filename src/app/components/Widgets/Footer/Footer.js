import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import { Typography, Link } from '../..';
import { useSidebarOpen } from '../../Utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        flex: '0 0 auto',
        backgroundColor: '#fff',
        zIndex: 14000,
        marginTop: 24,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: 'none',
            duration: 'none',
        }),
    },
    rootShift: {
        width: `calc(100% - ${theme.CONSTANTS.sidebar.width}px)`,
        marginLeft: theme.CONSTANTS.sidebar.width,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: 'none',
            duration: 'none',
        }),
    },
    wrapper: {
        width: '100%',
        maxWidth: 1200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '34px 25px',
        margin: '0 auto',
    },
    copyright: {
        fontSize: '0.75rem',
        fontWeight: 300,
        letterSpacing: '0.03333em',
        color: theme.palette.text.secondary,
        userSelect: 'none',
        textAlign: 'center',
    },
}), { name: 'Footer' });

export default function Footer(props) {
    const classes = useStyles(props);
    const sidebarOpen = useSidebarOpen();

    return (
        <footer
            className={clsx(classes.root, {
                [classes.rootShift]: sidebarOpen,
            })}
        >
            <div className={classes.wrapper}>
                <Typography
                    variant='caption'
                    className={classes.copyright}
                >
                    Copyright © 2020

                    <span style={{ margin: '0 9px' }}>·</span>

                    <Link
                        href='https://zimt.co'
                        target='_blank'
                        style={{ fontSize: 11 }}
                    >
                        ZIMT
                    </Link>
                </Typography>
            </div>
        </footer>
    );
}
