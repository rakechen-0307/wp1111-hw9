import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:6934/`,
});

export default instance;

// instance.get('/hi').then((data) => console.log(data));
