import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import { Typography, Icon, CodeSnippet, Button } from '../..';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        backgroundColor: '#fafafa',
        padding: 25,
        margin: '24px 0',
        border: '0 solid #fff',
        'border-left-width': 8,
        'border-right-width': 8,
        width: '100%',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.text.primary,
        lineHeight: 1,
        marginBottom: 24,
    },
    titleIcon: {
        marginRight: 15,
    },
    text: {
        color: theme.palette.text.primary,
    },
    content: {
        '& > *': {
            marginBottom: 15,
        },
    },
    code: {
        marginBottom: '15px !important',
    },
}), { name: 'Quick' });

export default function Quick(props) {
    const classes = useStyles(props);

    const getItem = item => {
        if (item.type === 'code') {
            return (
                <CodeSnippet
                    code={item.text}
                    language={item.format}
                    className={classes.code}
                />
            );
        }

        return (
            <Typography
                variant={item.type}
                className={classes.text}
            >
                {item.text}
            </Typography>
        );
    };

    return (
        <div
            className={classes.root}
        >
            <Typography
                variant='h5'
                className={classes.title}
            >
                {props.titleIcon && (
                    <Icon
                        color='primary'
                        fontSize='large'
                        className={classes.titleIcon}
                    >
                        {props.titleIcon}
                    </Icon>
                )}
                {props.title}
            </Typography>
            <div className={classes.content}>
                {props.content.map((item, index) => (
                    <React.Fragment key={index}>
                        {getItem(item)}
                    </React.Fragment>
                ))}
            </div>
            <Button
                variant='text'
                color='default'
                style={{ marginTop: 8 }}
                align='flex-start'
                component={Link}
                to={props.to}
            >
                Read the docs
            </Button>
        </div>
    );
}
