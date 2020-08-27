import React, { useEffect } from 'react';
import Config from '../config';

export { default as lazyLoad } from './lazyLoad';
export * from './formatDate';
export * from './validators';
export * from './colorManipulation';
export * from './parseMarkdown';
export { default as history } from './history';
export { default as theme } from './theme';

export const numWithCommas = (val, delimiter = ',') => {
    return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter) : 0;
};

export const wait = (milliseconds = 600) => new Promise(resolve => setTimeout(resolve, milliseconds));

export async function blobToBase64(blob) {
    return new Promise(resolve => {
        const reader = new FileReader();

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            const base64data = reader.result;

            resolve(base64data);
        }
    });
}

export function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    const byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    const ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    const ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    const blob = new Blob([ab], { type: mimeString });
    return blob;
}

export function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = reject;
    });
}

export const copy = data => JSON.parse(JSON.stringify(data));

export function getParams(str) {
    let queryString = str || window.location.search || '';
    queryString = queryString.replace(/.*?\?/, '');
    const params = {};

    if (queryString.length) {
        const keyValPairs = queryString.split('&');

        // eslint-disable-next-line
        for (const pair in keyValPairs) {
            const key = keyValPairs[pair].split('=')[0];
            if (!key.length) {
                continue;
            };
            if (typeof params[key] === 'undefined') {
                params[key] = keyValPairs[pair].split('=')[1];
            }
        }
    }
    return params;
}

export function checkPermissions(permissions, ...args) {
    return args.some(p => permissions.indexOf(p) > -1);
}

export function secondsToDuration(s, showSeconds = false) {
    let seconds = parseInt(s, 10);

    const days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    let result = '';

    if (days) {
        result += `${days} d `;
    }
    if (hours) {
        result += `${hours} h `;
    }

    result += `${minutes} m`;

    if (showSeconds) {
        result += ` ${seconds} s`
    }

    return result;
}

export function validURL(str) {
    // check for base64
    try {
        const decoded = atob(str);
        if (decoded) {
            return false;
        }
    } catch (error) { }

    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    return !!pattern.test(str);
}

export const capitalize = value => {
    if (value && typeof value === 'string') {
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
    } else {
        return value;
    }
}

export function stringToArray(value) {
    let result = (value && value.split(',')) || [];
    result = result.map(item => item.trim()).filter(Boolean);

    return result;
};

export function cammelCaseToTitle(value) {
    let newValue = (value && value.split(/(?=[A-Z])/).join(' ').toLowerCase()) || '';
    newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);

    return newValue;
}

export const URIEncodeString = value => {
    try {
        return (value && btoa(value)) || '';
    } catch (error) {
        return value;
    }
}

export const URIDecodeString = value => {
    try {
        return (value && atob(value)) || '';
    } catch (error) {
        return value;
    }
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

export function validJSON(str) {
    try {
        JSON.parse(str);
    } catch (error) {
        return false;
    }
    return true;
}

export const parseError = error => {
    return error.message || (error.data && (error.data.message || error.data.reason || (error.data.meta && error.data.meta.message && error.data.meta.message.split(':')[1])));
};

export const getDocumentURL = document => {
    return `${Config.config.api.core}/documents/${document._id}`
};

export const isRootPath = () => {
    return window.location.pathname === '/' || window.location.pathname.indexOf('company') > -1;
};

export const uppercase = value => {
    if (!value) return '';

    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
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

export const getGithubFileURL = (folders, file, name) => {
    let url = `https://github.com/zimtlabs/documentation/blob/master/public/pages`;
    name = name || `${file || folders[folders.length - 1]}.md`;

    if (folders) folders.forEach(folder => url += `/${folder}`);
    if (file) url += `/${file}`;
    if (name) url += `/${name}`;

    return url;
};

export const getRawGithubFileURL = (folders, file, name) => {
    let url = `https://raw.githubusercontent.com/zimtlabs/documentation/master/public/pages`;
    name = name || `${file || folders[folders.length - 1]}.md`;

    if (folders) folders.forEach(folder => url += `/${folder}`);
    if (file) url += `/${file}`;
    if (name) url += `/${name}`;

    return url;
};

const ROOT_PAGES_URL = '/pages';

export const getPublicFileUrl = (folders, file, name = null) => {

    if (!folders.length) {
        if (!name) return `${ROOT_PAGES_URL}/${file}/${file}.md`;
        else return `${ROOT_PAGES_URL}/${file}/${name}`;
    }
    name = name || `${file || folders[folders.length - 1]}.md`;

    let url = `${ROOT_PAGES_URL}`;
    folders.forEach(folder => url += `/${folder}`);
    url += `/${file}/${name}`;

    return url;
};

