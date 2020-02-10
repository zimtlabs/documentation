import React from 'react';
import { DateTimePicker } from '@material-ui/pickers';

export default function ZIMTDateTimePicker(props) {

    return (
        <DateTimePicker
            ampm={false}
            clearable
            disableFuture
            showTodayButton
            margin='normal'
            format='DD/MM/YYYY'
            {...props}
        />
    );
}

