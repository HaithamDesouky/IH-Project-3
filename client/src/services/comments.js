import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3020`,
  withCredentials: true
});

// export const listItems = () =>
//   api.get('/items/list').then(response => response.data);

export const createComment = comment =>
  api.post('/comments/create', comment).then(response => response.data);

export const loadComments = id =>
  api.get(`/comments/${id}`).then(response => response.data);
