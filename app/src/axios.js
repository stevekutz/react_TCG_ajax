import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// this will override setting index.js
instance.defaults.headers.common['Authorization'] = 'Auth Token from INSTANCE'


export default instance;