import axios from 'axios';

const databaseURL = import.meta.env.DATABASE_URL;

const api = axios.create({
  baseURL: databaseURL
});

export default api;