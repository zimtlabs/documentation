/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { Typography } from '../../Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        'align-items': 'center',
        'justify-content': 'center',
        padding: '13px 15px',
    },
    total: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: 5,
    },
}), { name: 'QPTablePagination' });

export default function QPTablePagination(props) {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);

    const { loading, pagination = {}, limit: _limit, size, onPaginationChange, type, showTotal, ...other } = props;

    const total = pagination.total || 0;
    const checkPage = props.page !== page;

    useEffect(() => {
        if (!loading) {
            const limit = _limit || 10;
            let c = total > limit ? Math.ceil(total / limit) : 1;
            if (props.page < c && c > 10) c = 10;
            if (props.page >= c && pagination.hasNext) c = props.page + 1;

            setCount(c);
            setPage(props.page);
        }

        // eslint-disable-next-line
    }, [pagination.total, pagination.hasNext, _limit, checkPage, loading]);

    const onChange = (event, page) => {
        if (onPaginationChange) onPaginationChange(page);
    };

    return (
        <div className={classes.root}>
            <Pagination
                classes={{
                    root: classes.root,
                }}
                count={count}
                onChange={onChange}
                showFirstButton
                showLastButton
                disabled={loading}
                page={page}
                {...other}
            />
            {showTotal && (
                <Typography
                    className={classes.total}
                    variant='body2'
                >
                    {total} {type || ''} found
                </Typography>
            )}
        </div>
    );
}

