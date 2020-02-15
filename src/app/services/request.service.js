import axios from 'axios';
import NProgress from 'nprogress';

import { getPublicFileUrl } from '../utils';

NProgress.configure({
    template: `
    <div class="nprogress-bar" role="bar">
      <dt></dt>
      <dd></dd>
    </div>
  `,
});

const API = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use(config => {
    return config;
}, error => {
    return ({ error: error.response })
});

API.interceptors.response.use(response => {
    if (response.data) {
        return response.data;
    }
    return response;
}, error => {
    return ({ error: error.response })
});


const APIPages = axios.create();

APIPages.interceptors.request.use(config => {
    NProgress.start();

    return config;
}, error => {
    NProgress.done();
    return ({ error: error.response })
});

const NOT_ACCEPT_TYPES = ['text/html'];

APIPages.interceptors.response.use(response => {
    NProgress.done();

    if (NOT_ACCEPT_TYPES.some(type => response.headers['content-type'].indexOf(type) > -1)) throw new Error('No file found');

    if (response.data) {
        return response.data;
    }
    return response;
}, error => {
    NProgress.done();
    return ({ error: error.response })
});


export class RequestService {

    get = (url, config = {}) => API.get(url, config);

    getPage = (folders, subfolder, name = null) => {
        return APIPages.get(getPublicFileUrl(folders, subfolder, name));
    };

    post = (url, body) => API.post(url, body);

    delete = url => API.delete(url);

    put = (url, body) => API.put(url, body);

}

export default new RequestService();
