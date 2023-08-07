import axios from 'axios';

const api = axios.create({
  baseURL: 'https://toolstoremember.herokuapp.com',
});

export default api;
