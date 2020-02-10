import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { lazyLoad } from '../../utils';

const Home = lazy(() => import('./containers/Home'));
const About = lazy(() => import('./containers/About'));
const Contact = lazy(() => import('./containers/Contact'));
const Page = lazy(() => import('./containers/Page'));

const routes = () => [
    { path: '/', component: lazyLoad(Home), options: { exact: true } },
    { path: '/company/about', component: lazyLoad(About), options: { exact: true } },
    { path: '/company/contact', component: lazyLoad(Contact), options: { exact: true } },
    { path: '/:folder', component: lazyLoad(Page), options: {} },
];

const Routes = () => (
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

export default Routes;
