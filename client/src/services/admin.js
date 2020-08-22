import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3020`,
  withCredentials: true
});

export const isAdmin = () =>
  api.get('/admin').then(response => {
    console.log(response.data);
    return response.data;
  });
