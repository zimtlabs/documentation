/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import Config from '../config';

export const getGithubFileURL = (folders, file, name) => {
    let url = `${Config.config.services.github}/public/pages`;

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
