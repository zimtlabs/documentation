import React from 'react';
import { FormGroup, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        flexWrap: 'nowrap',
        flexDirection: 'column',

        '@media only screen and (min-width: 720px)': {
            flexDirection: props => props.row ? 'row' : 'column',

            '& > *': {
                width: props => (props.row && !props.widthAuto) ? '50%' : 'initial',
                marginRight: [theme.spacing(1), '!important'],
                marginLeft: [theme.spacing(1), '!important'],
            },
        },
    },
}), { name: 'ZIMTFormGroup' });

export default function ZIMTFormGroup(props) {
    const classes = useStyles(props);
    const { widthAuto, ...other } = props;

    return (
        <FormGroup
            {...other}
            classes={{
                root: classes.root,
            }}
        />
    );
}

