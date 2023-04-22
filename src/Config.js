import axios from 'axios';

// const baseUrl = "http://localhost:8000";
// const apiUrl = "http://localhost:8000/api/v1";
const baseUrl = "http://34.135.155.173:8000";
const apiUrl = "http://34.135.155.173:8000/api/v1";
const api = axios.create({
  baseURL: apiUrl
});
export default api;
export { baseUrl };
