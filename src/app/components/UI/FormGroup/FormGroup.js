import React from 'react';
import { FormGroup, makeStyles } from '@material-ui/core';

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

