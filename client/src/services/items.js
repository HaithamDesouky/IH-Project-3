import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  withCredentials: true
});

export const listItems = () =>
  api.get('/items/list').then(response => response.data);

export const createItem = item => {
  const formBody = new window.FormData();
  formBody.append('name', item.name);
  formBody.append('itemType', item.itemType);
  formBody.append('description', item.description);
  formBody.append('photo', item.photo);
  return api.post('/items', formBody).then(response => response.data);
};
