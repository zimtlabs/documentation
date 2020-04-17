import { useEffect, useState } from 'react';
import { history } from '../../../utils';

export default function useRoute() {
    const [current, setCurrent] = useState(window.location);

    useEffect(() => {
        const unlisten = history.listen(location => {
            if (
                current.pathname !== location.pathname ||
                current.hash !== location.hash
            ) setCurrent(location);
        });

        return () => unlisten();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [current, current.pathname];
}
