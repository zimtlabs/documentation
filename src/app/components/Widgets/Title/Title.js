import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';

import ArrowBack from '@material-ui/icons/KeyboardBackspace';

import { Typography, IconButton, Tooltip, Wrapper } from '../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 0,
        marginBottom: 45,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center',
        padding: '0 14px',

        '@media only screen and (min-width: 640px)': {
            marginTop: props => props.title === 'small' ? 0 : 24,
            marginBottom: props => props.title === 'small' ? 35 : 54,
        },
    },
    title: {
        color: theme.palette.text.primary,
        lineHeight: 1.35,
        marginBottom: 15,
        position: 'relative',
        width: '100%',
        maxWidth: 744,
        wordBreak: 'break-word',
        justifySelf: 'center',
        flex: '1 1 auto',
    },
    actions: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
        width: '100%',
    },
    actionsLeft: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        justifySelf: 'flex-start',
        flex: '0 0 auto',
    },
    actionsRight: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        justifySelf: 'flex-end',
        flex: '0 0 auto',
    },
    subtitle: {
        color: theme.palette.text.secondary,
        fontWeight: 500,
        marginTop: 7,
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    subtitleItem: {
        display: 'inline-flex',
        whiteSpace: 'nowrap',
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
    image: {
        width: 'auto',
        height: 104,
        marginBottom: 24,
    },
    meta: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        ...theme.typography.subtitle2,
        margin: 0,
        fontWeight: 400,
        lineHeight: 1.55,
    },
    metaItem: {
        marginRight: 7,
        color: theme.palette.text.hint,

        '&:after': {
            content: "'·'",
            marginLeft: 7,
            fontSize: 12,
            color: theme.palette.text.disabled,
        },

        '&:last-child': {
            marginRight: 0,

            '&:after': {
                display: 'none',
            },
        },
    },
    avatar: {
        width: [theme.spacing(10), '!important'],
        height: [theme.spacing(10), '!important'],
        fontSize: '1.75rem !important',
        marginBottom: '24px !important',
        alignSelf: 'center',
    },
}), { name: 'Title' });

export default function Title(props) {
    const classes = useStyles(props);
    const {
        image,
        backTo,
        noBackTo,
        titleVariant,
        titleProps,
        title,
        options,
        noOptions,
        subtitle,
        noSubtitle,
        ...other
    } = props;

    const subtitleProps = [];

    return (
        <Wrapper>
            <div
                className={classes.root}
                {...other}
            >
                <div className={classes.actions}>
                    {(backTo && !noBackTo) && (
                        <div className={classes.actionsLeft}>
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
                        </div>
                    )}

                    {(options && !noOptions) && (
                        <div className={classes.actionsRight}>
                            {options}
                        </div>
                    )}
                </div>

                {image && (
                    <img
                        className={classes.image}
                        src={image}
                        alt=''
                    />
                )}

                <Typography
                    className={classes.title}
                    variant={titleVariant || 'h3'}
                    {...(titleProps || {})}
                >
                    {title || (data && data.name) || `No name`}
                </Typography>

                <Typography
                    className={classes.subtitle}
                    variant='body1'
                >
                    {(subtitle && !noSubtitle) ? subtitle : <>
                        {subtitleProps.map((prop, index) => (
                            <Typography component='span' className={classes.subtitleItem} key={index}>
                                <Typography component='span' className={classes.dot}>•</Typography><Typography className={classes.subtitleKey}>{prop.key}:</Typography> {prop.value}
                            </Typography>
                        ))}
                    </>}
                </Typography>
            </div>
        </Wrapper>
    );
}
