import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3020",
  withCredentials: true,
});

export const listCredits = () =>
  api.get("/credits/list").then((response) => response.data);
