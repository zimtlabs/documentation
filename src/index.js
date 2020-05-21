import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { config } from 'dotenv';
import GA from 'react-ga';

import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';
import 'nprogress/nprogress.css';

import * as serviceWorker from './serviceWorker';
import App from './app/App';
import Config from './app/config';
import { history } from './app/utils';

const init = () => {
    config();
    const dev = Config.config.dev;

    // Inits in production
    if (!dev) {
        GA.initialize('UA-157314622-4');
        // Initial app open pageview record
        GA.pageview(window.location.pathname + window.location.search);
        // Routing record
        history.listen(location => {
            // Update the user's current page
            GA.set({ page: location.pathname });
            // Record a pageview for the given page
            GA.pageview(location.pathname + location.search);
        });
    }
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
