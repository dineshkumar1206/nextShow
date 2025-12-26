import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5175/api`,
  //baseURL: `https://amigowebster.in/raai2k_backend/api`,
  withCredentials: true,
});

export default api;
