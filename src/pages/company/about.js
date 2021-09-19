import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Typography, Title } from '../../app/components';
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
    content: {
        '& > *': {
            marginBottom: 15,

            '&:last-child': {
                marginBottom: 0,
            },
        },
    },
}), { name: 'About' });

export default function About() {
    const classes = useStyles();

    useEffect(() => {
        StorageService.sidebarSub.next(false);
        StorageService.crumbSub.next([
            { label: 'Home', to: '/' },
            { label: 'About' },
        ]);
    }, []);

    return (
        <div className={classes.root}>
            <Title
                title='About'
                backTo='/'
                size='small'
                align='left'
            />

            <div
                className={classes.content}
            >
                <Typography
                    variant='h6'
                    style={{ marginBottom: 34 }}
                >
                    We are a decentralised IoT based in Zurich, Switzerland. We build trusted embedded sensors, edge gateways and cloud solutions for digitalising supply chains, buildings, and cities.
                </Typography>
                <Typography
                    variant='body1'
                >
                    Our solutions are built upon 15+ years of R&D activities in IoT and embedded computing, analytical science and non-destructive instrumentation (NDT, NDE), information security and Web of Things standardisation at MIT, EPFL, ETH Zurich – three of the best IT universities worldwide – as well as at the W3C and SAP.
                </Typography>
                <Typography
                    variant='body1'
                >
                    Our innovation lab has developed numerous security features to fit modern and future IOT challenges to support digital transformation, from special encryption protocols, key management as well as a full client blockchain hardware embedded solution.
                </Typography>
            </div>
        </div>
    );
}
