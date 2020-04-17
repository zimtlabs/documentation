import { useMediaQuery } from '@material-ui/core';

import { theme } from '../../../App';
import { isRootPath } from '../../../utils';

export default function useSidebarOpen() {
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return isDesktop && !isRootPath();
}
