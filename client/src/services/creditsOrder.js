import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  withCredentials: true
});

export const orderCredits = body =>
  api.post('/credits/buy', body).then(response => response.data);
