import axios from 'axios';

const AUTH_TOKEN = process.env.REACT_APP_API_KEY
const API_URL = 'https://apanel.augustproperty.app'

const instance = axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`
    }
})

export default instance