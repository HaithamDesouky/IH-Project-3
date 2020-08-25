import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3020`,
  withCredentials: true
});

export const listLootBoxes = () =>
  api.get('/lootBoxes').then(response => response.data);
