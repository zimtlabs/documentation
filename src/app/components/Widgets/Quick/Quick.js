import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';

import { Typography, Icon, CodeSnippet, Button, Wrapper } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        margin: '24px 0',
        borderLeftWidth: 8,
        borderRightWidth: 8,
        width: '100%',
        alignSelf: 'flex-start',
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
        width: '100%',

        '& > *': {
            marginBottom: theme.spacing(2),
        },
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
                variant={item.variant || 'h5'}
                className={classes.text}
            >
                {item.text}
            </Typography>
        );
    };

    return (
        <Wrapper>
            <div
                className={classes.root}
            >
                <Typography
                    variant='h4'
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

                <Link href={props.to}>
                    <a
                        style={{ marginTop: 8, alignSelf: 'flex-start' }}
                    >
                        <Button
                            variant='text'
                            color='default'
                            align='flex-start'
                        >
                            Read the docs
                        </Button>
                    </a>
                </Link>
            </div>
        </Wrapper>
    );
}
