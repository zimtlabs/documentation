
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
                    { title: 'API', pathname: '/sdk/javascript/api' },
                ]
            },
        ],
    },
    { title: 'Hub API', pathname: '/api' },

    { type: 'divider' },

    { title: 'About', pathname: '/company/about' },
    { title: 'Contact', pathname: '/company/contact' },
];

export default Menu;
