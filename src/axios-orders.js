import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-98cbe.firebaseio.com/'
});


export default instance;