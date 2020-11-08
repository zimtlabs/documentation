import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Typography, Title, Link } from '../../app/components';
import { StorageService } from '../../app/services';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: theme.breakpoints.values['md'],
        margin: '0 auto',
        padding: '44px 24px',
    },
    text: {
        color: theme.palette.text.primary,
    },
    list: {
        'margin-top': 15,
        'list-style-type': 'circle',
        'list-style-position': 'inside',
        'padding-left': 16,
    },
}), { name: 'Contact' });

export default function Contact() {
    const classes = useStyles();

    useEffect(() => {
        StorageService.sidebarSub.next(false);
        StorageService.crumbSub.next([
            { label: 'Home', to: '/' },
            { label: 'Contact' },
        ]);
    }, []);

    return (
        <div className={classes.root}>
            <Title
                title='Contact'
                backTo='/'
                size='small'
                align='left'
            />
            <div
                className={classes.content}
            >
                <Typography
                    variant='body1'
                    component='div'
                    className={classes.text}
                >
                    You can reach us at {<Link
                        href='mailto:tech@zimt.co'
                        target='_blank'
                    >
                        tech@zimt.co
                    </Link>}.
                </Typography>
            </div>
        </div>
    );
}
