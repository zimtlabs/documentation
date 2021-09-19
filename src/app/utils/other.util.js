/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React, { useEffect } from 'react';

import { getObjectPropertyValue } from './object.util';

function getTemplateStringVariables(str = '') {
    const arr = str.split('{').filter(item => item.indexOf('}') > -1);
    const vars = [];

    arr.forEach(item => vars.push(item.split('}').filter(Boolean)[0]));

    return vars;
}

export const parseTemplateString = (str = '', asset = {}) => {
    try {
        const vars = getTemplateStringVariables(str);
        const values = {};

        vars.forEach(v => {
            let key = v;

            if (v.indexOf('asset_id') > -1) key = 'id';

            values[v] = getObjectPropertyValue(asset, key);
        });

        Object.keys(values).forEach(v => str = str.replace(`{${v}}`, values[v]));
    } catch (error) {
        console.log(error);
    }

    return str;
};

export const numWithCommas = (value, delimiter = ',') => value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter) : 0;

export const wait = (milliseconds = 600) => new Promise(resolve => setTimeout(resolve, milliseconds));

export const copy = data => {
    try {
        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

export const normalizeSimple = value => {
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';

    if (value !== undefined) return String(value);

    return value;
};

export const normalize = (value, cap = true) => {
    if (!value) return value;

    let v = String(value);

    if (cap) v = capitalize(v || '');

    return v
        .replace(/(-|_)/ig, ' ')
        .replace(/\b(id)\b/ig, 'ID')
        .replace(/\b(api)\b/ig, 'API')
        .replace(/\b(ui)\b/ig, 'UI')
        .trim();
};

export const capitalize = (value, lowercase = true) => {
    switch (value) {
        case 'id':
            return 'ID';
        case 'apiKeys':
            return 'API keys';
        case 'organizationApps':
            return 'Organization apps';
        default:
            if (value && typeof value === 'string') {
                const v = lowercase ? value.toLowerCase() : value;

                return `${v.charAt(0).toUpperCase()}${v.slice(1)}`;
            }
            else return value;
    }
}

export function cammelCaseToTitle(value) {
    let newValue = (value && value.split(/(?=[A-Z])/).join(' ').toLowerCase()) || '';
    newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);

    return newValue;
}

export function useInterval(callback, delay) {
    const savedCallback = React.useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}

export const parse = value => {
    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
};

export function arrayMoveItem(array, old_index, new_index) {
    if (new_index >= array.length) {
        let k = new_index - array.length + 1;

        while (k--) array.push(undefined);
    }

    array.splice(new_index, 0, array.splice(old_index, 1)[0]);
};

export const debounce = (fn, delay) => {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
};

function makeUnique(hash, unique, i = 1) {
    const uniqueHash = i === 1 ? hash : `${hash}-${i}`;

    if (!unique[uniqueHash]) {
        unique[uniqueHash] = true;
        return uniqueHash;
    }

    return makeUnique(hash, unique, i + 1);
}

export function textToHash(text, unique = {}) {
    return makeUnique(
        encodeURI(
            text
                .toLowerCase()
                .replace(/<\/?[^>]+(>|$)/g, '') // remove HTML
                .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, '')
                .replace(/[!@#$%^&*()=_+[\]{}`~;:'"|,.<>/?\s]+/g, '-')
                .replace(
                    /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                    '',
                ) // remove emojis
                .replace(/-+/g, '-')
                .replace(/^-|-$/g, ''),
        ),
        unique,
    );
}

