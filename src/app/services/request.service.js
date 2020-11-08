import axios from 'axios';

import { getPublicFileUrl } from '../utils';

const API = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use(
    config => config,
    error => ({ error: error.response })
);

API.interceptors.response.use(
    response => {
        if (response.data) return response.data;
        return response;
    },
    error => ({ error: error.response })
);

const APIPages = axios.create();

APIPages.interceptors.request.use(
    config => config,
    error => ({ error: error.response })
);

const NOT_ACCEPTED_TYPES = ['text/html'];

APIPages.interceptors.response.use(
    response => {
        if (NOT_ACCEPTED_TYPES.some(type => response.headers['content-type'].indexOf(type) > -1)) throw new Error('No file found');

        if (response.data) return response.data;

        return response;
    },
    error => ({ error: error.response })
);

export class RequestService {

    get = (url, options = {}) => API.get(url, options);

    post = (url, body, options = {}) => API.post(url, body, options);

    delete = (url, options = {}) => API.delete(url, options);

    put = (url, body, options = {}) => API.put(url, body, options);

    getPage = (folders, subfolder, name = null) => APIPages.get(getPublicFileUrl(folders, subfolder, name));

}

export default new RequestService();
