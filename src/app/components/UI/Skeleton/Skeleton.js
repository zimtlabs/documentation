import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Skeleton as SkeletonItem } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',

        '& > *': {
            width: '100%',
        },
    },
    title: {
        height: 44,
        margin: '75px 0 54px',
    },
    content: {
        '& > *': {
            marginBottom: 30,

            '&:last-child': {
                marginBottom: 0,
            },
        },
    },
}), { name: 'Skeleton' });

export default function Skeleton(props) {
    const classes = useStyles(props);

    const title = (
        <SkeletonItem variant='rect' className={classes.title} />
    );

    const content = (
        <div className={classes.content}>
            <SkeletonItem variant='rect' style={{ height: 145 }} />
            <SkeletonItem variant='rect' style={{ width: '80%', height: 37 }} />
            <SkeletonItem variant='rect' style={{ width: '40%', height: 37 }} />
        </div>
    );

    return (
        <div className={classes.root}>
            {title}
            {content}
        </div>
    );
}
