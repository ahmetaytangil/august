import { useState, useEffect } from 'react';
import instance from './ApiCreate';

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setisPending] = useState(true);

    useEffect(() => {
        let unmounted = true;

        (async () => {
            await instance.get(url).then(result => {
                if (unmounted) {
                    setdata(result.data);
                    setisPending(false);
                }
            }).catch(error => {
                console.error(error);
            });
        })();

        return () => unmounted = false;

    }, [url]);

    return { data, isPending };
}

export default useFetch;