// eslint-disable-next-line
import React, { useState } from 'react';
import { copy } from '../../../utils';

function useForm(validate = null) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(false);

    const onChange = (event, custom = null) => {
        if (!event) {
            const _values = {
                ...values,
                [custom.name]: custom.value,
            };
            if (JSON.stringify(values) !== JSON.stringify(_values)) {
                setValues(_values);
            }

            return;
        }

        event.persist();

        const { name, value } = event.target;

        const _values = {
            ...values,
            [name]: value,
        };
        if (JSON.stringify(values) !== JSON.stringify(_values)) {
            setValues(_values);
        }

        // Check errors and valid

        let _errors = '';
        if (validate) {
            _errors = validate(_values);
        }
        if (JSON.stringify(errors) !== JSON.stringify(_errors)) {
            setErrors(_errors);
        }

        setValid(Object.keys(_errors).length === 0);
    };

    const setValue = (key, value) => {
        const v = { ...values };

        v[key] = value;

        setValues(v);
    };

    const _setValues = _values => {
        const v = { ...values };

        Object.keys(_values).map(key => {
            v[key] = _values[key];

            return key;
        });

        setValues(v);
    };

    const clear = () => {
        setValues({});
    };

    // Custom additions
    const setGroupValue = (group, index, key, value) => {
        const v = copy(values);

        if (!v[group]) v[group] = [];

        v[group][index][key] = value;

        setValues(v);
    };

    const newGroupItem = (group, item) => {
        const v = copy(values);

        v[group].push(item);

        setValues(v);
    };

    const deleteGroupItem = (group, index) => {
        const v = copy(values);

        v[group].splice(index, 1);

        setValues(v);
    };

    return {
        values,
        errors,
        valid,
        onChange,
        setValues: _setValues,
        clear,
        setValue,
        setGroupValue,
        deleteGroupItem,
        newGroupItem,
        setValid
    };
}

export default useForm;
