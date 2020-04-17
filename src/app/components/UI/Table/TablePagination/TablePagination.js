import React from 'react';
import { TablePagination, makeStyles } from '@material-ui/core';

import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import { IconButton } from '../../../';

const useStyles = makeStyles(theme => ({
    root: {
        overflowX: 'auto',
    },
    actions: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}), { name: 'ZIMTTablePagination' });

function TablePaginationActions(props) {
    const classes = useStyles();
    const { count, page, rowsPerPage, onChangePage } = props;

    const onFirstPageButtonClick = event => {
        onChangePage(event, 0);
    };

    const onBackButtonClick = event => {
        onChangePage(event, page - 1);
    };

    const onNextButtonClick = event => {
        onChangePage(event, page + 1);
    };

    const onLastPageButtonClick = event => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.actions}>
            <IconButton
                onClick={onFirstPageButtonClick}
                disabled={page === 0}
            >
                <FirstPageIcon />
            </IconButton>
            <IconButton
                onClick={onBackButtonClick}
                disabled={page === 0}
            >
                <KeyboardArrowLeft />
            </IconButton>
            <IconButton
                onClick={onNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            >
                <KeyboardArrowRight />
            </IconButton>
            <IconButton
                onClick={onLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            >
                <LastPageIcon />
            </IconButton>
        </div>
    );
}

export default function ZIMTTablePagination(props) {
    const classes = useStyles();

    return (
        <TablePagination
            rowsPerPageOptions={[15, 25, 35, { label: 'All', value: -1 }]}
            component='div'
            ActionsComponent={TablePaginationActions}
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

