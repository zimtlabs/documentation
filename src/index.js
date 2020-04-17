import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { config } from 'dotenv';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';
import 'nprogress/nprogress.css';

import * as serviceWorker from './serviceWorker';
import App from './app/App';

const init = () => {
    config();
};

init();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
