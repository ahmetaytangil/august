import axios from 'axios';
import { useState, useEffect } from 'react'

// api
import instance from './ApiCreate'
import requests from './ApiRequests'

const useFetchApp = () => {
    const [data, setData] = useState([]);
    const [isPending, setisPending] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {
        let unmounted = true;
        
        axios.all([
            instance.get(`${requests.properties}?_limit=-1`),
            instance.get(requests.siteSettings)
        ]).then(result => {
            if (unmounted) {
                setData(result)
                setisPending(false);
            }
        }).catch(error => {
            if (unmounted) {
                setisPending(false);
                seterror(error.message);
            }
        });

        return () => unmounted = false;

    }, []);

    return {
        propertyDataP: isPending ? data : data[0].data,
        siteSettings: isPending ? data : data[1].data,
        isPending,
        error
    }
}

export default useFetchApp