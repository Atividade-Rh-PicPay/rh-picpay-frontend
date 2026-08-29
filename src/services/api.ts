import axios from 'axios'
import { decrement, increment } from './loading.store';

export const api = axios.create({
  baseURL: import.meta.env.VITE_RH_API_URL,
  timeout: 10000,
  withCredentials: true
}); 

api.interceptors.request.use((config) => {
  increment();
  return config;
});

api.interceptors.response.use(
  (response) => {
    decrement();
    return response;
  },
  (error) => {
    decrement();
    return Promise.reject(error);
  }
);
