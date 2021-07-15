import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        padding: `30px ${theme.CONST.side_padding}px`,
        width: '100%',
    },
}), { name: 'ZIMTTabPanel' });

export default function ZIMTTabPanel(props) {
    const classes = useStyles();
    const { className, children, value, index, hide, ...other } = props;

    return <>
        {(hide && value === index) && (
            <div
                {...other}
                className={clsx(classes.root, className)}
            >
                {children}
            </div>
        )}

        {!hide && (
            <div
                {...other}
                className={clsx(classes.root, className)}
            >
                {children}
            </div>
        )}
    </>;
}
