import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { lazyLoad } from './utils';

// Async load
const Main = lazy(() => import('./modules/Main'));

const routes = () => [
    { path: '/', component: lazyLoad(Main), options: {} },
];

const Routes = () => {
    // eslint-disable-next-line

    return (
        <Switch>
            {routes().map((item, index) => (
                <Route
                    path={item.path}
                    component={item.component}
                    key={index}
                    {...item.options}
                />
            ))}
            <Redirect
                from='*'
                to='/'
            />
        </Switch>
    );
};

export default Routes;
