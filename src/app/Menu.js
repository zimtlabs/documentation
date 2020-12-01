/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
const Menu = [
    { title: 'API', pathname: '/api', button: true },
    {
        title: 'SDK',
        pathname: '/sdk',
        children: [
            {
                title: 'JavaScript',
                pathname: '/sdk',
                subheader: true,
                children: [
                    {
                        title: 'Getting started',
                        pathname: '/sdk/javascript/getting-started',
                        children: [
                            { title: 'Installation', pathname: '/sdk/javascript/getting-started/installation' },
                            { title: 'Usage', pathname: '/sdk/javascript/getting-started/usage' },
                        ],
                    },
                    {
                        title: 'API',
                        pathname: '/sdk/javascript/api',
                        children: [
                            { title: 'General', pathname: '/sdk/javascript/api/general' },
                            { title: 'Hub', pathname: '/sdk/javascript/api/hub' },
                            { title: 'API keys', pathname: '/sdk/javascript/api/api-keys' },
                            { title: 'Apps', pathname: '/sdk/javascript/api/apps' },
                            { title: 'Analytics', pathname: '/sdk/javascript/api/analytics' },
                            { title: 'Organizations', pathname: '/sdk/javascript/api/organizations' },
                            { title: 'Accounts', pathname: '/sdk/javascript/api/accounts' },
                            { title: 'Teams', pathname: '/sdk/javascript/api/teams' },
                            { title: 'Permissions', pathname: '/sdk/javascript/api/permissions' },
                            { title: 'Assets', pathname: '/sdk/javascript/api/assets' },
                            { title: 'Events', pathname: '/sdk/javascript/api/events' },
                            { title: 'Documents', pathname: '/sdk/javascript/api/documents' },
                            { title: 'Strategies', pathname: '/sdk/javascript/api/strategies' },
                            { title: 'Services', pathname: '/sdk/javascript/api/services' },
                            { title: 'Hooks', pathname: '/sdk/javascript/api/hooks' },
                        ],
                    },
                ]
            },
        ],
    },
    {
        title: 'Tutorials',
        pathname: '/tutorials',
        children: [
            {
                title: 'Create an Asset',
                pathname: '/tutorials/create-an-asset',
                children: [
                    { title: 'Getting started', pathname: '/tutorials/create-an-asset/getting-started' },
                    { title: 'Create permissions', pathname: '/tutorials/create-an-asset/create-permissions' },
                    { title: 'Create asset with form', pathname: '/tutorials/create-an-asset/create-asset-form' },
                    { title: 'Create events with form', pathname: '/tutorials/create-an-asset/create-asset-form-events' },
                    { title: 'Create asset with JSON', pathname: '/tutorials/create-an-asset/create-asset-json' },
                    { title: 'Display in Viewer', pathname: '/tutorials/create-an-asset/display-in-viewer' },
                ],
            },
            {
                title: 'Create a Viewer App',
                pathname: '/tutorials/create-viewer-app',
                children: [
                    { title: 'Getting started', pathname: '/tutorials/create-viewer-app/getting-started' },
                    { title: 'Create an API key', pathname: '/tutorials/create-viewer-app/create-api-key' },
                    { title: 'Create permission', pathname: '/tutorials/create-viewer-app/create-permission' },
                    { title: 'Display in Viewer', pathname: '/tutorials/create-viewer-app/display-in-viewer' },
                ],
            },
            {
                title: 'Postman',
                pathname: '/tutorials/postman',
                children: [
                    { title: 'Getting started', pathname: '/tutorials/postman/getting-started' }
                ],
            },
        ],
    },

    { type: 'divider' },

    { title: 'About', pathname: '/company/about' },
    { title: 'Contact', pathname: '/company/contact' },

    { type: 'divider' },
];

export default Menu;
