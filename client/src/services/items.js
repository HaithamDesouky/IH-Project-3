import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3020`,
  withCredentials: true,
});

export const listItems = () =>
  api.get("/items/list").then((response) => response.data);

export const createItem = (item) => {
  const formBody = new window.FormData();
  formBody.append("name", item.name);
  formBody.append("itemType", item.itemType);
  formBody.append("description", item.description);
  formBody.append("photo", item.photo);
  return api.post("/items", formBody).then((response) => response.data);
};
