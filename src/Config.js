import axios from 'axios';

const baseUrl = "http://localhost:8000/api/v1";
const api = axios.create({
  baseURL: baseUrl
});

export default api;
export { baseUrl };