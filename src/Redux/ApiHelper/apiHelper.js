import axios from 'axios';

const apiCreate = () => {
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

    const instance = axios.create({
        baseURL: REACT_APP_API_URL,
        responseType: 'json',
        headers: {
          Authorization: `Bearer ${REACT_APP_API_KEY}`
        }
    });

    return instance
}

export default apiCreate;