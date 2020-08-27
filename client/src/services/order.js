import axios from 'axios';

const api = axios.create({
  baseURL: '${process.env.REACT_APP_API_BASE_URL}',
  withCredentials: true
});

export const createOrder = body =>
  api.post('/order', body).then(response => response.data);

export const loadOrders = body =>
  api.get('/order/load', body).then(response => response.data);
