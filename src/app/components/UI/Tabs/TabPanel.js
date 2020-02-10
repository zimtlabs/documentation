import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '35px 0',
        width: '100%',
    },
}), { name: 'ZIMTTabPanel' });

export default function ZIMTTabPanel(props) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;

    return <>
        {value === index && (
            <div
                className={classes.root}
                {...other}
            >
                {children}
            </div>
        )}
    </>;
}

