/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import isURL from 'is-url';

export const validateMinMax = (value, min, max) => {
    try {
        let result = !!value;

        if (min !== undefined) result = result && (Number(value) >= min);
        if (max !== undefined) result = result && (Number(value) <= max);

        return result;
    } catch (error) {
        return false;
    }
};

export function validURL(str) {
    // check for base64
    try {
        const decoded = atob(str);

        if (decoded) return false;
    } catch (error) { }

    return !!isURL(str);
}

export function validJSON(str) {
    try {
        JSON.parse(str);
    } catch (error) {
        return false;
    }
    return true;
}

export const is = (value, type = 'email', options = { element: false }) => {
    let pattern;

    switch (type) {
        case 'simple':
            const isElement = !!(value && (value.elementType || value['$$typeof']));

            return (
                typeof value === 'string' ||
                typeof value === 'number' ||
                typeof value === 'boolean' ||
                [undefined, null].indexOf(value) > -1 ||
                (isElement && options.element)
            );
        case 'localhost':
            return process.browser && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
        case 'email':
            pattern = /\S+@\S+\.\S+/;

            return pattern.test(value);
        case 'phone':
            pattern = /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

            return pattern.test(value) && !Number.isInteger(value);
        case 'id':
            return typeof value === 'string' && value.indexOf('0x') > -1;
        default:
            return;
    }
};
