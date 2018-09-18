import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-unknown.firebaseio.com/'
});

export default instance;