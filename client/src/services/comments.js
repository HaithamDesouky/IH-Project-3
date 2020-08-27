import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  withCredentials: true
});

// export const listItems = () =>
//   api.get('/items/list').then(response => response.data);

export const createComment = comment =>
  api.post('/comments/create', comment).then(response => response.data);

export const loadComments = id =>
  api.get(`/comments/${id}`).then(response => response.data);
