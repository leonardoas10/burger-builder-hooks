import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-b7d31.firebaseio.com/'
});

export default instance;