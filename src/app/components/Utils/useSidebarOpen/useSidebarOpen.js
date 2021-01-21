import { useMediaQuery, useTheme } from '@material-ui/core';
import { useRouter } from 'next/router';

export default function useSidebarOpen() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const router = useRouter();

    return isDesktop && !['/', '/company/about', '/company/contact', '/api'].find(route => route === '/' ? route === router.asPath : router.asPath.indexOf(route) > -1);
}
