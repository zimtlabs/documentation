import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';

import ArrowBack from '@material-ui/icons/KeyboardBackspace';

import { Typography, IconButton, Tooltip, Wrapper } from '../../../components';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'flex-start',
        textAlign: 'left',
    },
    title: props => ({
        ...(theme.typography[(props.titleProps && props.titleProps.variant) || 'd1'] || {}),
        color: theme.palette.text.primary,
        width: '100%',
        wordBreak: 'break-word',
        textAlign: props.align || 'left',
    }),
    description: {
        width: '100%',
        color: theme.palette.text.secondary,
        wordBreak: 'break-word',
        fontWeight: 500,
        marginTop: 15,
        textAlign: props => props.align || 'left',
    },
    actions: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        overflowY: 'auto',
        width: '100%',
    },
    actionsLeft: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        justifySelf: 'flex-start',
        width: '100%',
    },
    actionsRight: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        justifySelf: 'flex-end',
        marginLeft: theme.spacing(3),
        width: '100%',
    },
}), { name: 'Title' });

export default function Title(props) {
    const classes = useStyles(props);

    const object = props.object || {};
    const data = (object.object && object.object.data) || object.data || object;

    return (
        <Wrapper>
            <div
                className={clsx(classes.root, props.className)}
                style={props.style || {}}
            >
                {props.above}

                {(props.backTo || props.actions) && (
                    <div className={classes.actions}>
                        {(props.backTo && !props.noBackTo) && (
                            <div className={classes.actionsLeft}>
                                <Tooltip
                                    title='Back'
                                    placement='right'
                                >
                                    <span>
                                        <Link
                                            href={props.backTo}
                                            passHref
                                        >
                                            <IconButton
                                                component='a'
                                                color='inherit'
                                            >
                                                <ArrowBack />
                                            </IconButton>
                                        </Link>
                                    </span>
                                </Tooltip>
                            </div>
                        )}

                        {(props.actions && !props.noActions) && (
                            <div className={classes.actionsRight}>
                                {props.actions}
                            </div>
                        )}
                    </div>
                )}

                {props.aboveTitle}

                <Typography
                    className={classes.title}
                    variant='h1'
                    {...(props.titleProps || {})}
                >
                    {props.title || (data && data.name) || `No name`}
                </Typography>

                {props.description && (
                    <Typography
                        className={classes.description}
                        variant='body1'
                        {...(props.descriptionProps || {})}
                    >
                        {props.description}
                    </Typography>
                )}

                {props.children}
            </div>
        </Wrapper>
    );
}
