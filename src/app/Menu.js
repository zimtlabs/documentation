
const Menu = [
    {
        title: 'Getting started',
        pathname: '/getting-started',
        children: [
            { title: 'Installation', pathname: '/getting-started/installation' },
        ],
    },
    { title: 'API', pathname: '/api' },

    { type: 'divider' },

    { title: 'About', pathname: '/company/about' },
    { title: 'Contact', pathname: '/company/contact' },
];

export default Menu;
