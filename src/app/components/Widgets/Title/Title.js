import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import ArrowBack from '@material-ui/icons/KeyboardBackspace';

import { Typography, IconButton, Tooltip } from '../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 44,
        marginBottom: 44,
        fontFamily: 'Rubik',
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
        padding: props => props.backTo ? '0 44px' : 0,
        textAlign: props => props.align || 'center',

        '@media only screen and (min-width: 1200px)': {
            padding: props => props.backTo ? '0 74px' : 0,
        },
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
        position: 'absolute',
        top: 0,
        left: -20,

        '@media only screen and (min-width: 1200px)': {
            left: 8,
        },
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
        height: 124,
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
                        <Link to={backTo}>
                            <IconButton
                                color='default'
                            >
                                <ArrowBack />
                            </IconButton>
                        </Link>
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
    );
}
