import React from 'react';
import { FormGroup, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { FormHelperText } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'grid',
        gridGap: 16,
        gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr))',

        '@media only screen and (min-width: 720px)': {
            gridTemplateColumns: props => (props.row && !props.widthAuto) ? 'repeat(50%, minmax(250px, 1fr))' : 'initial',
        },
    },
    error: {
        ...theme.typography.body1,
        margin: '34px 0 !important',
        color: theme.palette.error.main,
    },
}), { name: 'ZIMTFormGroup' });

export default function ZIMTFormGroup(props) {
    const classes = useStyles(props);

    const { widthAuto, error, noErrorText, className, ...other } = props;

    return (
        <>
            <FormGroup
                classes={{
                    root: classes.root,
                }}
                className={clsx(className)}
                {...other}
            />

            {error && !noErrorText && <FormHelperText className={classes.error}>{error}</FormHelperText>}
        </>
    );
}

