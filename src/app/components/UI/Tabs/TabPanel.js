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
    const { children, value, index, className, ...other } = props;

    return <>
        {value === index && (
            <div
                className={clsx(classes.root, className)}
                {...other}
            >
                {children}
            </div>
        )}
    </>;
}

