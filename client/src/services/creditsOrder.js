import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3020',
  withCredentials: true
});

export const orderCredits = body =>
  api.post('/credits/buy', body).then(response => response.data);
