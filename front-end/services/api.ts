import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const databaseURL = process.env.DATABASE_URL;

const api = axios.create({
  baseURL: databaseURL
});

export default api;