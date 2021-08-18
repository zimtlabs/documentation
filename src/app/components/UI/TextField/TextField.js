import React, { useState, useEffect, useCallback } from 'react';
import { TextField, makeStyles } from '@material-ui/core';

import { FormLabel, Typography } from '../../';
import { debounce } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    input: {
        fontSize: '0.91rem',
        margin: 0,
        width: '100%',
    },
    formHelperTextRoot: {
        marginTop: 11,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 0,
        marginBottom: theme.spacing(0.5),
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: props => (props.title || props.description) ? theme.spacing(1.5) : 0,
    },
}), { name: 'ZIMTTextField' });

export default function ZIMTTextField(props) {
    const classes = useStyles(props);
    const [value, setValue] = useState(props.value);

    const { title, description, key, style, titleProps = {}, value: _value, onChange: _onChange, ...other } = props;

    useEffect(() => {
        if (value !== _value) setValue(_value);
        // eslint-disable-next-line
    }, [_value]);

    // eslint-disable-next-line
    const onUpdate = useCallback(
        debounce(event => _onChange(event), 300),
        []
    );

    const onChange = event => {
        setValue(event.target.value);

        onUpdate(event);
    };

    return (
        <div
            key={key}
            className={classes.root}
            style={style}
        >
            <div className={classes.header}>
                {title && (
                    <FormLabel
                        className={classes.title}
                        {...titleProps}
                    >
                        {title}
                    </FormLabel>
                )}

                {description && (
                    <Typography
                        variant='body2'
                        className={classes.description}
                    >
                        {description}
                    </Typography>
                )}
            </div>

            <TextField
                variant='outlined'
                color='primary'
                margin='normal'

                value={value}

                onChange={onChange}

                classes={{
                    root: classes.input,
                }}

                {...other}

                FormHelperTextProps={{
                    classes: {
                        root: classes.formHelperTextRoot,
                    },
                }}
            />
        </div>
    );
}
