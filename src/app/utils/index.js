import React, { useEffect } from 'react';
import GA from 'react-ga';

import Config from '../config';

export * from './theme';
export * from './colorManipulation';
export * from './parseMarkdown';

export const GAInit = () => {
    GA.initialize(Config.config.services.analytics);
};

export const GAPageView = () => {
    // Update the user's current page
    GA.set({ page: location.pathname });
    // Record a pageview for the given page
    GA.pageview(location.pathname + location.search);
};

export const copy = data => JSON.parse(JSON.stringify(data));

export const capitalize = value => {
    if (value && typeof value === 'string') {
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
    } else {
        return value;
    }
};

export const normalize = value => {
    const v = capitalize(value || '');

    return v.replace(/-/ig, ' ').replace(/api/ig, 'API').trim();
};

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

export const appSetup = async () => {
    try {
        console.log('App setup start');

        console.log('Removing stale cache');
        if (window && window.caches) {
            const names = await window.caches.keys();
            for (const name of names) {
                if (name.indexOf('document') > -1) await window.caches.delete(name);
            }
        }

        console.log('App is ready');
    } catch (error) {
        console.log('App setup failed: ', error);
        throw error;
    }
};

export const semverGreaterThan = (versionA, versionB) => {
    const versionsA = versionA.split(/\./g);

    const versionsB = versionB.split(/\./g);
    while (versionsA.length || versionsB.length) {
        const a = Number(versionsA.shift());

        const b = Number(versionsB.shift());
        // eslint-disable-next-line no-continue
        if (a === b) continue;
        // eslint-disable-next-line no-restricted-globals
        return a > b || isNaN(b);
    }
    return false;
};

export const getMeta = async () => {
    try {
        const headers = new Headers();

        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-store');

        let meta = await fetch('/meta.json', { headers });
        meta = await meta.json();

        return meta;
    } catch (error) {
        console.log(error);
    }
};
