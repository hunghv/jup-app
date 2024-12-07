import axios from 'axios';
import { getLocalStorage } from './localStorageHelper';
// import { API_URL } from './config';

const apiClient = axios.create({
  baseURL: 'https://jup-service.vercel.app',
  //   baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = await getLocalStorage('accessToken'); // Hoặc lấy token từ Firebase hoặc Context

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Methods'] =
      'GET,PUT,POST,DELETE,PATCH,OPTIONS';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      //   toastError('Token expired or invalid. Please login again.');
      console.log('Token expired or invalid. Please login again.');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
