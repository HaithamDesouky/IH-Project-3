import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3020`,
  withCredentials: true
});

export const listboxes = () => api.get('/shop').then(response => response.data);
