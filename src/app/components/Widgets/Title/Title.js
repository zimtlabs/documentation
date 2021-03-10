import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';

import ArrowBack from '@material-ui/icons/KeyboardBackspace';

import { Typography, IconButton, Tooltip, Wrapper } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 44,
        marginBottom: 44,
        textAlign: 'center',

        '@media only screen and (min-width: 640px)': {
            marginTop: props => props.size === 'small' ? 75 : 124,
            marginBottom: props => props.size === 'small' ? 55 : 74,
        },
    },
    title: {
        color: theme.palette.text.primary,
        lineHeight: 1.35,
        marginBottom: 15,
        position: 'relative',
        textAlign: props => props.align || 'center',
    },
    subtitle: {
        color: theme.palette.text.secondary,
        fontWeight: 400,
        textAlign: props => props.align || 'center',
    },
    subtitleKey: {
        color: theme.palette.text.secondary,
        marginRight: 5,
    },
    dot: {
        fontSize: 14,
        color: theme.palette.text.secondary,
        padding: '0 7px',
    },
    backTo: {
        position: 'relative',
        marginRight: 15,
    },
    options: {
        position: 'absolute',
        right: -20,
        top: 0,

        '@media only screen and (min-width: 1200px)': {
            right: 0,
        },
    },
    image: {
        width: 'auto',
        height: 104,
        'margin-bottom': 24,
    },
}), { name: 'Title' });

export default function Title(props) {
    const classes = useStyles(props);
    const {
        image,
        backTo,
        titleVariant,
        titleProps,
        title,
        options,
        subtitle,
        ...other
    } = props;

    const subtitleProps = [];

    return (
        <Wrapper>
            <div
                className={classes.root}
                {...other}
            >
                {image && (
                    <img
                        className={classes.image}
                        src={image}
                        alt=''
                    />
                )}
                <Typography
                    className={classes.title}
                    variant={titleVariant || 'h4'}
                    {...(titleProps || {})}
                >
                    {backTo && (
                        <Tooltip title='Back' className={classes.backTo}>
                            <span>
                                <Link href={backTo}>
                                    <a>
                                        <IconButton color='default'>
                                            <ArrowBack />
                                        </IconButton>
                                    </a>
                                </Link>
                            </span>
                        </Tooltip>
                    )}
                    {title}
                    {options && (
                        <span className={classes.options}>
                            {options}
                        </span>
                    )}
                </Typography>
                <Typography
                    className={classes.subtitle}
                    variant='body1'
                >
                    {subtitle ? subtitle : <>
                        {subtitleProps.map((prop, index) => (
                            <span className={classes.subtitleItem} key={index}>
                                <span className={classes.dot}>•</span><span className={classes.subtitleKey}>{prop.key}:</span> {prop.value}
                            </span>
                        ))}
                    </>}

                </Typography>
            </div>
        </Wrapper>
    );
}
