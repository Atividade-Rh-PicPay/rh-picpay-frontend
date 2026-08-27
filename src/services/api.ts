import axios from 'axios'
import { getAuthToken } from './auth.service';

export const api = axios.create({
  baseURL: import.meta.env.VITE_RH_API_URL,
  timeout: 10000,
}); 

api.interceptors.request.use((config) => {
  const accessToken = getAuthToken();
 
  console.log(accessToken);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
 
  return config;
});
