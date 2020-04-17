
const Menu = [
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
                            { title: 'Accounts', pathname: '/sdk/javascript/api/accounts' },
                            { title: 'Analytics', pathname: '/sdk/javascript/api/analytics' },
                            { title: 'Organizations', pathname: '/sdk/javascript/api/organizations' },
                            { title: 'Permissions', pathname: '/sdk/javascript/api/permissions' },
                            { title: 'Assets', pathname: '/sdk/javascript/api/assets' },
                            { title: 'Events', pathname: '/sdk/javascript/api/events' },
                            { title: 'Documents', pathname: '/sdk/javascript/api/documents' },
                            { title: 'Strategies', pathname: '/sdk/javascript/api/strategies' },
                        ],
                    },
                ]
            },
        ],
    },
    { title: 'API', pathname: '/api' },

    { type: 'divider' },

    { title: 'About', pathname: '/company/about' },
    { title: 'Contact', pathname: '/company/contact' },
];

export default Menu;
