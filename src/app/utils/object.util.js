/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React from 'react';

import { Typography } from '../components';
import { validURL, capitalize, cammelCaseToTitle } from '.';

export const cleanKey = value => {
    return value && value.replace(/\./g, '');
};

export const castParam = (_value, options = { number: true }) => {
    try {
        let value = JSON.parse(decodeURIComponent(_value));

        if (typeof value === 'number' && typeof _value === 'string' && !options.number) value = String(value);

        return value;
    } catch (error) { }
    return decodeURIComponent(_value);
};

export function getObjectPropertyValueOne(object, keys) {
    if (!object || !keys) return object;

    if (typeof keys === 'string') {
        const _keys = keys.split('.').filter(Boolean).map(item => castParam(item));

        return getObjectPropertyValue(object, _keys);
    }
    else if (keys.length === 1) return object[keys[0]];
    else if (keys.length > 1 && object[keys[0]]) return getObjectPropertyValue(object[keys[0]], keys.slice(1));

    return undefined;
}

export function getObjectPropertyValue(object, ...keys) {
    if (!object || !keys) return object;

    let value;

    for (const key of keys) {
        value = getObjectPropertyValueOne(object, key);

        if (value) break;
    }

    return value;
}

export function setObjectValue(object, keys, value) {
    if (!object || !keys) return object;

    if (typeof keys === 'string') {
        const _keys = keys.split('.').filter(Boolean).map(item => castParam(item));

        return setObjectValue(object, _keys, value);
    }
    else if (keys.length === 1 && value !== undefined) {
        if (
            (Array.isArray(object) && typeof keys[0] === 'number') ||
            (object instanceof Object && typeof keys[0] === 'string')
        ) object[typeof keys[0] === 'string' ? cleanKey(keys[0]) : keys[0]] = value;
    }
    else if (keys.length > 1) {
        if (!object[keys[0]]) object[cleanKey(keys[0])] = typeof keys[1] === 'number' ? [] : {};

        return setObjectValue(object[keys[0]], keys.slice(1), value);
    }

    return object;
}

export function removeObjectValue(object, keys) {
    if (!object || !keys) return object;

    if (typeof keys === 'string') {
        const _keys = keys.split('.').filter(Boolean).map(item => castParam(item));

        return removeObjectValue(object, _keys);
    }
    else if (keys.length === 1) {
        if (Array.isArray(object) && typeof keys[0] === 'number') object.splice(keys[0], 1);
        else if (object instanceof Object && typeof keys[0] === 'string') delete object[keys[0]];
    }
    else if (keys.length > 1) {
        if (!object[keys[0]]) return object;

        return removeObjectValue(object[keys[0]], keys.slice(1));
    }

    return object;
}

export const generateItemValues = (value, props, classes) => {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || !value) {
        const v = String(value || '');
        return (
            <Typography variant='body2'>
                {validURL(v) ? <a href={v} target='_blank' rel='noopener noreferrer'>{v}</a> : <span className={classes.itemString}>{v}</span>}
            </Typography>
        );
    } else if (Array.isArray(value)) {
        return (
            <ul className={classes.itemArray}>
                {value.map((item, index) => (
                    <li
                        className={classes.arrayItem}
                        key={index}
                    >
                        {generateItemValues(item, props, classes)}
                    </li>
                ))}
            </ul>
        );
    } else {
        return (
            <div className={classes.itemObject}>
                {Object.keys(value).length === 0 ? <>
                    <p className={classes.itemString}>No properties</p>
                </> : <>
                    {Object.keys(value).map((key, index) => (
                        <div
                            className={classes.objectItem}
                            key={index}
                        >
                            <Typography variant='body2' className={classes.objectItemTitle}>{capitalize(props.normalizeKeys ? cammelCaseToTitle(key) : key)}</Typography>
                            {generateItemValues(value[key], props, classes)}
                        </div>
                    ))}
                </>}
            </div>
        );
    }
};

export const generateComplexItems = (values, props, classes) => {
    if (values) {
        const items = [];

        Object.keys(values).forEach((key, index) => {
            const value = values[key];

            const item = (
                <div className={classes.item} key={index}>
                    <Typography variant='h6' className={classes.itemTitle}>{capitalize(props.normalizeKeys ? cammelCaseToTitle(key) : key)}</Typography>
                    <div className={classes.itemContent}>
                        {generateItemValues(value, props, classes)}
                    </div>
                </div>
            );

            items.push(item);
        });

        return items.map(item => item);
    }
};

