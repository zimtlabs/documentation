import { useMediaQuery, useTheme } from '@material-ui/core';
import { useRouter } from 'next/router';

import { noSidebarRoutes } from '../../';

export default function useSidebarOpen() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const router = useRouter();

    return isDesktop && !noSidebarRoutes.find(route => route === '/' ? route === router.asPath : router.asPath.indexOf(route) === 0);
}
