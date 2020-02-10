import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import { Title, Button, Typography } from '../../../../components';
import { StorageService } from '../../../../services';

import LogoDocumentation from '../../../../../assets/svg/logo.svg';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: theme.breakpoints.values['lg'],
        margin: '0 auto',
        padding: '44px 44px 54px 44px',
    },
    text: {
        color: theme.palette.text.primary,
    },
    list: {
        'margin-top': 15,
        'padding-left': 16,

        '& > *': {
            marginBottom: 9,

            '&:last-child': {
                marginBottom: 0,
            },
        },
    },
    content: {
        marginBottom: 24,
        textAlign: 'center',
    },
}), { name: 'Home' });

export default function Home() {
    const classes = useStyles();

    useEffect(() => {
        StorageService.sidebarSub.next(false);
        StorageService.crumbSub.next([
            { label: 'Home' },
        ]);
    }, []);

    return (
        <div className={classes.root}>
            <Title
                title='Documentation'
                size='small'
                image={LogoDocumentation}
            />

            <div
                className={classes.content}
            >
                <Typography
                    variant='body1'
                    style={{ marginBottom: 24 }}
                >
                    Documentation for the Hub API.
                </Typography>

                <Button
                    component={Link}
                    to='/api'
                    variant='outlined'
                >
                    Jump to API docs
                </Button>
            </div>
        </div>
    );
}
